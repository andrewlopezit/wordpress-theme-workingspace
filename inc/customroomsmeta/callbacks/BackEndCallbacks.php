<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

namespace inc\customroomsmeta\Callbacks;

final class BackEndCallbacks {

    public function index($post) {
        return require_once WORKINGSPACE_INC_DIR.'customroomsmeta/callbacks/views/index.php';
    }
}