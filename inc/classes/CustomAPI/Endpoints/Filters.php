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

use Inc\Helpers\Posts;
use Inc\Helpers\Rooms;

final class Filters {
    
    public static function workingspaces_filters($request) {
      $post_ids = [];
      $related_rooms_meta_query = [];
      $room_ids = [];
      $query = array(
        'post_type' => 'workingspaces'
      );
      
      if(isset($request['country'])) {
        $country_meta_query = array(
            'key' => 'related_country',
            'compare' => '=',
            'value' => $request['country']
        );
      
        array_push($related_rooms_meta_query, $country_meta_query);
      }
      
      if(isset($request['room_categories'])) {
        $rooms = Posts::get_rooms_by_categoroies(explode(',',$request['room_categories']));
      
        if($rooms) {
          $rooms = new Rooms($rooms);
          $room_ids = $rooms->ids();
        }
      }
      
      $rooms = new Rooms();
      if(isset($request['capacity'])) {
        $room_ids = array_unique(array_merge($room_ids, $rooms->capacity($request['capacity'])->ids()));
      }
      
      if(isset($request['price_range'])) {
        $room_ids = array_unique(array_merge($room_ids, $rooms->price_range($request['price_range'])->ids()));
      }
      
      if($room_ids) {
        $rooms_meta_query = array('relation' => 'OR');
        
        foreach($room_ids as $id) {
            array_push($rooms_meta_query, array(
                'key' => 'related_rooms',
                'value' => $id,
                'compare' => 'LIKE',

            ));
        }
      
        array_push($related_rooms_meta_query, $rooms_meta_query);
      }
      
      if($related_rooms_meta_query) $query['meta_query'] = $related_rooms_meta_query;
      
        return $query;
    }
}
