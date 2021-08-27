<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

namespace Inc\Classes\CustomAPI\Endpoints;

use Inc\Classes\CustomAPI\Endpoints\BaseClass;
use Inc\Classes\CustomAPI\Endpoints\Filters;

use Inc\Helpers\Posts;
use Inc\Helpers\Rooms;
use Inc\Helpers\Workingspaces as WorkspacesHelpers;

use WP_Query;

class Workingspaces extends BaseClass {

    public function get_workingspaces($request) {
  
      $filters = array(
        'country' => $request['country'],
        'room_categories' => $request['room_categories'],
      );

      $query =  Filters::workingspaces_filters($filters);

      if(!$query) wp_send_json([], 200);

      $results = new WP_Query($query);

      if(count($results->posts) < 1) return wp_send_json([], 200);
    
      $workingspaces = $this->add_workingspaces_additional_details($results->posts);
      $filtered_workingpaces = new WorkspacesHelpers($workingspaces);

      $filtered_workingpaces = $filtered_workingpaces->capacity($request['capacities'])->price_range($request['price_range'])->get();
      $results = array(
        'posts' => $filtered_workingpaces,
        'pagination' => array(
          'post_per_page' => get_option( 'posts_per_page' ),
          'total' => wp_count_posts('workingspaces')
        )
      );

      return wp_send_json($results, 200);
    }

    public function get_workingspace_rooms($request) {

      $workingspace_id = $request['id'];
      $request_search = $request['search'];
      $room_ids = isset($request['ids']) ? explode(',',$request['ids']) : null;
      
      if(!$room_ids) return wp_send_json_error('No results found', 404);
      
      $query = array(
        'post_type' => 'rooms',
        's' => sanitize_text_field($request_search),
      );
      
      if($room_ids) {
        $query['post__in'] = $room_ids;
        $query['posts_per_page']  = -1;
      }
      
      $results = new WP_Query($query);
      
      $results = $this->add_rooms_additional_details($results->posts, $workingspace_id);
      
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
}