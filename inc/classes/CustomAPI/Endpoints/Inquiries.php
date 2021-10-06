<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

namespace Inc\Classes\CustomAPI\Endpoints;

use Inc\Classes\CustomAPI\Endpoints\BaseClass;
use Inc\Helpers\Sanitize;

class Inquiries extends BaseClass {
    function create_inquiries($args) {
        $inquiry_obj = $args->get_json_params();
        
        if(!$inquiry_obj) return wp_send_json(array('error' => 'Bad Request'), 400);

        $inquiry_obj = Sanitize::sanitize_object($inquiry_obj);

        if(isset($inquiry_obj->space_type)) {
            $category = get_the_category_by_ID($inquiry_obj->space_type);

            if(!$category) return wp_send_json(array('error' => 'Bad Request'), 400);
        }

        return wp_insert_post(array(
            'post_type' => 'inquiries',
            'post_status' => 'pending',
            'post_title' => "$inquiry_obj->first_name $inquiry_obj->last_name",
            'meta_input' => $inquiry_obj
        ));
    }
}