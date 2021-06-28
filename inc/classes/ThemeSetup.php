<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

namespace Inc\Classes;

use Inc\Classes\Enqueue;

final class ThemeSetup {

    public static function Enqueue() {
        return new Enqueue();
    }

}