<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

namespace inc\shortcodes;

class Shortcodes {

    public function init() {
        add_shortcode('template_posts', array( $this, 'get_posts_template_parts_callback' ));
        add_shortcode('testimonials', array( $this, 'get_testimonials_template_parts_callback' ));
        add_shortcode('request_form', array( $this, 'get_request_form_component_template_parts_callback' ));
        add_shortcode('workingspaces_maps', array( $this, 'get_workingspaces_map_template_parts_callback' ));

    }

    public function get_posts_template_parts_callback($args){
        ob_start();
        get_template_part('partials/content/content','post', $args);
        return ob_get_clean();
    }

    public function get_testimonials_template_parts_callback($args){
        ob_start();
        get_template_part('partials/content/content','testimonials');
        return ob_get_clean();
    }

    public function get_workingspaces_map_template_parts_callback($args){
        ob_start();
        get_template_part('partials/content/content','workingspaces-maps', $args);
        return ob_get_clean();
    }

    public function get_request_form_component_template_parts_callback(){
        ob_start();
        get_template_part('partials/components/request-form');
        return ob_get_clean();
    }
}