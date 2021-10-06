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
use WP_Query;

class Rooms extends BaseClass {

    public function get_rooms($request) {
        $query =  Filters::rooms_filters($request);

        if(!$query) wp_send_json([], 200);

        $results = new WP_Query($query);

        $rooms = $results->posts;

        $rooms = $this->add_rooms_additional_details($rooms);
        
        return wp_send_json($rooms, 200);
    }
}