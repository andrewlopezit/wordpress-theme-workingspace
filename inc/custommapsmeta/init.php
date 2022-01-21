<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

namespace inc\custommapsmeta;

use inc\custommapsmeta\callbacks\BackEndCallbacks;

final class Init {
    private $custom_meta_id = 'workingspaceMapsID';
    private $_metabox = [];
    
    public function add() {
        // initialize
        if(is_admin()) {
            add_action('add_meta_boxes', array($this, 'add_custommaps_posts_callback'));
            $this->enqueue_backend_scripts();

            // save meta
            add_action( 'save_post', array( $this, 'save_meta_custom_maps_mapbox' ) );
        }
    }

    public function add_custommaps_posts_callback() {
        foreach($this->_metabox as $meta) {
            add_meta_box(
                $this->custom_meta_id,
                $meta['title'],
                array($this, 'render_post_type_metabox'),
                $meta['post'],
                $meta['content'] ?? 'advanced',
                $meta['priority'] ?? 'high'
            );
        }
    }

    public function post($metabox) {
        array_push($this->_metabox, $metabox);
        return $this;
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
        wp_enqueue_style('mapboxv2.3.1','//api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css');

        wp_enqueue_script(
            'mapbox@2.3.1',
            '//api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js',
            '','', 
            true
        );

        wp_enqueue_script(
            'gsap@3.7.1',
            '//cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js',
            '','', 
            true
        );
        
        wp_enqueue_script(
            'custom-meta-maps',
            WORKINGSPACE_JS_DIR_URI.'custom-maps-meta.js',
            '',WORKINGSPACE_THEME_VERSION, 
            true
        );

       

        // Localize the script with new data
        $translation_array = array(
            'site_url' => esc_url(site_url()),
            'mapbox_public_key' => MAPBOX_PUBLIC_KEY,
            'mapbox_secret_key' => MAPBOX_SECRET_KEY
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