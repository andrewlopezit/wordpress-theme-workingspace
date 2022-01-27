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
use WP_Query;

class Posts extends BaseClass {

    public function get_posts($request) {
        $query =  Filters::posts_filters($request);

        if(!$query) wp_send_json([], 200);

        $results = new WP_Query($query);

        $posts = $results->posts;

        $posts = $this->add_posts_additional_details($posts);

        return wp_send_json($posts, 200);
    }
}