<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

 namespace Inc\Classes;

 final class ImageSize {
     
    private $imageSizes;

    public function __construct() {
        $this->imageSizes = array();
    }

    /**
     * @param Associative Array
     * 
     * $name
     * (string) (Required) Image size identifier.
     *
     *  $width
     * (int) (Optional) Image width in pixels. Default 0.
     *
     *  $height
     *  (int) (Optional) Image height in pixels. Default 0.
     *
     *  $crop
     *  (bool|array)
     */
    public function set_image_size($imageSize) {
        array_push($this->imageSizes, $imageSize);

        return $this;
    }

    public function image_size_callback() {
        if(!$this->imageSizes) return;

        foreach($this->imageSizes as $imageSize) {
            add_image_size(
                $imageSize['name'],
                $imageSize['width'], 
                $imageSize['height'],
                $imageSize['crop'] ?? false
            );
        }
    }

    public function set() {
        add_action('after_setup_theme', array($this, 'image_size_callback'));
    }
 }