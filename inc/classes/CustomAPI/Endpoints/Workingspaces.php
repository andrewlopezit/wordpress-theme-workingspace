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

use Inc\Helpers\Workingspaces as WorkspacesHelpers;

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

  public function like_workingspace_by_user_id($request) {
    $user = get_user_by('ID', sanitize_text_field($request['user_id']));
    $workingspaces = get_post(sanitize_text_field($request['workingspace_id']));

    $user = $user->data ?? null;

    if(!$user || !$workingspaces) return wp_send_json_error('Bad request', 400);
    $user_workingspace_meta_key = 'workingspace_like_ids';

    $workingspace_ids = get_user_meta( $user->ID, $user_workingspace_meta_key, true);

    if(!is_array($workingspace_ids)) {
      add_user_meta( $user->ID, $user_workingspace_meta_key, array($workingspaces->ID), true);

      return wp_send_json([$workingspaces->ID], 200);
    }

    if(in_array($workingspaces->ID, $workingspace_ids)) wp_send_json($workingspace_ids, 200);


    array_push($workingspace_ids, $workingspaces->ID);

    update_user_meta( $user->ID, $user_workingspace_meta_key, $workingspace_ids );

    return wp_send_json($workingspace_ids, 200);
  }

  public function dislike_workingspace_by_user_id($request) {
    $user = get_user_by('ID', sanitize_text_field($request['user_id']));
    $workingspace_id = intval(sanitize_text_field($request['workingspace_id']));

    $user = $user->data ?? null;

    if(!$user) return wp_send_json_error('Bad request', 400);

    $user_workingspace_meta_key = 'workingspace_like_ids';

    $workingspace_ids = get_user_meta( $user->ID, $user_workingspace_meta_key, true);

    if(!is_array($workingspace_ids)) return wp_send_json_error('Bad request', 400);

    if (($index = array_search($workingspace_id, $workingspace_ids)) !== false) {
      array_splice($workingspace_ids, $index, $index+1);
      update_user_meta( $user->ID, $user_workingspace_meta_key, $workingspace_ids );
    }

    return wp_send_json($workingspace_ids, 200);
  }
}