<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

namespace inc\custommapsmeta\callbacks;

final class FrontEndCallbacks {
    public function index($args) {
        return require WORKINGSPACE_INC_DIR.'custommapsmeta/callbacks/views/front-index.php';
    }
}