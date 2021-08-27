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
use WP_REST_SERVER;


class Routes {
    
    public function __construct() {

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

            //----------------------------------------
            //   W O R K I N G S P A C E S
            //----------------------------------------

            register_rest_route('wp/v2', 'workingspaces', array(
              'methods' => WP_REST_SERVER::READABLE,
              'callback' => array(new Workingspaces(), 'get_workingspaces'),
              'args' => array(
              ),
              'permission_callback' => array($this, 'get_permission_callback')
            ));
          });
        
    }

    public function get_permission_callback() {
        // return get_http_origin() ? true : false;
        return true;
    }
}