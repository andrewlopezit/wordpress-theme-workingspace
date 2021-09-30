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
use Google_Client;

class Auth extends BaseClass {

    public function login($args) {
        $inquiry_obj = $args->get_json_params();
        
        if(!isset($inquiry_obj['username']) | !isset($inquiry_obj['password'])) return wp_send_json(array('error' => 'Bad Request'), 400);

        $inquiry_obj = Sanitize::sanitize_object($inquiry_obj);

        $result = wp_authenticate( $inquiry_obj->username, $inquiry_obj->password );

        if(!isset($result->data)) return wp_send_json(array('error' => 'Bad Request'), 400);

        $user = $this->unset_user_prop($result->data);
        $user->x_wp_nonce = wp_create_nonce( 'auth_wp_rest' );

        return wp_send_json($user, 200);
    }

    public function login_google($args) {
        if(!isset($args['token'])) wp_send_json(array('error' => 'Bad Request'), 400);

        $token = sanitize_text_field($args['token']);

        $client = new Google_Client(['client_id' => GOOGLE_CLIENT_ID]);  // Specify the CLIENT_ID of the app that accesses the backend
        $payload = $client->verifyIdToken($token);

        if ($payload) {
            $result = get_user_by( 'email', $payload['email'] );
            $user = $result->data;

            if(!$user) {
                // create user
            }

            $user = $this->unset_user_prop($user);
            $user->x_wp_nonce = wp_create_nonce( 'auth_wp_rest' );

            return wp_send_json($user, 200);

        } else {
        // Invalid ID token
            return wp_send_json(array('error' => 'Bad Request'), 400);
        }
    }

    public function check_nonce($args) {
        if(!isset($args['nonce'])) return wp_send_json(array('error' => 'Bad Request'), 400);

        $nonce = sanitize_text_field($args['nonce']);

    return wp_send_json(!!wp_verify_nonce($nonce, 'auth_wp_rest'), 200);
    }
}