<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

 namespace inc\classes;

final class EnqueueStyle {

    private $styles;

    public function __construct() {
        $this->styles = array();
    }

    /**
     * @param object $style
     */
    public function style($style) {
        array_push($this->styles, $style);

        return $this;
    }

    /**
     *  load all styles
     */
    public function enqueue() {
        add_action('wp_enqueue_scripts', array($this, 'enqueue_callback'));
        return;
    }

    public function enqueue_callback() {
        foreach($this->styles as $style) {
            wp_enqueue_style( 
                $style['handle'] ?? null, 
                $style['src'] ?? null, 
                $style['deps'] ?? null, 
                $style['ver'] ?? false,  
                $style['media'] ?? 'all' );
        }
    }
}