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

use inc\classes\EnqueueStyle;
use inc\classes\EnqueueScript;

use inc\classes\RegisterMenu;
use inc\classes\RegisterSidebar;

use inc\classes\ThemeSupport;
use inc\classes\ImageSize;

use inc\customizer\ThemeCustomizer;

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

    public static function ImageSize() {
        return new ImageSize();
    }
}