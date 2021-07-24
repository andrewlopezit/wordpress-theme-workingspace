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

 final class EnqueueScript {

    private $scripts;
    private $deferScripts;

    public function __construct() {
        $this->scripts = array();
    }

    /**
     * @param object $scripts
     */
    public function script($script) {
        array_push($this->scripts, $script);

        return $this;
    }

     /**
     *  load all scripts
     */
    public function enqueue($deferScripts = array()) {
        $this->deferScripts = $deferScripts;

        add_action('wp_enqueue_scripts', array($this, 'enqueue_callback'));

        if(count($this->deferScripts) > 0) add_filter( 'script_loader_tag', array($this, 'add_defer_scripts'), 10, 3 );
        return;
    }

    /**
     *  register all scripts
     *  @
     */
    public function register($deferScripts = array()) {
        $this->deferScripts = $deferScripts;

        add_action('wp_enqueue_scripts', array($this, 'register_callback'));

        if(count($this->deferScripts) > 0) add_filter( 'script_loader_tag', array($this, 'add_defer_scripts'), 10, 3 );
        return;
    }

    public function enqueue_callback() {
        foreach($this->scripts as $script) {
            wp_enqueue_script( 
                $script['handle'] ?? null, 
                $script['src'] ?? null, 
                $script['deps'] ?? null, 
                $script['ver'] ?? false,
                $script['in_footer'] ?? true);

            /**
            * include your php value to js
            * 
            * $args = array(
            *  array(
            *      handle => working-space-main-js,
            *      variable_name => working_space_main_js,
            *      value => any
            *  )
            * )
            */  

            if(isset($script['localize'])) {
                wp_localize_script( $script['handle'], $script['localize']['variable_name'], $script['localize']['value'] );
                wp_enqueue_script( $script['handle']);
            }
        }
    }

    public function register_callback() {
        foreach($this->scripts as $script) {
            wp_enqueue_script( 
                $script['handle'] ?? null, 
                $script['src'] ?? null, 
                $script['deps'] ?? null, 
                $script['ver'] ?? false,
                $script['in_footer'] ?? false);
        }
        
    }

    public function add_defer_scripts( $tag, $handle, $src ) {
        if ( in_array( $handle, $this->deferScripts ) ) {
           return '<script type="text/javascript" src="' . $src . '" defer id="'.$handle.'"></script>' . "\n";
        }
          
        return $tag;
    }
 }