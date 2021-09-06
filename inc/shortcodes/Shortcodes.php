<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

namespace Inc\Shortcodes;

class Shortcodes {

    public function init() {
        add_shortcode('template_posts', array( $this, 'get_posts_template_parts_callback' ));
    }

    public function get_posts_template_parts_callback($args){
        ob_start();
        get_template_part('partials/content/content','post', $args);
        return ob_get_clean();
    }
}