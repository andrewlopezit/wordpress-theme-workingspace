<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

namespace Inc\Gutenberg;

use Inc\Gutenberg\Callbacks\FrontEndCallbacks;

class Gutenberg {

    public function init() {
        if(is_admin()) {
            add_action('init', array($this, 'enqueue_backend_script_style_callback'));
            add_filter( 'block_categories_all', array($this, 'workingspace_block_categories'));
        }else {
            $this->register_front_end_blocks();
        }
    }

    public function enqueue_backend_scripts() {
    }

    public function enqueue_backend_script_style_callback() {
        wp_register_script('custom-gutenberg-js', WORKINGSPACE_JS_DIR_URI.'gutenberg.js',array('wp-blocks', 'wp-components', 'wp-compose', 'wp-editor', 'wp-element', 'wp-hooks'));
        wp_register_style('custom-gutenberg-css', WORKINGSPACE_CSS_DIR_URI.'gutenberg.css');

        register_block_type('workingspaces/featured-posts', array(
            'editor_script' => 'custom-gutenberg-js',
            'editor_style' => 'custom-gutenberg-css'
        ));
    }

    public function register_front_end_blocks() {
        register_block_type('workingspaces/featured-posts', array(
            'render_callback' => array($this, 'featured_posts_blocks_callback'),
        ));
    }

    public function workingspace_block_categories ($categories) {
        return array_merge(
            $categories,
            [
                [
                    'slug'  => 'workingspace-blocks',
                    'title' => __( 'Workingspace Blocks', 'workingspace-boilerplate' ),
                ],
            ]
        );
    }

    public function featured_posts_blocks_callback($args) {
        $this->frontend = new FrontEndCallbacks();
        $this->frontend->featured_posts($args);
        return ob_get_clean();
    }
}