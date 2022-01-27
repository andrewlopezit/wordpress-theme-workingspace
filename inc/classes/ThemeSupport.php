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

final class ThemeSupport {

    private $supports;

    public function __construct() {
        $this->supports = array();
    }

    /**
     * @param object $support
     */
    public function support($support) {
        array_push($this->supports, $support);

        return $this;
    }

    public function add() {
        foreach($this->supports as $support) {
            
            if(isset($support['args'])) {
                add_theme_support( $support['feature'] ?? null, $support['args']);
            } else {
                add_theme_support( $support['feature'] ?? null);
            }
        }  
    }
}