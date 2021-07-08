<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

if(!function_exists('workingspace_the_brand_style')) {
    function workingspace_the_brand_style() {
        echo workingspace_get_brand_style();
    }

}

if(!function_exists('workingspace_get_brand_style')) {
    function workingspace_get_brand_style() {
        $background_image = strlen(get_theme_mod('brand_src')) > 0 ? 'url('.get_theme_mod('brand_src').')' : 'none';

        $mask_css_rules = '-webkit-mask:  url('.get_theme_mod('brand_src').') no-repeat 100% 100%;
        -ms-mask: url('.get_theme_mod('brand_src').') no-repeat 100% 100%;
        -o-mask: url('.get_theme_mod('brand_src').') no-repeat 100% 100%;
        -moz-mask: url('.get_theme_mod('brand_src').') no-repeat 100% 100%;
        mask: url('.get_theme_mod('brand_src').') no-repeat 100% 100%;
    
        -webkit-mask-position: center;
        -ms-mask-position: center;
        -o-mask-position: center;   
        -moz-mask-position: center;
        mask-position: center;
        -webkit-mask-size: 100%;
        -ms-mask-size: 100%;
        -o-mask-size: 100%;
        -moz-mask-size: 100%;
        mask-size: 100%;
        background: '.get_theme_mod('header_brand_color').'';
        
        $brand_mask_image = (get_theme_mod('is_header_svg_allow_modify_color_setting') && 
        strpos(get_theme_mod('brand_src'), '.svg')) ? $mask_css_rules : '';

        return  'style="
        background-image: '.$background_image.';
        width: '.get_theme_mod('brand_width').'em;
        height: '.get_theme_mod('brand_height').'em;
        '.$brand_mask_image.'"';
    }
}

if(!function_exists('workingspace_the_color_hamburgermenu_style')) {
    function workingspace_the_color_hamburgermenu_style() {
        echo  'style="background: '.get_theme_mod('header_hamburger_menu_color').'"';
    }
}