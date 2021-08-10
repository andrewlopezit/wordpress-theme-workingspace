<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

namespace Inc\Classes;

use WP_REST_Server;
use WP_REST_Controller;
use WP_Query;

class CustomApi extends WP_REST_Controller {
    
    public function __construct() {
        add_action('rest_api_init', function() {
            register_rest_route('wp/v2', 'workingspaces/(?P<id>\d+)/rooms', array(
              'methods' => WP_REST_SERVER::READABLE,
              'callback' => array($this, 'get_workingspace_rooms'),
              'args' => array(
                'id' =>array(
                    'validate_callback' => function($param, $request, $key) {
                      return is_numeric( $param );
                    }
                ),
              ),
              'permission_callback' => array($this, 'get_permission_callback')
            ));
          });
    }

    public function get_permission_callback() {
      // return get_http_origin() ? true : false;
      return true;
    }

    public function get_workingspace_rooms($request) {

      $request_id = $request['id'];
      $reqest_search = $request['search'];

      if(!$request_id) return wp_send_json_error('No results found', 404);

      $rooms = get_field('related_rooms', $request_id);

      if(!$rooms) return wp_send_json_error('No results found', 404);

      $room_ids = array_map(function($rooms) {return $rooms->ID;}, $rooms); 

      $results = new WP_Query(array(
        'post_type' => 'rooms',
        's' => sanitize_text_field($reqest_search),
        'post__in' => $room_ids
      ));

      $rooms =[];

      foreach($results->posts as $result) {
        $post = $result;
        $post->featured_image = get_the_post_thumbnail($result->ID);
        $post->categories =  get_the_category($post->ID);
        $post->room_rate = get_field('room_rate', $result->ID);

        array_push($rooms, $post);
      }

      $results = $rooms;
      return wp_send_json($results, 200);
    }


}