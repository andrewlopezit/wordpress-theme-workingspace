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

if(file_exists(dirname(__FILE__).'/inc/helpers/front-end-helpers.php')) {
    require_once dirname(__FILE__).'/inc/helpers/front-end-helpers.php';
}

use Inc\Classes\ThemeSetup;

// Core Constants.
define( 'WORKINGSPACEWP_THEME_DIR', get_template_directory() );
define( 'WORKINGSPACEWP_THEME_URI', get_template_directory_uri() );

if(file_exists(WORKINGSPACEWP_THEME_DIR.'/inc/customizer/working-space-theme-customizer-functions.php')) {
    require_once WORKINGSPACEWP_THEME_DIR.'/inc/customizer/working-space-theme-customizer-functions.php';
}

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

            // Theme name
            define('THEME_NAME', 'workingspace');
    
            // Javascript and CSS Paths.
            define( 'WORKINGSPACE_JS_DIR_URI', WORKINGSPACEWP_THEME_URI . '/assets/build/' );
            define( 'WORKINGSPACE_CSS_DIR_URI', WORKINGSPACEWP_THEME_URI . '/assets/build/' );
    
            // Include Paths.
            define( 'WORKINGSPACE_INC_DIR', WORKINGSPACEWP_THEME_DIR . '/inc/' );
            define( 'WORKINGSPACE_INC_DIR_URI', WORKINGSPACEWP_THEME_URI . '/inc/' );
    
            // Classes Paths.
            define( 'WORKINGSPACE_CLASSES_DIR', WORKINGSPACEWP_THEME_DIR . '/classes/' );
            define( 'WORKINGSPACE_CLASSES_DIR_URI', WORKINGSPACEWP_THEME_URI . '/classes/' );
    
            /** Admin Panel */
            if(is_admin()) { 
                // load all theme support
                $this->add_theme_support();

                // load all menus
                $this->register_menus();
                
            /** Frontend */    
            } else {
                // load all styles
                $this->enqueue_style();

                // load all scripts
                $this->register_script();
                $this->enqueue_scripts();
            }

            /**
             * load frontend and back end;
             */

            // display widgets container
            $this->register_sidebar_widgets();

            // display theme customizer();
            ThemeSetup::ThemeCustomizer();

            // set image image
            $this->set_image_sizes();
        }

//------------------------------------ F U N C T I O N S ----------------------------------------

        public function add_theme_support() {
            /**
             * Add theme support, supply $feature and $args 
             */
             $theme_support = ThemeSetup::ThemeSupport();

             $theme_support
             ->support(
                 array(
                     'feature' => 'menus'
                 )
            )
            ->support(
                array(
                    'feature' => 'widgets'
                )
            )
            ->support(
                array(
                    'feature' => 'post-thumbnails'
                )
            )
             ->add();
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
         * Register scripts it is used for dependency js
         */
        public function register_script() {

            $theme_setup = ThemeSetup::EnqueueScript();

            // Define dir
            $js_dir = WORKINGSPACE_JS_DIR_URI;
            $theme_version = WORKINGSPACE_THEME_VERSION;

            /**
             *  To add new or register scripts just chain the method
             *  (script) and pass an object
             *  array( 
             *   handle => main, 
             *   src = '', 
             *   $deps = array(),
             *   $ver = false, 
             *   $in_footer = false
             *  ); 
             */

             // Register script
            $theme_setup
            ->script(
                array(
                    'handle'=> 'jQuery@3.6',
                    'src' => '//ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js',
                )   
            )
            ->script(
                array(
                    'handle'=> 'JqueryExtendFunction',
                    'deps' => array('jQuery@3.6'),
                    'src' => WORKINGSPACEWP_THEME_URI.'/assets/js/JqueryExtendFunction.js',
                )
            )
            // add the handle for defer script
            // if id or handle included in array params 
            // it will defer in your script tag
            ->register(
                array(
                    'gsap@3.7',
                    'JqueryExtendFunction'
                )
            );
    
        }

        /**
         * Enqueue scripts
         */
        public function enqueue_scripts() {
            $theme_setup = ThemeSetup::EnqueueScript();

            // Define dir
            $js_dir = WORKINGSPACE_JS_DIR_URI;
            $main_js_dir = $js_dir.'index.js';

            $theme_version = WORKINGSPACE_THEME_VERSION;

            /**
             *  To add new or register scripts just chain the method
             *  (script) and pass an object
             *  array( 
             *   handle => main, 
             *   src = '', 
             *   $deps = array(),
             *   $ver = false, 
             *   $in_footer = false
             *  ); 
             */

             // Enqueue script
            $theme_setup
            ->script(
                array(
                    'handle' => 'main',
                    'src' => $main_js_dir,
                    'ver' => $theme_version,
                )
            )
            // add the handle for defer script
            ->enqueue(
                array(
                    'main'
                )
            );
        }
    
        /**
         *  Enqueuue stylesheet
         */
        public function enqueue_style() {
    
            $theme_setup = ThemeSetup::EnqueueStyle();
    
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
    
            $theme_setup
            ->style(
                array(
                    'handle' => 'bootstrapv5',
                    'src' => 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
                )
            )
            ->style(
                array(
                    'handle' => 'workingspace-main',
                    'src' => $main_style_dir,
                    'ver' => $theme_version
                )
            )
            ->style(
                array(
                    'handle' => 'workingspace-stylesheet',
                    'src' => $css_dir.'index.css',
                    'ver' => $theme_version
                )
            )
            ->enqueue();
            
        }

        // add theme location menu
        public function register_menus() {
            // register menu
            $menu = ThemeSetup::RegisterMenu();

            $menu
            ->menu(
                // Add your menu name here...
                array(
                    'header_menu' => __('Header Menu'),
                    'footer_menu' => __('Footer Menu')
                )
            )
            ->register();
        }

        // add sidebar widgets container
        public function register_sidebar_widgets() {
            $sidebar = ThemeSetup::RegisterSidebar();

            $sidebar
            /**
             * add sidebar by adding new arry object
             * array(
             *  id => 'primary',
             *  name => 'Primary Sidebar',
             *  description => A short description of the sidebar.
             * )
             */
            ->sidebar(
                array(
                    'name' => 'Main Sidebar',
                    'id' => 'main_sidebar',
                    'description' => 'The main sidebar appears on the right on each page except the front page template',
                ) 
            )
            ->register();
        }

        // setimage sizes
        public function set_image_sizes() {
            $theme_support = ThemeSetup::ImageSize();

            $theme_support
            ->set_image_size(
                array(
                    'name' => 'hero_image_slider',
                    'width' => 300,
                    'height' => 200,
                    'crop' => true
                )
            )
            ->set_image_size(
                array(
                    'name' => 'posts',
                    'width' => 400,
                    'height' => 280,
                    'crop' => true
                )
            )->set();
        }
    }
}

new WorkingspaceTheme();