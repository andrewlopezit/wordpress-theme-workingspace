<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

namespace Inc\Customizer;

use Inc\Customizer\Sections\Navigation;

final class ThemeCustomizer  {

   public function __construct() {
      add_action('customize_register', array($this, 'theme_customizer_callback'));
   }

   public function theme_customizer_callback($wp_customize) {
      new Navigation($wp_customize);
   }
}