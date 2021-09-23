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

class Search extends BaseClass {

    function search_all($request) {

        $results_workingspace = new WP_Query(
            array(
                'post_type' => 'workingspaces',
                's' => sanitize_text_field($request['search']) ?? ''
            )
        );

        $results_room = new WP_Query(
            array(
                'post_type' => 'rooms',
                's' => sanitize_text_field($request['search']) ?? ''
            )
        );

        $results_post = new WP_Query(
            array(
                'post_type' => 'post',
                's' => sanitize_text_field($request['search']) ?? ''
            )
        );

        return wp_send_json(array(
            'posts' => array(
                'workingspaces' => $this->add_workingspaces_additional_details($results_workingspace->posts),
                'rooms' => $this->add_rooms_additional_details($results_room->posts),
                'posts' => $this->add_posts_additional_details($results_post->posts)
            )
        ), 200);
    }
}