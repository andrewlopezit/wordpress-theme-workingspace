<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

namespace Inc\ACF;

final class ACF {

    public  function init() {
        // add_action('acf/init', array($this, 'register_google_api_key'));
}

     // Method 2: Setting.
    public function register_google_api_key() {
        acf_update_setting('google_api_key', 'AIzaSyA-usy6cT078ikuBaSuYv_KjK1I0D7a_zI');
    }
}