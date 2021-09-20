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

use WP_REST_Request;

class Inquiries extends BaseClass {
    function create_inquiries($args) {
    $inquiry_obj = $args->get_json_params();
    
    if(!$inquiry_obj) return wp_send_json(array('error' => 'Bad Request'), 400);

    return $inquiry_obj;

    // $existQuery = new WP_Query(array(
    //     'author' => get_current_user_id(),
    //     'post_type' => 'like',
    //     'meta_query' => array(
    //       array(
    //         'key' => 'liked_professor_id',
    //         'compare' => '=',
    //         'value' => $professor
    //       )
    //     )
    //   ));
  
    //   if ($existQuery->found_posts == 0 AND get_post_type($professor) == 'professor') {
    //     return wp_insert_post(array(
    //       'post_type' => 'like',
    //       'post_status' => 'publish',
    //       'post_title' => '2nd PHP Test',
    //       'meta_input' => array(
    //         'liked_professor_id' => $professor
    //       )
    //     ));
    //   } else {
    //     die("Invalid professor id");
    //   }
  
      
    // } else {
    //   die("Only logged in users can create a like.");
    // }

    }
}