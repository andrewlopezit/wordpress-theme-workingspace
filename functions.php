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

if(file_exists(dirname(__FILE__).'/inc/helpers/global-helpers.php')) {
    require_once dirname(__FILE__).'/inc/helpers/global-helpers.php';
}

use Inc\Classes\ThemeSetup;
use Inc\CustomRoomsMeta\Init as CustomRoomsMeta;
use Inc\Custommapsmeta\Init as CustomMapsMeta;
use Inc\Classes\CustomAPI\CustomApi;
use Inc\Gutenberg\Gutenberg;
use Inc\Shortcodes\Shortcodes;

// Core Constants.
define( 'WORKINGSPACEWP_THEME_DIR', get_template_directory() );
define( 'WORKINGSPACEWP_THEME_URI', get_template_directory_uri() );

if(file_exists(WORKINGSPACEWP_THEME_DIR.'/inc/customizer/working-space-theme-customizer-functions.php')) {
    require_once WORKINGSPACEWP_THEME_DIR.'/inc/customizer/working-space-theme-customizer-functions.php';
}

if(!class_exists('WorkingspaceTheme')) {

    final class WorkingspaceTheme {
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

            $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
            $dotenv->load();

            //MAP BOX KEY
            defined('MAPBOX_PUBLIC_KEY') or define('MAPBOX_PUBLIC_KEY', $_ENV['MAPBOX_PUBLIC_KEY']);
            defined('MAPBOX_SECRET_KEY') or define('MAPBOX_SECRET_KEY', $_ENV['MAPBOX_SECRET_KEY']);

             //GOOGLE KEY
             defined('GOOGLE_CLIENT_ID') or define('GOOGLE_CLIENT_ID', $_ENV['GOOGLE_CLIENT_ID']);

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

            // Assets DIR
            define( 'WORKINGSPACE_ASSETS_DIR', WORKINGSPACEWP_THEME_URI . '/assets/' );
    
            /** Admin Panel */
            if(is_admin()) { 
                // load all theme support
                $this->add_theme_support();

                // load all menus
                $this->register_menus();

                // load custom maps
                $this->add_posts_meta_map();

                // load custom rooms
                $this->add_posts_meta_room();
                
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

            //init rooms shortcode
            $rooms = new CustomRoomsMeta();
            $rooms->init_shortcode();


            //init workingspace maps shortcode
            $workingspace_maps = new CustomMapsMeta();
            $workingspace_maps->init_shortcode();

            // init gutenberg blocks
            $gutenberg = new Gutenberg();
            $gutenberg->init();

            //init shortcodes
            $shorcodes = new Shortcodes();
            $shorcodes->init();

            // remove admin bar
            $this->remove_admin_bar('subscriber');
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
            // custom api
            new CustomApi();
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
                array('handle' => 'gsap@3.7.1',
                'src' => '//cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js'
                )
            )
            ->script(
                array('handle' => 'jQueryUI@1.12',
                'src' => '//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.js'
                )
            )
            ->script(
                array(
                    'handle' => 'jQueryUITouch@0.2.3',
                    'src' => '//cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js'
                )
            )
            ->script(
                array(
                    'handle' => 'mapbox@2.3.1',
                    'src' => '//api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js'
                )
            )
            ->script(
                array(
                    'handle' => 'googleOAuth',
                    'src' => '//apis.google.com/js/platform.js'
                )
            )
             ->script(
                array(
                    'handle' => 'googleOAuth',
                    'src' => '//apis.google.com/js/platform.js'
                )
            )
            ->script(
                array(
                    'handle'=> 'JqueryExtendFunction',
                    'deps' => array('jQuery@3.6'),
                    'src' => WORKINGSPACEWP_THEME_URI.'/assets/js/JqueryExtendFunction.js',
                    'version' => $theme_version
                )
            )
            // add the handle for defer script
            // if id or handle included in array params 
            // it will add defer in your script tag
            ->register(
                array(
                    'jQuery@3.6',
                    'gsap@3.7.1',
                    'jQueryUI@1.12',
                    'jQueryUITouch@0.2.3',
                    'mapbox@2.3.1',
                    'googleOAuth',
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
                    'localize' => array(
                        'variable_name' => 'translation_array',
                        'value' => array(
                            'site_url' => esc_url(site_url()),
                            'workingspaces_nonce' => wp_create_nonce( 'wp_rest' ),
                            'assets_dir' => WORKINGSPACE_ASSETS_DIR,
                            'mapbox_public_key' => MAPBOX_PUBLIC_KEY,
                            'mapbox_secret_key' => MAPBOX_SECRET_KEY,
                            'google_api_key' => GOOGLE_CLIENT_ID
                        )
                    )
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
                    'handle' => 'mapboxv2.3.1',
                    'src' => '//api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css'
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

        public function add_posts_meta_map() {
            $maps = new CustomMapsMeta();

            $maps->post(
                array(
                'title' => 'Map Location',
                'post' => 'workingspaces'
                )
            )
            ->post(
                array(
                    'title' => 'Map Location',
                    'post' => 'countries'
                )
            )->add();
        }

        public function add_posts_meta_room() {
           $room = new CustomRoomsMeta();
           $room->post(
               array(
                   'title' => 'Rooms Map ( Floor Plan )',
                   'post' => 'workingspaces'
               )
            )->add();
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
            )
            ->set_image_size(
                array(
                    'name' => 'testimonial_profile',
                    'width' => 200,
                    'height' => 250,
                    'crop' => true
                )
            )
            ->set_image_size(
                array(
                    'name' => 'hero_background',
                    'width' => 800,
                    'height' => 300,
                    'crop' => true
                )
            )
           ->set();
        }

        public function remove_admin_bar($user_type) {
            $current_user = wp_get_current_user();

            if(in_array($user_type, $current_user->roles)) {
                show_admin_bar(false);
                return;
            }
        }
    }
}

new WorkingspaceTheme();