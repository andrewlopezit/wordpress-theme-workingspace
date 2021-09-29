<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

namespace Inc\Classes\CustomAPI;

use Inc\Classes\CustomAPI\Endpoints\Workingspaces;
use Inc\Classes\CustomAPI\Endpoints\Rooms;
use Inc\Classes\CustomAPI\Endpoints\Posts;
use Inc\Classes\CustomAPI\Endpoints\Inquiries;
use Inc\Classes\CustomAPI\Endpoints\Search;
use Inc\Classes\CustomAPI\Endpoints\Auth;

use WP_REST_SERVER;


class Routes {
    
    public function __construct() {

        //----------------------------------------
        //   W O R K I N G S P A C E S
        //----------------------------------------
        add_action('rest_api_init', function() {
            register_rest_route('wp/v2', 'workingspaces/(?P<id>\d+)/rooms', array(
              'methods' => WP_REST_SERVER::READABLE,
              'callback' => array(new Workingspaces(), 'get_workingspace_rooms'),
              'args' => array(
                'id' =>array(
                    'validate_callback' => function($param, $request, $key) {
                      return is_numeric( $param );
                    }
                ),
              ),
              'permission_callback' => array($this, 'get_permission_callback')
            ));

            register_rest_route('wp/v2', 'workingspaces/(?P<id>\d+)/rooms/(?P<room_id>\d+)', array(
              'methods' => WP_REST_SERVER::READABLE,
              'callback' => array(new Workingspaces(), 'get_workingspace_room_byid'),
              'args' => array(
                'id' =>array(
                    'validate_callback' => function($param, $request, $key) {
                      return is_numeric( $param );
                    }
                ),
                'room_id' =>array(
                  'validate_callback' => function($param, $request, $key) {
                    return is_numeric( $param );
                  }
              ),
              ),
              'permission_callback' => array(new Workingspaces(), 'get_permission_callback')
            ));

            register_rest_route('wp/v2', 'workingspaces', array(
              'methods' => WP_REST_SERVER::READABLE,
              'callback' => array(new Workingspaces(), 'get_workingspaces'),
              'args' => array(
              ),
              'permission_callback' => array($this, 'get_permission_callback')
            ));

            //----------------------------------------
            //   R O O M S
            //----------------------------------------
            register_rest_route('wp/v2', 'rooms', array(
              'methods' => WP_REST_SERVER::READABLE,
              'callback' => array(new Rooms(), 'get_rooms'),
              'permission_callback' => array($this, 'get_permission_callback')
            ));

            //----------------------------------------
            //   P O S T S
            //----------------------------------------
            register_rest_route('wp/v2', 'posts', array(
              'methods' => WP_REST_SERVER::READABLE,
              'callback' => array(new Posts(), 'get_posts'),
              'permission_callback' => array($this, 'get_permission_callback')
            ));

            //----------------------------------------
            //   I N Q U I R I E S
            //----------------------------------------
            register_rest_route('wp/v2', 'inquiries', array(
              'methods' => WP_REST_SERVER::CREATABLE,
              'callback' => array(new Inquiries(), 'create_inquiries'),
              'permission_callback' => array($this, 'get_post_permission_callback')
            ));

            //----------------------------------------
            //   S E A R C H
            //----------------------------------------
            register_rest_route('wp/v2', 'search', array(
              'methods' => WP_REST_SERVER::READABLE,
              'callback' => array(new Search(), 'search_all'),
              'permission_callback' => array($this, 'get_permission_callback')
            ));

            //----------------------------------------
            //   A U T H
            //----------------------------------------
            register_rest_route('wp/v2', 'auth/login', array(
              'methods' => WP_REST_SERVER::CREATABLE,
              'callback' => array(new Auth(), 'login'),
              'permission_callback' => array($this, 'get_permission_callback')
            ));

            //----------------------------------------
            //   A U T H
            //----------------------------------------
            register_rest_route('wp/v2', 'auth/checknonce', array(
              'methods' => WP_REST_SERVER::READABLE,
              'callback' => array(new Auth(), 'check_nonce'),
              'permission_callback' => array($this, 'get_permission_callback')
            ));
        });
        
    }

    public function get_permission_callback() {
        // return get_http_origin() ? true : false;
        return true;
    }

    public function get_post_permission_callback($request) {
      $headers = $request->get_headers();
      
      if(!wp_verify_nonce($headers['x_wp_nonce'][0], 'wp_rest')) return false;

      return true;
  }
}