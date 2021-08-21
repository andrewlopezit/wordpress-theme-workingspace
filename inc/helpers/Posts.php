<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

 namespace Inc\Helpers;

 use WP_Query;

 final class Posts  {

    public static function  get_rooms_by_categoroies($categories) {
        if(!isset($categories)) return;

        $results = new WP_Query(array(
            'post_type' => 'rooms',
            'tax_query' => array(
              array(
                  'taxonomy' => 'category',
                  'field'    => 'id',
                  'terms'    => $categories,
              ),
             ),
        ));
          
        return $results->posts;
    }

    public static function  get_rooms_by_workingspaces_has_id($workingspaces, $has_id = false) {
        if(!isset($workingspaces)) return;

        $serialize_rooms = [];

        foreach($workingspaces as $workingspace) {
            $results = get_field('related_rooms', $workingspace->ID);

            if($results) {
                foreach($results as $res) {
                    if($has_id) $res->workingspace_id = $workingspace->ID;
                    array_push($serialize_rooms, serialize($res));
                }
            }
        }

        $serialize_rooms = array_unique($serialize_rooms);

        $rooms = [];

        foreach($serialize_rooms as $serialize_room) {
            array_push($rooms, unserialize($serialize_room));
        }

        return $rooms;
    }
}