<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

 namespace Inc\Customizer\Sections;

 use WP_Customize_Control;
 use WP_Customize_Cropped_Image_Control;
 use WP_Customize_Manager;
 use WP_Customize_Color_Control;

use Inc\Helpers\Sanitize;

 class Navigation {

    public function __construct($wp_customize) {
        $this->navigation_color_settings($wp_customize);
    }

    public function navigation_color_settings($wp_customize) {
        
        $wp_customize->add_panel( 'navigation-color-callback-panel', array(
              'priority'       => 121,
              'capability'     => 'edit_theme_options',
              'theme_supports' => '',
              'title'          => __('Navigation', THEME_NAME),
          ) );
  
        $wp_customize->add_section( 'navigation-color-callback-section', array(
           'title' => __( 'Color', THEME_NAME ),
           'priority' => 5,
           'panel' => 'navigation-color-callback-panel'
        ));
  
        $theme_colors = array();
  
        // color Background Color
        // if you want to add additional color customizer
        // just simply extend this array object
        $theme_colors = array(
           // General section color
           array(
              'setting_id' => 'brand-color-setting-id',
              'section' => 'navigation-color-callback-section',
              'property' => array(
                 'description' => __('<b>Note:</b> This color can only be applied svg format.', THEME_NAME),
                 'default' => '#FFFFFF',
                 'label' => __('Brand Color', THEME_NAME)
              )
           ),
           array(
              'setting_id' => 'background-color-setting-id',
              'section' => 'navigation-color-callback-section',
              'property' => array(
                 'default' => '##345f52',
                 'label' => __('Background Color', THEME_NAME)
              )
           ),
           
        );
     
        foreach( $theme_colors as $color ) {
  
           $wp_customize->add_setting(
              $color['setting_id'], array(
                 'default' => $color['property']['default'],
                 'sanitize_callback' => array(new Sanitize(), 'sanitize_hex_color'),
                 'type' => 'theme_mod',
                 'capability' => 'edit_theme_options'
              )
           );
  
              $wp_customize->add_control(
                 new WP_Customize_Color_Control(
                    $wp_customize,
                    $color['setting_id'],
                    array('label' => $color['property']['label'],
                    'section' => $color['section'],
                    'settings' => $color['setting_id'],
                    'description' => $color['property']['description'] ??  null,
                    )
                 )
              );
        }
     }
 }