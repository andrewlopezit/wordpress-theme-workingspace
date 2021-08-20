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

use Inc\Helpers\Posts;
use Inc\Helpers\Rooms;
use Inc\Helpers\Workingspaces;

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
            //----------------------------------------
            register_rest_route('wp/v2', 'workingspaces', array(
              'methods' => WP_REST_SERVER::READABLE,
              'callback' => array($this, 'get_workingspaces'),
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

    public function get_workingspaces($request) {

      $post_ids = [];
      $workingspacesMetaQuery = array('relation' => 'AND');
      $offset = 0;

      if(isset($request['country'])) {
        array_push($workingspacesMetaQuery, array(
          'key' => 'related_country',
          'compare' => '=',
          'value' => $request['country']
      ));
      }

      if(isset($request['room_categories'])) {
        $rooms = Posts::get_rooms_by_categoroies(explode(',',$request['room_categories']));

        foreach($rooms as $room) {
            array_push($workingspacesMetaQuery, array(
                'key' => 'related_rooms',
                'compare' => 'LIKE',
                'value' => $room->ID
            ));
        }
      }

      $query = array(
        'post_type' => 'workingspaces',
        'post__in' => $post_ids,
        'meta_query' => $workingspacesMetaQuery
      );

      $results = new WP_Query($query);

      if(count($results->posts) < 1) return wp_send_json([], 200);

      $results = $results->posts;
      $rooms_details =  $this->add_rooms_additional_details(Posts::get_rooms_by_workingspaces_with_id($results));
      
      $rooms = new Rooms($rooms_details);

      if(isset($request['capacity'])) $rooms = $rooms->has_capacity($request['capacity']);
      if(isset($request['price_range'])) $rooms = $rooms->price_range($request['price_range']);


      $filtered_room_workingspace_ids = $rooms->workingspace_ids();
      
      $workingspaces = new Workingspaces($results);
      $workingspaces = $workingspaces->has_ids($filtered_room_workingspace_ids)
                                     ->get(); 

      $filtered_workingspaces = $this->add_workingspaces_additional_details($workingspaces, $rooms_details);

      $results = array(
        'posts' => $filtered_workingspaces,
        'pagination' => array(
          'offset' => $offset,
          'post_per_page' => get_option( 'posts_per_page' ),
          'total' => wp_count_posts('workingspaces')
        )
      );

      return wp_send_json($results, 200);
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

      $results = $this->add_rooms_additional_details($results->posts, $request_id);
      
      return wp_send_json($results, 200);
    }
    

    public function get_workingspace_room_byid($request) {
      $request_id = $request['id'];
      $room_id = $request['room_id'];

      if(!$request_id) return wp_send_json_error('No results found', 404);


      $result = get_post($room_id);

      $results = $this->add_rooms_additional_details([$result], $request_id);
      
      return wp_send_json($results[0], 200);
    }
//------------------------------------------------------------------------------
    public function add_rooms_additional_details($posts) {
      $rooms = [];

      foreach($posts as $val) {
        $room = $val;
        $room->featured_image = get_the_post_thumbnail($room->ID,'posts');
        $room->categories =  get_the_category($room->ID);
        $room->room_rate = get_field('room_rate', $val->ID);
        $room->post_content_trim = wp_trim_words(strip_tags($room->post_content), 50);
        $room->post_excerpt = wp_trim_words($room->post_excerpt, 50);
        $room->capacity = get_field('capacity', $val->ID);

        array_push($rooms, $room);
      }

      return $rooms;
    }

    public function add_workingspaces_additional_details($posts, $rooms = null) {
        $workingspaces = [];

        foreach ($posts as $val) {
            $workingspace = $val;
            $workingspace->featured_image = esc_url(wp_get_attachment_image_src(get_post_thumbnail_id($workingspace->ID), 'posts')[0]);
            $workingspace->post_content_trim = wp_trim_words(strip_tags($workingspace->post_content), 50);
            $workingspace->post_excerpt = wp_trim_words($workingspace->post_excerpt, 50);

            if($rooms) {
              $capacity_list = [];
              foreach($rooms as $room) {
                
                if(isset($room->workingspace_id) && $room->workingspace_id == $workingspace->ID) {
                  array_push($capacity_list, $room->capacity);
                }
              }
              $workingspace->capacity_list = $capacity_list;
            }

            array_push($workingspaces, $workingspace);
        }

        return $workingspaces;
    }
}