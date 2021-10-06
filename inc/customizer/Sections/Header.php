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

 final class Header {
     
    private $header_brand_callback_section = 'header_brand_callback_section';
    private $header_menu_callback_section = 'header_menu_callback_section';

    public function __construct($wp_customize) {
        // brand
        $wp_customize->add_section( $this->header_brand_callback_section, array(
            'title' => __( 'Header', THEME_NAME ),
            'priority' => 121,
         ));

        $this->header_brand_settings($wp_customize);
        $this->header_brand_color_settings($wp_customize);
        $this->header_checkbox_settings($wp_customize);

        // hamburgermenu
        $wp_customize->add_section( $this->header_menu_callback_section, array(
            'title' => __( 'Menu', THEME_NAME ),
            'priority' => 122,
        ));
    }

    public function header_brand_settings($wp_customize) {
        $setting_brand_src_id = 'brand_src';

        $wp_customize->add_setting($setting_brand_src_id, array(
            'type' => 'theme_mod',
            'capability' => 'edit_theme_options',
        ));

        // for brand uploading media
        $wp_customize->add_control(
            new WP_Customize_Image_Control(
                $wp_customize,
                $this->header_brand_callback_section,
                array(
                    'label'      => __( 'Brand', THEME_NAME ),
                    'description' => __('<b>Note:</b> If you want to use svg for your brand. Download <a href="https://wordpress.org/plugins/svg-support/" target="_blank">SVG Support</a> to enable svg upload.', THEME_NAME),
                    'section'    => $this->header_brand_callback_section,
                    'settings'   => $setting_brand_src_id,
                    'extensions' => array( 'jpg', 'jpeg', 'gif', 'png', 'svg' ),
                )
            )
        );

        // for brand dimension
        $input_brand_dimensions = array (
            array(
                'setting_id' => 'brand_width',
                'section' => $this->header_brand_callback_section,
                'property' => array(
                   'description' => __('Width dimension of a brand using <b>em</b> units', THEME_NAME),
                   'default' => 7,
                   'priority' => 1,
                   'label' => __('Width', THEME_NAME),
                )
            ),
            array(
                'setting_id' => 'brand_height',
                'section' => $this->header_brand_callback_section,
                'property' => array(
                   'description' => __('Height dimension of a brand using <b>em</b> units', THEME_NAME),
                   'default' => 3,
                   'priority' => 1,
                   'label' => __('Height', THEME_NAME),
                )
             )
                
        );

        foreach($input_brand_dimensions as $input_brand_dimension) {
            $wp_customize->add_setting( $input_brand_dimension['setting_id'], array(
                'default' => $input_brand_dimension['property']['default'],
                'type' => 'theme_mod',
                'capability' => 'edit_theme_options',
            ));
    
            $wp_customize->add_control( $input_brand_dimension['setting_id'], array(
                'type' => 'number',
                'section' => $input_brand_dimension['section'],
                'label' => $input_brand_dimension['property']['label'],
                'description' => $input_brand_dimension['property']['description'],
            ));
        }

    }

    public function header_brand_color_settings($wp_customize) {
        $theme_colors = array();
  
        // color Background Color
        // if you want to add additional color customizer
        // just simply extend this array object
        $theme_colors = array(
           // brand color
           array(
              'setting_id' => 'header_brand_color',
              'section' => $this->header_brand_callback_section,
              'property' => array(
                 'description' => __('<b>Note:</b> This color can only be applied svg format.', THEME_NAME),
                 'default' => '#fdd500',
                 'priority' => 10,
                 'label' => __('Brand Color', THEME_NAME)
              )
           ),
           array(
            'setting_id' => 'header_hamburger_menu_color',
            'section' => $this->header_brand_callback_section,
            'property' => array(
               'default' => '#000',
               'priority' => 21,
               'label' => __('Hamburger Menu Color', THEME_NAME)
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

    public function header_checkbox_settings($wp_customize) {
        $setting_id = 'is_header_svg_allow_modify_color_setting';
  
        $wp_customize->add_setting($setting_id, array(
           'default' => false,
       ));
       
       $wp_customize->add_control(
          new WP_Customize_Control(
              $wp_customize, $setting_id,  
                 array(
                    'label' => 'Allow brand modify color?',
                    'section' => $this->header_brand_callback_section,
                    'settings' => $setting_id,
                    'type' => 'checkbox',
                    'priority' => 11
                )
              )
        );
    }
 }