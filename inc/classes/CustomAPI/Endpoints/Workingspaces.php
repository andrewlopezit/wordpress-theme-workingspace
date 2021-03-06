<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

namespace inc\classes\customapi\endpoints;

use inc\classes\customapi\endpoints\BaseClass;
use inc\classes\customapi\endpoints\Filters;

use inc\helpers\Workingspaces as WorkspacesHelpers;

use WP_Query;

class Workingspaces extends BaseClass {

  private $_paginated_posts = [];

  public function get_workingspaces($request) {
    $query =  Filters::workingspaces_filters($request);

    if(!$query) wp_send_json([], 200);

    $results = new WP_Query($query);

    if(count($results->posts) < 1&& count($this->_paginated_posts) < 1) return wp_send_json([], 200);
  
    $workingspaces = $this->add_workingspaces_additional_details($results->posts);
    $filtered_workingpaces = new WorkspacesHelpers($workingspaces);

    $filtered_workingpaces = $filtered_workingpaces->capacity($request['capacities'])->price_range($request['price_range'])->get();
    
    if((isset($request['paged']) || isset($request['offset'])) && 
       count($results->posts) > 0 &&
       count($this->_paginated_posts) < (int) get_option( 'posts_per_page' )) {
      
        $per_page = get_option( 'posts_per_page' );
        $request['paged'] = (int)$request['paged']+1;
        $request['offset'] = ((int)$request['paged']* $per_page) - $per_page;

      if(count($filtered_workingpaces) > 0) {
        $this->_paginated_posts = array_merge($this->_paginated_posts, $filtered_workingpaces);
      }

      $this->get_workingspaces($request);
    }

    if(count($this->_paginated_posts)) {
      $results = array(
        'posts' => $this->_paginated_posts,
        'pagination' => array(
          'offset' => $request['offset'],
          'post_per_page' => get_option( 'posts_per_page' ),
          'total' => wp_count_posts('workingspaces')
        )
      );

      return wp_send_json($results, 200);
    }

    return $workingspaces;

  }

  public function get_workingspace_rooms($request) {

    $workingspace_id = $request['id'];
    
    $query = array(
      'post_type' => 'rooms',
    );

    if(isset($request['search'])) {
      $request_search = $request['search'];
      $query['s'] = sanitize_text_field($request_search);
    }
    
    if(isset($request['ids'])) {
      $room_ids = isset($request['ids']) ? explode(',',$request['ids']) : null;
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