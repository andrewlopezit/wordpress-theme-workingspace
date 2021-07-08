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

 final class Navigation {

   private $navigation_color_callback = 'navigation_color_callback_section';

   public function __construct($wp_customize) {
      $wp_customize->add_panel( 'navigation_color_callback_panel', array(
         'priority'       => 130,
         'capability'     => 'edit_theme_options',
         'theme_supports' => '',
         'title'          => __('Navigation', THEME_NAME),
      ));

      $wp_customize->add_section( $this->navigation_color_callback, array(
         'title' => __( 'Color', THEME_NAME ),
         'priority' => 5,
         'panel' => 'navigation_color_callback_panel'
      ));
      $this->navigation_checkbox_settings($wp_customize);

      $this->navigation_color_settings($wp_customize);
   }

   public function navigation_color_settings($wp_customize) {
      $theme_colors = array();

      // color Background Color
      // if you want to add additional color customizer
      // just simply extend this array object
      $theme_colors = array(
         // brand color
         array(
            'setting_id' => 'navigation_brand_color',
            'section' => $this->navigation_color_callback,
            'property' => array(
               'description' => __('<b>Note:</b> This color can only be applied svg format.', THEME_NAME),
               'default' => '#FFFFFF',
               'priority' => 1,
               'label' => __('Brand Color', THEME_NAME)
            )
         ),
         array(
            'setting_id' => 'navigation_background_color',
            'section' => $this->navigation_color_callback,
            'property' => array(
               'default' => '##345f52',
               'priority' => 10,
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
                  array(
                     'label' => $color['property']['label'],
                     'section' => $color['section'],
                     'settings' => $color['setting_id'],
                     'description' => $color['property']['description'] ??  null,
                     'priority' => $color['property']['priority'] ?? 0, 
                  )
               )
            );
      }
   }

   public function navigation_checkbox_settings($wp_customize) {
      $setting_id = 'is_navigation_svg_allow_modify_color_setting';

      $wp_customize->add_setting($setting_id, array(
         'default' => false,
     ));
     
     $wp_customize->add_control(
        new WP_Customize_Control(
            $wp_customize, $setting_id,  
               array(
                  'label' => 'Allow brand modify color?',
                  'section' => $this->navigation_color_callback,
                  'settings' => $setting_id,
                  'type' => 'checkbox',
                  'priority' => 2
              )
            )
      );
   }
 }