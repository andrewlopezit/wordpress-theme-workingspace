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

 class Workingspaces {
     
    private $_workingspaces;

    public function __construct($workingspaces) {
        $this->_workingspaces = $workingspaces;  
    }

    public function ids($ids) {
        $filtered_workingspaces_ids = [];

        foreach($ids as $id) {
            foreach($this->_workingspaces as $workingspace) {
              if($workingspace->ID == $id){
                array_push($filtered_workingspaces_ids, $workingspace);
              }
            }
        }

        $this->_workingspaces = $filtered_workingspaces_ids;
        return $this;
    }

    public function capacity($capacity) {
      $capacity = explode(',',$capacity);
      $capacity = count($capacity) > 1 ? $capacity: $capacity[0];

      if(is_array($capacity)) {
        $newWorkspaces = [];

        foreach($capacity as $cap) {
          $workspace = $this->get_capacity_workingspaces_in_capacity($cap);
          if($workspace) {
            $newWorkspaces = array_merge($newWorkspaces, $workspace);          
          }
        }
        
        $this->_workingspaces = $newWorkspaces;
      }else {
        $this->_workingspaces = $this->get_capacity_workingspaces_in_capacity($capacity);
      }
      
      return $this;
    }

    public function price_range($price_range) {
      $newWorkspaces = [];
      $price_range_min_max = explode(',',$price_range);

      foreach($this->_workingspaces as $workspace) {
        
        if(count($workspace->price_range) > 0 
        && ((int)min($workspace->price_range) >= (int)min($price_range_min_max)
        &&  (int)max($workspace->price_range) <= (int)max($price_range_min_max))){
            array_push($newWorkspaces, $workspace);
        }
      }

      $this->_workingspaces = $newWorkspaces;
      return $this;
    }

    public function get(){
      return $this->_workingspaces;
    }

    public function get_ids() {
        return array_unique(array_map(function($workingspace) { return $workingspace->ID;}, $this->_workingspaces));
    }

    private function get_capacity_workingspaces_in_capacity($capacity) {
      $newWorkspaces = [];

      if(strpos($capacity, 'up')) {
        $capacity = (int) filter_var($capacity, FILTER_SANITIZE_NUMBER_INT);

        foreach($this->_workingspaces as $workspace) {
            if(min($workspace->capacity_list) >= $capacity){
                array_push($newWorkspaces, $workspace);
            }
        }
      }else if(strpos($capacity, 'down')){
          $capacity = (int) filter_var($capacity, FILTER_SANITIZE_NUMBER_INT);

          foreach($this->_workingspaces as $workspace) {
            if(max($workspace->capacity_list) <= $capacity){
                array_push($newWorkspaces, $workspace);
            }
        }
      }else {
        foreach($this->_workingspaces as $workspace) {
          if(in_array($capacity, $workspace->capacity_list)){
              array_push($newWorkspaces, $workspace);
          }
        }
      }

      return $newWorkspaces;
    }
 }