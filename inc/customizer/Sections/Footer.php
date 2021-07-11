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

use WP_Customize_Image_Control;
use WP_Customize_Color_Control;
use WP_Customize_Control;

use Inc\Helpers\Sanitize;

final class Footer {
    
    private $footer_callback_section = 'footer_callback_section';

    public function __construct($wp_customize) {
        $wp_customize->add_section( $this->footer_callback_section, array(
            'title' => __( 'Footer', THEME_NAME ),
            'priority' => 122,
        ));
        
        $this->footer_background_image($wp_customize);
        $this->footer_color_settings($wp_customize);
        $this->footer_checkbox_settings($wp_customize);
    }

    public function footer_background_image($wp_customize) {
        $setting_footer_background_image = 'footer_background_image_src';


        $wp_customize->add_setting($setting_footer_background_image, array(
            'type' => 'theme_mod',
            'capability' => 'edit_theme_options'
        ));

        $wp_customize->add_control(
            new WP_Customize_Image_Control(
                $wp_customize,
                $this->footer_callback_section,
                array(
                    'label'      => __( 'Background Image', THEME_NAME ),
                    'section'    => $this->footer_callback_section,
                    'settings'   => $setting_footer_background_image,
                    'extensions' => array( 'jpg', 'jpeg', 'gif', 'png', 'svg' ),
                )
            )
        );
    }

    public function footer_color_settings($wp_customize) {

        $theme_colors = array();
  
        // color Background Color
        // if you want to add additional color customizer
        // just simply extend this array object
        $theme_colors = array(
           // brand color
           array(
              'setting_id' => 'footer_brand_color',
              'section' => $this->footer_callback_section,
              'property' => array(
                 'description' => __('<b>Note:</b> This color can only be applied svg format.', THEME_NAME),
                 'default' => '#fdd500',
                 'priority' => 10,
                 'label' => __('Brand Color', THEME_NAME)
              )
           ),
           array(
            'setting_id' => 'footer_background_color',
            'section' => $this->footer_callback_section,
            'property' => array(
               'default' => '#345F52',
               'priority' => 21,
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

    public function footer_checkbox_settings($wp_customize) {
      $setting_id = 'is_footer_svg_allow_modify_color_setting';

      $wp_customize->add_setting($setting_id, array(
         'default' => false,
     ));
     
     $wp_customize->add_control(
        new WP_Customize_Control(
            $wp_customize, $setting_id,  
               array(
                  'label' => 'Allow brand modify color?',
                  'section' => $this->footer_callback_section,
                  'settings' => $setting_id,
                  'type' => 'checkbox',
                  'priority' => 11
              )
            )
      );
   }
}