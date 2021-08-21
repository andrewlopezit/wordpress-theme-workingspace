<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

namespace Inc\Classes\CustomAPI;

use Inc\Classes\CustomAPI\Routes;

class CustomApi   {
  
    public function __construct() {
      new Routes();
    }
}