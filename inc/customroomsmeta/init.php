<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

namespace Inc\customroomsmeta;

use Inc\customroomsmeta\Callbacks\BackEndCallbacks;
use Inc\customroomsmeta\Callbacks\FrontEndCallbacks;

final class Init {

    private $custom_meta_id = 'workingSpaceRoomMetaID';
    private $_metabox = [];

    public function add() {
        if(is_admin()) {
            // add meta
            add_action( 'add_meta_boxes', array( $this, 'add_customrooms_posts_callback' ));
            $this->enqueue_backend_scripts();

            // save meta
            add_action( 'save_post', array( $this, 'save_meta_custom_rooms_floorplan' ) );
        }
    }

    public function init_shortcode() {
        add_shortcode('floorplan', array( $this, 'floor_plan_shortcode' ));
    }

    public function add_customrooms_posts_callback() {
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

    public function enqueue_backend_scripts() {
        add_action('admin_enqueue_scripts', array($this, 'enqueue_script_callback'));
    }

    public function render_post_type_metabox($post) {
        $this->backend = new BackEndCallbacks();
        $this->backend->index($post);
    }

    public function enqueue_script_callback() {
        wp_enqueue_media();

        wp_enqueue_style('custom-meta-rooms',WORKINGSPACE_CSS_DIR_URI.'custom-rooms-meta.css');

        wp_enqueue_script(
            'custom-meta-rooms',
            WORKINGSPACE_JS_DIR_URI.'custom-rooms-meta.js',
            '',WORKINGSPACE_THEME_VERSION, 
            true
        );

        // Localize the script with new data
        $translation_array = array(
            'site_url' => esc_url(site_url())
        );

        wp_localize_script('custom-meta-rooms', 'translation_array', $translation_array);
        wp_enqueue_script('custom-meta-rooms');
    }

    public function save_meta_custom_rooms_floorplan($post_id) {
        if (!isset($_POST['custom_rooms_floorplan_nonce'])) {
			return $post_id;
		}

		$nonce = $_POST['custom_rooms_floorplan_nonce'];
		if (!wp_verify_nonce( $nonce, 'custom_rooms_floorplan_nonce_form' )) {
			return $post_id;
		}

		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return $post_id;
		}

		if (!current_user_can( 'edit_post', $post_id ) ) {
			return $post_id;
		}

		$data = array(
			'post_id' => $post_id,
			'floorplan' => preg_replace('#<script(.*?)>(.*?)</script>#is', '', $_POST['custom_rooms_floorplan'])
		);
		update_post_meta( $post_id, 'custom_rooms_floorplan_form_key', $data );
    }

    public function floor_plan_shortcode($args = null) {
        $this->frontend = new FrontEndCallbacks();
        $this->frontend->index($args);

        return ob_get_clean();
    }
}