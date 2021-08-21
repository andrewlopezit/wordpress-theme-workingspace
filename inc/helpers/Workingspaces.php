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

    public function get(){
      return $this->_workingspaces;
    }

    public function get_ids() {
        return array_unique(array_map(function($workingspace) { return $workingspace->ID;}, $this->_workingspaces));
    }
 }