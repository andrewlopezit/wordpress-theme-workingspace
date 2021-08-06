<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

namespace Inc\CustomMetarooms;


final class CustomMetarooms {

    private $custom_meta_id = 'workingSpaceRoomMetaID';
    private $backend;

    public function __construct() {
        // initialize

        // add meta
        add_action( 'add_meta_boxes', array( $this, 'init' ) );
    }

    public function init() {
        add_meta_box(
            $this->custom_meta_id,
            'Rooms Map ( Floor Plan )',
            array($this, 'render_post_type_metabox'),
            'workingspaces',
            'advanced',
            'default'
        );
    }

    public function render_post_type_metabox() {
        // ob_end_flush();

        // ob_start();
        // ob_start();
        // $this->backend = new BackendUI();
        // $this->backend->index();
        $base_path = WORKINGSPACE_INC_DIR_URI;

        self::instantiate(Inc\CustomMetarooms\Callbacks\BackendUI);

        // require_once($base_path."custommetarooms/callbacks/views/index.php");
    }
}