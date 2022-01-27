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

use inc\customizer\sections\Navigation;
use inc\customizer\sections\Header;
use inc\customizer\sections\Color;
use inc\customizer\sections\Footer;

use inc\classes\ThemeSetup;

final class ThemeCustomizer  {

   public function __construct() {
      add_action('customize_register', array($this, 'theme_customizer_callback'));

      $this->enqueue_scripts();
      // $this->enqueue_styles();
   }

   public function theme_customizer_callback($wp_customize) {
      new Color($wp_customize);
      new Header($wp_customize);
      new Navigation($wp_customize);
      new Footer($wp_customize);
   }

   public function enqueue_scripts() {
      $theme_setup = ThemeSetup::EnqueueScript();
      $theme_customizer_js_src = WORKINGSPACEWP_THEME_URI.'/inc/customizer/js/theme-customizer.js';

      $theme_setup
      ->script(
         array(
            'handle' => 'theme-customizer-js',
            'src' => $theme_customizer_js_src,
            'ver' => WORKINGSPACE_THEME_VERSION,
            'deps' => array(
               'jQuery@3.6',
            )
         )
      )
      ->enqueue(
         array('theme-customizer')
      );
   }
   
   public function enqueue_styles() {
      $theme_setup = ThemeSetup::EnqueueScript();
      $theme_customizer_css_src = WORKINGSPACEWP_THEME_URI.'/inc/customizer/css/theme-customizer.css';

      $theme_setup
      ->script(
          array(
              'handle' => 'theme-customizer_css',
              'src' => $theme_customizer_css_src,
              'ver' => WORKINGSPACE_THEME_VERSION,
            )
      )
      ->enqueue(
         array('theme-customizer')
      );
   }
}