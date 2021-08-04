<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */


 function get_rooms_price_range($rooms) {
    $prices = [];

    foreach($rooms as $room) {
        $price = get_field('room_rate', $room->ID);

        array_push($prices, $price);
    }
    $priceTo = count($prices) > 1 ? ' - '.number_format(max($prices),2).'/month' : '/month';

    return '$ '.number_format(min($prices),2).$priceTo;
     
 } 