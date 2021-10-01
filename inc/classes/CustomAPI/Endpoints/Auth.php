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

        $this->logged_in($user);

        return wp_send_json($user, 200);
    }

    public function login_google($args) {
        if(!isset($args['token']) || !$args['token']) wp_send_json(array('error' => 'Bad Request'), 400);

        $token = sanitize_text_field($args['token']);

        $client = new Google_Client(['client_id' => GOOGLE_CLIENT_ID]);  // Specify the CLIENT_ID of the app that accesses the backend
        $payload = $client->verifyIdToken($token);

        if(!$payload) wp_send_json(array('error' => 'Bad Request'), 400);
        
        $result = get_user_by( 'email', $payload['email'] );

        if(!isset($result->data)) {
            $user = array(
                'first_name' => $payload['given_name'],
                'last_name' => $payload['family_name'],
                'email' => $payload['email'],
                'password' => wp_generate_password(12, true, false )
            );

            $user = $this->create_account($user);
        }else {
            $user = $result->data;
        }

        $user = $this->unset_user_prop($user);
        $user->x_wp_nonce = wp_create_nonce( 'auth_wp_rest' );
        $this->logged_in($user);

        return wp_send_json($user, 200);
    }

    public function check_nonce($args) {
        if(!isset($args['nonce'])) return wp_send_json(array('error' => 'Bad Request'), 400);

        $nonce = sanitize_text_field($args['nonce']);

        return wp_send_json(!!wp_verify_nonce($nonce, 'auth_wp_rest'), 200);
    }

    public function register_account($args) {
        $user = $args->get_json_params();

        if(!isset($user['email'])) return wp_send_json(array('error' => 'Bad Request'), 400);

        $result = get_user_by( 'email', sanitize_text_field($user['email']));

        if(isset($result->data)) return wp_send_json(array('error' => 'Conflict User'), 409);

        $user = $this->create_account($user);

        if(!isset($user)) return wp_send_json(array('error' => 'Bad Request'), 400);

        return wp_send_json($user, 200);
    }

    private function create_account($user) {
        $user = Sanitize::sanitize_object($user);

        if(!isset($user->first_name) ||
           !isset($user->last_name) ||
           !isset($user->email) ||
           !isset($user->password)) {
            return;
        }

        $user_login = esc_sql($user->email);
        $user_email = esc_sql($user->email);
        $user_pass = $user->password;

        $userdata = compact('user_login', 'user_email', 'user_pass');
        $user_id = wp_insert_user($userdata);

        if(!is_numeric($user_id)) return null;

        $result = get_user_by( 'id', $user_id );
        $user = $this->unset_user_prop($result->data);
        $user->x_wp_nonce = wp_create_nonce( 'auth_wp_rest' );

        return $user;
    }
}