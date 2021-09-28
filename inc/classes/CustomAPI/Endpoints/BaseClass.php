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

use Inc\Helpers\Posts;

class BaseClass {

public function add_rooms_additional_details($posts) {
    $rooms = [];

    foreach($posts as $val) {
      $room = $val;
      $imageSrc = wp_get_attachment_image_src(get_post_thumbnail_id($room->ID), 'posts');
      
      if($imageSrc)
      $room->featured_image = esc_url($imageSrc[0]);
      
      $room->categories =  get_the_category($room->ID);
      $room->room_rate = get_field('room_rate', $val->ID);
      $room->post_content_trim = wp_trim_words(strip_tags($room->post_content), 50);
      $room->post_excerpt = wp_trim_words($room->post_excerpt, 50);
      $room->capacity = get_field('capacity', $val->ID);
      $room->permalink = get_the_permalink($room);

      array_push($rooms, $room);
    }

    return $rooms;
  }

  public function add_posts_additional_details($posts) {
    $newPosts = [];

    foreach($posts as $val) {
      $post = $val;
      $imageSrc = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'posts');
      
      if($imageSrc)
      $post->featured_image = esc_url($imageSrc[0]);

      $author = get_user_by('ID',$post->post_author);
      $author = $author->data;
      $author = $this->unset_user_prop($author->data);
      
      $post->categories =  get_the_category($post->ID);
      $post->post_content_trim = wp_trim_words(strip_tags($post->post_content), 50);
      $post->post_excerpt = wp_trim_words($post->post_excerpt, 50);
      $post->permalink = get_the_permalink($post);
      $post->author = $author;

      array_push($newPosts, $post);
    }

    return $newPosts;
  }

  // 
  // REQUIRED SUPPLY PARAMS $ROOMS IF DIFFERENT RELATED ROOMS 
  // OF WORKINGSPACES
  //
  public function add_workingspaces_additional_details($posts, $rooms = null) {
      $workingspaces = [];

      foreach ($posts as $val) {
          $workingspace = $val;
          $imageSrc = wp_get_attachment_image_src(get_post_thumbnail_id($workingspace->ID), 'posts');
      
          if($imageSrc)
          $workingspace->featured_image = esc_url($imageSrc[0]);

          $workingspace->post_content_trim = wp_trim_words(strip_tags($workingspace->post_content), 50);
          $workingspace->post_excerpt = wp_trim_words($workingspace->post_excerpt, 50);
          $workingspace->permalink = get_the_permalink($workingspace);
          $workingspace->location = get_location($workingspace->ID);

          $roomsValue = $rooms ?? Posts::get_rooms_by_workingspaces_has_id([$workingspace], true);

          if($roomsValue) {
            $capacity_list = [];
            $numberOfRooms = 0;

            foreach($roomsValue as $room) {

              if(isset($room->workingspace_id) && $room->workingspace_id == $workingspace->ID) {
                $numberOfRooms++;
                array_push($capacity_list, $room->capacity);
              }
            }
            
            $workingspace->capacity_list = $capacity_list;
            $workingspace->price_range = get_rooms_price_range($roomsValue);
            $workingspace->total_rooms = $numberOfRooms;
          }

          array_push($workingspaces, $workingspace);
      }

      return $workingspaces;
  }

  public function unset_user_prop($user) {
    unset($user->user_login);
    unset($user->user_pass);
    unset($user->user_email);
    unset($user->user_activation_key);

    return $user;
  }
}