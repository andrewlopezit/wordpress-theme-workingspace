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

            $this->add_theme_color();

        }else {
            $this->register_front_end_blocks();
        }
    }

    public function add_theme_color() {
        add_theme_support(
            'editor-color-palette',
            array(
                array(
                    'name' => 'yellow',
                    'slug' => 'yellow',
                    'color' => '#FDD500'
                ),
                array(
                    'name' => 'cyan',
                    'slug' => 'cyan',
                    'color' => '#00CEB5'
                ),
                array(
                    'name' => 'lightgray',
                    'slug' => 'lightgray',
                    'color' => '#f4f6f5'
                ),
                array(
                    'name' => 'gray',
                    'slug' => 'gray',
                    'color' => '#4f4f4f'
                ),
                array(
                    'name' => 'white',
                    'slug' => 'white',
                    'color' => '#f9f9f9'
                )
            )
        );
    }

    public function enqueue_backend_script_style_callback() {
        wp_register_script('custom-gutenberg-js', WORKINGSPACE_JS_DIR_URI.'gutenberg.js',
                     array('wp-blocks', 'wp-components', 'wp-compose', 'wp-editor', 'wp-element',
                           'wp-hooks'));

        wp_register_style('custom-gutenberg-css', WORKINGSPACE_CSS_DIR_URI.'gutenberg.css');

        register_block_type('workingspaces/guteberg-blocks', array(
            'editor_script' => 'custom-gutenberg-js',
            'editor_style' => 'custom-gutenberg-css'
        ));

        // Localize the script with new data
        $translation_array = array(
            'site_url' => esc_url(site_url()),
            'assets_dir' => WORKINGSPACE_ASSETS_DIR,
        );

        wp_localize_script('custom-gutenberg-js', 'translation_array', $translation_array);
        wp_enqueue_script('custom-gutenberg-js');
    }

    public function register_front_end_blocks() {
        /**
         *  FRONT END GUTENBERG BLOCKS
         * 
         *  Featured Posts
         */
        register_block_type('workingspaces/featured-posts', array(
            'render_callback' => array($this, 'featured_posts_blocks_callback'),
        ));

        // Custom latest posts
        register_block_type('workingspaces/latest-posts', array(
            'render_callback' => array($this, 'latest_posts_blocks_callback'),
        ));

        // icon
        register_block_type('workingspaces/icons', array(
            'render_callback' => array($this, 'icon_blocks_callback'),
        ));

        // headshot
        register_block_type('workingspaces/headshot', array(
            'render_callback' => array($this, 'headshot_blocks_callback'),
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

    public function latest_posts_blocks_callback($args) {
        $this->frontend = new FrontEndCallbacks();
        $this->frontend->latest_posts($args);
        return ob_get_clean();
    }

    public function icon_blocks_callback($args) {
        $this->frontend = new FrontEndCallbacks();
        $this->frontend->icon($args);
        return ob_get_clean();
    }

    public function headshot_blocks_callback($args) {
        $this->frontend = new FrontEndCallbacks();
        $this->frontend->headshot($args);
        return ob_get_clean();
    }
}