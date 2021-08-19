<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

 namespace Inc\Helpers;

 class Rooms {

    private $_rooms;

    public function __construct($rooms) {
        $this->_rooms = $rooms;
    }

    public function has_capacity($capacity){
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
    }

    public function price_range($price_range) {
        $newRooms = [];
        $price_range_min_max = explode(',',$price_range);

        foreach($this->_rooms as $room) {
            if((int)$room->room_rate >= (int)$price_range_min_max[0] AND (int)$room->room_rate <= (int)$price_range_min_max[1]) {
                array_push($newRooms,$room);
            }
        }


        $this->_rooms = $newRooms;
        return $this;
    }

    public function get() {
        return $this->_rooms;
    }

    public function workingspace_ids() {
        return array_unique(array_map(function($room) { return $room->workingspace_id;}, $this->_rooms));
    }
 }
