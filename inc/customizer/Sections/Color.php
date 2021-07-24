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

 use WP_Customize_Color_Control;

 use Inc\Helpers\Sanitize;

 final class Color {
    private $general_color_callback_section = 'general_color_callback_section';

    public function __construct($wp_customize) {
        $wp_customize->add_section( $this->general_color_callback_section, array(
            'title' => __( 'Color', THEME_NAME ),
            'priority' => 121,
         ));

        $this->general_color_settings($wp_customize);
    }

    public function general_color_settings($wp_customize) {
        $theme_colors = array();

        // color
        $theme_colors = array(
           // brand color
           array(
              'setting_id' => 'primary_color',
              'section' => $this->general_color_callback_section,
              'property' => array(
                 'default' => '#FDD500',
                 'priority' => 1,
                 'label' => __('Primary color', THEME_NAME)
              )
           ),
           array(
              'setting_id' => 'secondary_color',
              'section' => $this->general_color_callback_section,
              'property' => array(
                 'default' => '#00CEB5',
                 'priority' => 10,
                 'label' => __('Secondary Color', THEME_NAME)
              )
           ),
           array(
            'setting_id' => 'accent_color',
            'section' => $this->general_color_callback_section,
            'property' => array(
               'default' => '#FDD500',
               'priority' => 10,
               'label' => __('Accent Color', THEME_NAME)
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
 }