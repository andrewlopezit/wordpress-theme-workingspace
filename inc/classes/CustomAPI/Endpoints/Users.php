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
use WP_Query;

class Users extends BaseClass {

    public function add_workingspace($request) {
        $user = $this->get_user_logged_in();
        $workingspaces = get_post(sanitize_text_field($request['workingspace_id']));

        if(!$user || !$workingspaces) return wp_send_json_error('Bad request', 400);
        $user_workingspace_meta_key = 'workingspace_like_ids';
    
        $workingspace_ids = get_user_meta( $user->ID, $user_workingspace_meta_key, true);
    
        if(!is_array($workingspace_ids)) {
          add_user_meta( $user->ID, $user_workingspace_meta_key, array($workingspaces->ID), true);
    
          return wp_send_json([$workingspaces->ID], 200);
        }
    
        if(in_array($workingspaces->ID, $workingspace_ids)) wp_send_json($workingspace_ids, 200);
    
    
        array_push($workingspace_ids, $workingspaces->ID);
    
        update_user_meta( $user->ID, $user_workingspace_meta_key, $workingspace_ids );
    
        return wp_send_json($workingspace_ids, 200);
      }
    
      public function remove_workingspace($request) {
        $user = $this->get_user_logged_in();
        $workingspace_id = intval(sanitize_text_field($request['workingspace_id']));

        if(!$user || !$workingspace_id) return wp_send_json_error('Bad request', 400);
        $user_workingspace_meta_key = 'workingspace_like_ids';
    
        $workingspace_ids = get_user_meta( $user->ID, $user_workingspace_meta_key, true);
    
        if(!is_array($workingspace_ids)) return wp_send_json_error('Bad request', 400);
    
        if (($index = array_search($workingspace_id, $workingspace_ids)) !== false) {
          array_splice($workingspace_ids, $index, 1);
          update_user_meta( $user->ID, $user_workingspace_meta_key, $workingspace_ids );
        }
    
        return wp_send_json($workingspace_ids, 200);
      }
}