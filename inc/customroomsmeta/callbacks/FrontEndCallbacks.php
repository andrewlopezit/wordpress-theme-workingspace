<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

namespace Inc\customroomsmeta\Callbacks;

final class FrontEndCallbacks {
    public function index($args) {
        return require_once WORKINGSPACE_INC_DIR.'customroomsmeta/callbacks/views/front-index.php';
    }
}