<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

 namespace Inc\Helpers;

 final class Sanitize  {

    public static function sanitize_hex_color( $color ) {
        if ( '' === $color ) {
            return '';
        }
     
        // 3 or 6 hex digits, or the empty string.
        if ( preg_match( '|^#([A-Fa-f0-9]{3}){1,2}$|', $color ) ) {
            return $color;
        }
    }
    public static function sanitize_custom_option($input) {
        return ( $input === "No" ) ? "No" : "Yes";
    }
    public static function sanitize_custom_text($input) {
        return filter_var($input, FILTER_SANITIZE_STRING);
    }
    public static function sanitize_custom_url($input) {
        return filter_var($input, FILTER_SANITIZE_URL);
    }
    public static function sanitize_custom_email($input) {
        return filter_var($input, FILTER_SANITIZE_EMAIL);
    }
    public static function sanitize_object($object) {
        $object = (Object) $object;

        foreach($object as $key => $value) {
            switch($key) {
                case 'email' : {
                    $object->$key = sanitize_email($value);
                    break;
                }
                default : {
                    $object->$key = sanitize_text_field($value);
                    break;
                }
            }
        }
        return $object;
    }
 }