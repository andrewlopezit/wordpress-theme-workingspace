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
            register_rest_route('wp/v2', 'workingspaces/(?P<id>\d+)/rooms/(?P<room_id>\d+)', array(
              'methods' => WP_REST_SERVER::READABLE,
              'callback' => array($this, 'get_workingspace_room_byid'),
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
      $request_ids = isset($request['ids']) ? explode(',',$request['ids']) : null;

      if(!$request_id) return wp_send_json_error('No results found', 404);

      $rooms = get_field('related_rooms', $request_id);

      if(!$rooms) return wp_send_json_error('No results found', 404);

      $room_ids = array_map(function($rooms) {return $rooms->ID;}, $rooms); 

      $results = new WP_Query(array(
        'post_type' => 'rooms',
        's' => sanitize_text_field($reqest_search),
        'post__in' => $request_ids ?? $room_ids
      ));

      $results = $this->add_workingspaces_details($results->posts);
      
      return wp_send_json($results, 200);
    }
    

    public function get_workingspace_room_byid($request) {
      $request_id = $request['id'];
      $room_id = $request['room_id'];

      if(!$request_id) return wp_send_json_error('No results found', 404);


      $result = get_post($room_id);

      $results = $this->add_workingspaces_details([$result]);
      
      return wp_send_json($results[0], 200);
    }

    public function add_workingspaces_details($posts) {
      $rooms = [];

      foreach($posts as $val) {
        $post = $val;
        $post->featured_image = get_the_post_thumbnail($val->ID);
        $post->categories =  get_the_category($post->ID);
        $post->room_rate = get_field('room_rate', $val->ID);
        $post->post_content_trim = wp_trim_words(strip_tags($val->post_content), 50);
        $post->post_excerpt = wp_trim_words($val->post_excerpt, 50);

        array_push($rooms, $post);
      }

      return $rooms;
    }
}