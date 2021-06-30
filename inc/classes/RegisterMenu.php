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

 final class RegisterMenu {
     
    private $menus;

    public function __construct() {
        $this->menus = array();
    }

    /**
     * @param array $menu
     */
    public function menu($menus) {
        $this->menus = $menus;

        return $this;
    }

    public function register() {
        add_action( 'init', array($this, 'register_menu_callback') );
    }

    public function register_menu_callback() {
        register_nav_menus($this->menus);
    }
 }