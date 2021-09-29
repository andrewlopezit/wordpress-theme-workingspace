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
use WP_Query;

class Auth extends BaseClass {

    public function login($args) {
        $inquiry_obj = $args->get_json_params();
        
        if(!isset($inquiry_obj['username']) | !isset($inquiry_obj['password'])) return wp_send_json(array('error' => 'Bad Request'), 400);

        $inquiry_obj = Sanitize::sanitize_object($inquiry_obj);

        $check = wp_authenticate( $inquiry_obj->username, $inquiry_obj->password );

        if(!isset($check->data)) return wp_send_json(array('error' => 'Bad Request'), 400);

        $user = $this->unset_user_prop($check->data);
        $user->x_wp_nonce = wp_create_nonce( 'auth_wp_rest' );

        return wp_send_json($user, 200);
    }

    public function check_nonce($args) {
        if(!isset($args['nonce'])) return wp_send_json(array('error' => 'Bad Request'), 400);

        $nonce = sanitize_text_field($args['nonce']);

    return wp_send_json(!!wp_verify_nonce($nonce, 'auth_wp_rest'), 200);
    }
}