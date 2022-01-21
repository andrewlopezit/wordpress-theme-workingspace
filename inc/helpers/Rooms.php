<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

 namespace inc\helpers;

 use WP_Query;
 class Rooms {

    private $_rooms;
    private $_query;

    public function __construct($rooms = null) {
        $this->_rooms = $rooms;
        $this->_query = array('relation' => 'AND');
    }

    public function capacity($capacity){

        if($this->_rooms) {
            $newRooms = [];
            
            if(strpos($capacity, 'up')) {
                $capacity = (int) filter_var($capacity, FILTER_SANITIZE_NUMBER_INT);
    
                foreach($this->_rooms as $room) {
                    if((int)$room->capacity >= $capacity){
                        array_push($newRooms, $room);
                    }
                }
            }else if(strpos($capacity, 'down')){
                $capacity = (int) filter_var($capacity, FILTER_SANITIZE_NUMBER_INT);
    
                foreach($this->_rooms as $room) {
                    if((int)$room->capacity <= $capacity){
                        array_push($newRooms, $room);
                    }
                }
            }else {
                foreach($this->_rooms as $room) {
                    if((int)$room->capacity == $capacity){
                        array_push($newRooms, $room);
                    }
                }
            }
    
            $this->_rooms = $newRooms;
            return $this;
        }else {
            $meta_query= null;

            if(strpos($capacity, 'up')) {
                $capacity = (int) filter_var($capacity, FILTER_SANITIZE_NUMBER_INT);
                $meta_query = array(
                    'key' => 'capacity',
                    'value' => $capacity,
                    'type' => 'numeric',
                    'compare' => '>='
                );

            }else if(strpos($capacity, 'down')){
                $capacity = (int) filter_var($capacity, FILTER_SANITIZE_NUMBER_INT);
                
                $meta_query = array(
                    'key' => 'capacity',
                    'value' => $capacity,
                    'type' => 'numeric',
                    'compare' => '<='
                );
            }else {
                $meta_query = array(
                    'key' => 'capacity',
                    'value' => $capacity,
                    'type' => 'numeric',
                    'compare' => '='
                );
            }
            
            array_push($this->_query, $meta_query);
            return $this;
        }
    }

    public function price_range($price_range) {
        $price_range_min_max = explode(',',$price_range);

        if($this->_rooms) {
            $newRooms = [];
           
            foreach($this->_rooms as $room) {
                if((int)$room->room_rate >= (int)min($price_range_min_max) AND (int)$room->room_rate <= (int)max(min($price_range_min_max))) {
                    array_push($newRooms,$room);
                }
            }

            $this->_rooms = $newRooms;
            return $this;
        } else {
           array_push($this->_query,  array(
                'key' => 'room_rate',
                'value' => $price_range_min_max,
                'type' => 'numeric',
                'compare' => 'between'
           ));
           return $this;
        }
    }

    public function get() {
        if($this->_rooms) return $this->_rooms;

        return  array(
            'post_type' => 'rooms',
            'meta_query' => array($this->_query),
        );
        
        $results = new WP_Query(array(
            'post_type' => 'rooms',
            'meta_query' => array($this->_query),
        ));

        if(!$results->posts) return [];

        return $results->posts;
    }

    public function ids() {
        if($this->_rooms) {
            return array_unique(array_map(function($room) { return $room->ID;}, $this->_rooms));
        }

        $results = new WP_Query(array(
            'post_type' => 'rooms',
            'meta_query' => array($this->_query),
        ));

        if(!$results->posts) return [];

       return  array_unique(array_map(function($room) { return $room->ID;}, $results->posts));
    }

    public function workingspace_ids() {
        return array_unique(array_map(function($room) { return $room->workingspace_id;}, $this->_rooms));
    }
 }
