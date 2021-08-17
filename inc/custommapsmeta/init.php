<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

namespace Inc\Custommapsmeta;

use Inc\Custommapsmeta\Callbacks\BackEndCallbacks;

final class Init {
    private $custom_meta_id = 'workingspaceMapsID';
    
    public function __construct() {
        // initialize
        if(is_admin()) {
            add_action('add_meta_boxes', array($this, 'init'));
            $this->enqueue_backend_scripts();

            // save meta
            add_action( 'save_post', array( $this, 'save_meta_custom_maps_mapbox' ) );
        }
    }

    public function init() {
        add_meta_box(
            $this->custom_meta_id,
            'Map Location',
            array($this, 'render_post_type_metabox'),
            'workingspaces',
            'advanced',
            'high'
        );
    }

    public function render_post_type_metabox($post) {
        $this->backend = new BackEndCallbacks();
        $this->backend->index($post);
    }

    public function enqueue_backend_scripts() {
        add_action('admin_enqueue_scripts', array($this, 'enqueue_script_callback'));
    }

    public function enqueue_script_callback() {
        wp_enqueue_style('custom-meta-maps',WORKINGSPACE_CSS_DIR_URI.'custom-maps-meta.css');

        wp_enqueue_script(
            'custom-meta-maps',
            WORKINGSPACE_JS_DIR_URI.'custom-maps-meta.js',
            '',WORKINGSPACE_THEME_VERSION, 
            true
        );

        // Localize the script with new data
        $translation_array = array(
            'site_url' => esc_url(site_url())
        );

        wp_localize_script('custom-meta-maps', 'translation_array', $translation_array);
        wp_enqueue_script('custom-meta-maps');
    }

    public function save_meta_custom_maps_mapbox($post_id) {
        if (! isset($_POST['custom_maps_mapbox_nonce'])) {
			return $post_id;
		}

		$nonce = $_POST['custom_maps_mapbox_nonce'];
		if (! wp_verify_nonce( $nonce, 'custom_maps_mapbox_nonce_form' )) {
			return $post_id;
		}

		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return $post_id;
		}

		if (! current_user_can( 'edit_post', $post_id ) ) {
			return $post_id;
		}

		$data = array(
			'post_id' => $post_id,
			'location' => sanitize_text_field($_POST['location']),
            'place_name' => sanitize_text_field($_POST['place_name'])
		);
		update_post_meta( $post_id, 'custom_maps_mapbox_form_key', $data );
    }
}