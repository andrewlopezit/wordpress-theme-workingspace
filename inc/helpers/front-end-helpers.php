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
    
        foreach($rooms as $room) {
            $price = get_field('room_rate', $room->ID);
    
            array_push($prices, $price);
        }
        $priceTo = count($prices) > 1 ? ' - '.number_format(max($prices),2).'/month' : '/month';
    
        return '$ '.number_format(min($prices),2).$priceTo;
         
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
 if(!function_exists('get_workingspaces_location')) {
    function get_workingspaces_location() {
        $data = get_post_meta( get_the_ID(), 'custom_maps_mapbox_form_key', true );

        if(!isset($data['place_name'])) return null;

        return $data['place_name'];
    }
 }
