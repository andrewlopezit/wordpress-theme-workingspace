<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */


 if(!function_exists('get_rooms_price_range')) {
    function get_rooms_price_range($rooms) {
        $prices = [];
    
        if(!$rooms) return null;

        foreach($rooms as $room) {
            $price = get_field('room_rate', $room->ID);
    
            array_push($prices, $price);
        }

        $price_range = array_unique([number_format(min($prices),2), number_format(max($prices),2)]);
        return $price_range;
     } 
 }

 if(!function_exists('get_workingspaces_related_room_categories')) {
    
     function get_workingspaces_related_room_categories() {
        
        $rooms = get_field('related_rooms'); 

        if(!$rooms) return;

        $categories = [];

        foreach($rooms as $room) {
            $room_categories = get_the_category($room->ID);

            foreach($room_categories as $category) {
                if(!has_category_id($categories, $category)) {
                    array_push($categories, $category);
                }
            }

        }
        return $categories; 
     }

     function has_category_id($categories,$category) {
        return in_array($category->term_id, array_map(function($categories) {return $categories->term_id;}, $categories));
    }
 }
 if(!function_exists('get_location')) {
    function get_location($id = null) {
        $data = get_post_meta( $id ? $id : get_the_ID(), 'custom_maps_mapbox_form_key', true );

        if(!isset($data)) return null;

        return $data;
    }
 }

if(!function_exists('get_min_room_rate')) {
    function get_min_room_rate($args = null) {
        $min_room = new WP_Query(array(
            'post_type' => 'rooms',
            'order'     => 'ASC',
            'posts_per_page' => '1',
            'meta_key' => 'room_rate',
            'orderby'   => 'meta_value_num',
        ));
        
        if(count($min_room->posts) < 1) return null;

        $min_room_rate = get_field('room_rate',$min_room->posts[0]->ID);

        return $min_room_rate;
    }
}

if(!function_exists('get_max_room_rate')) {
    function get_max_room_rate($args = null) {
        $max_room = new WP_Query(array(
            'post_type' => 'rooms',
            'order'     => 'DESC',
            'posts_per_page' => '1',
            'meta_key' => 'room_rate',
            'orderby'   => 'meta_value_num',
        ));
        
        if(count($max_room->posts) < 1) return null;

        $max_room_rate = get_field('room_rate',$max_room->posts[0]->ID);
        
        return $max_room_rate;
    }
}

if(!function_exists('get_average_room_rate_country')) {
    function get_average_room_rate_country($country_id) {   

        $room_rates = [];
        $rooms = get_country_rooms($country_id);

        if(count($rooms) < 1) return 0;

        foreach($rooms as $room) {
            $room_rate = get_field('room_rate', $room->ID);
            array_push($room_rates,$room_rate);
        }

        return number_format(array_sum($room_rates)/ count($room_rates), 2);
    }
}



if(!function_exists('get_minimum_seat_rooms')) {
    function get_minimum_seat_rooms($rooms) {
        $capacities = array_map(function($room) {return $room->capacity;}, $rooms);
        
        return min($capacities);
    }
}

if(!function_exists('get_maximmum_seat_rooms')) {
    function get_maximmum_seat_rooms($rooms) {
        $capacities = array_map(function($room) {return $room->capacity;}, $rooms);
        
        return max($capacities);
    }
}

if(!function_exists('get_country_rooms')) {
    function get_country_rooms($country_id) {   
        $workingspace = new WP_Query(array(
            'post_type' => 'workingspaces',
            'meta_query' => array(
                array(
                    'key' => 'related_country',
                    'value' => $country_id,
                    'compare' => '='
                )
            )
        ));

        if(count($workingspace->posts) < 1) return null;

        $rooms = [];

        foreach($workingspace->posts as $workingspace) {
            $related_rooms = get_field('related_rooms', $workingspace->ID);
            if($related_rooms) {
                $rooms = array_merge($rooms, $related_rooms);
            }
        }

        if(!$rooms) return null;

        return $rooms;
    }
}




