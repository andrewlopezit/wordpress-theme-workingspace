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

use Inc\Classes\EnqueueStyle;
use Inc\Classes\EnqueueScript;

use Inc\Classes\RegisterMenu;
use Inc\Classes\RegisterSidebar;

use Inc\Classes\ThemeSupport;

use Inc\Customizer\ThemeCustomizer;

final class ThemeSetup {

    public static function EnqueueStyle() {
        return new EnqueueStyle();
    }

    public static function EnqueueScript() {
        return new EnqueueScript();
    }

    public static function RegisterMenu() {
        return new RegisterMenu();
    }

    public static function ThemeSupport() {
        return new ThemeSupport();
    }

    public static function RegisterSidebar() {
        return new RegisterSidebar();
    }

    public static function ThemeCustomizer() {
        return new ThemeCustomizer();
    }
}