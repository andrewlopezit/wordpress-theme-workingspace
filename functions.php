<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if(file_exists(dirname(__FILE__).'/vendor/autoload.php')) {
    require_once dirname(__FILE__).'/vendor/autoload.php';
}

use Inc\Classes\ThemeSetup;

// Core Constants.
define( 'WORKINGSPACEWP_THEME_DIR', get_template_directory() );
define( 'WORKINGSPACEWP_THEME_URI', get_template_directory_uri() );


if(!class_exists('WorkingspaceTheme')) {

    final class WorkingspaceTheme {
        private static $theme_setup;
    
        /**
         * Main Theme Constructor
         */
        public function __construct(){
            // init global constant
            $this->workingspace_variable_init();
    
            // load require files.
            $this->import_core_files();
        }
    
        public function workingspace_variable_init() {
            $version = self::get_theme_version();
    
            // Theme version.
            define( 'WORKINGSPACE_THEME_VERSION', $version );
    
            // Javascript and CSS Paths.
            define( 'WORKINGSPACE_JS_DIR_URI', WORKINGSPACEWP_THEME_URI . '/assets/js/' );
            define( 'WORKINGSPACE_CSS_DIR_URI', WORKINGSPACEWP_THEME_URI . '/assets/css/' );
    
            // Include Paths.
            define( 'WORKINGSPACE_INC_DIR', WORKINGSPACEWP_THEME_DIR . '/inc/' );
            define( 'WORKINGSPACE_INC_DIR_URI', WORKINGSPACEWP_THEME_URI . '/inc/' );
    
            // Classes Paths.
            define( 'WORKINGSPACE_CLASSES_DIR', WORKINGSPACEWP_THEME_DIR . '/classes/' );
            define( 'WORKINGSPACE_CLASSES_DIR_URI', WORKINGSPACEWP_THEME_URI . '/classes/' );
    
            /** Admin Panel */
            if(is_admin()) { 
    
            /** Frontend */    
            } else {
                $this->enqueue_style();
            }
        } 
    
        /**
         * Returns current theme version
         * 
         * @since 1.0
         */
        public static function get_theme_version() {
            // get theme data.
            $theme = wp_get_theme();
    
            return $theme->get('Version');
        }
    
        /**
         * Load all core theme files
         */
        public function import_core_files() {
    
        }
    
        /**
         *  Enqueuue stylesheet
         */
        public function enqueue_style() {
    
            $enqueue = ThemeSetup::Enqueue();
    
            // Define dir
            $css_dir = WORKINGSPACE_CSS_DIR_URI;
            $main_style_dir = WORKINGSPACEWP_THEME_URI. '/style.css';
            $theme_version = WORKINGSPACE_THEME_VERSION;
    
            $classes_dir = WORKINGSPACE_CLASSES_DIR;
    
            /**
             *  To add new stylesheet just chain the method
             *  (style) and pass an object
             *  array( 
             *   handle => main, 
             *   src = '', 
             *   $deps = array(),
             *   $ver = false, 
             *   $media = 'all'
             *  ); 
             */
    
            $enqueue 
            ->style(
                array(
                    'handle' => 'workingspace-style',
                    'src' => $main_style_dir,
                    'ver' => $theme_version
                )
            )
            ->load();
            
        }
    }
}
new WorkingspaceTheme();