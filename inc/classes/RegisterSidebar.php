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

 final class RegisterSidebar {

    private $sidebars;

    public function __construct() {
        $this->sidebars = array();
    }

    /**
     * @param object $sidebar
     */
    public function sidebar($sidebar) {
        array_push($this->sidebars, $sidebar);

        return $this;
    }

    public function register() {
        add_action( 'widgets_init', array($this, 'register_sidebar_callback'));

        return;
    }

    public function register_sidebar_callback() {
        foreach($this->sidebars as $sidebar) {
            register_sidebar( 
                array(
                'name' => __( $sidebar['name'], 'sidebar' ),
                'id' => $sidebar['id'],
                'description' => __( $sidebar['description'] ?? 'Arrr me hearties! Make traditional Latin walk the plank and opt for pirate lorem ipsum for your next high seas design adventure.', 'sidebar'  ),
                'before_widget' => '<aside id="%1$s" class="widget %2$s">',
                'after_widget' => '</aside>',
                'before_title' => '<h3 class="widget-title">',
                'after_title' => '</h3>',
            ));
        }
    }
 }