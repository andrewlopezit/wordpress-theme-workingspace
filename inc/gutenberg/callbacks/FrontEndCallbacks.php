<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

namespace Inc\Gutenberg\Callbacks;

final class FrontEndCallbacks {
    public function featured_posts($args) {
        return require WORKINGSPACE_INC_DIR.'gutenberg/callbacks/views/featured-posts.php';
    }
}