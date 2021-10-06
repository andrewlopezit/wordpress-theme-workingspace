<?php
ob_start();

$data = get_post_meta( $post->ID, 'custom_maps_mapbox_form_key', true );
?>

<div class="custom-meta-maps-container" id="custom-maps-meta">
    <div class="custom-maps--spinner is-loading maps"></div>
    <input type="hidden" name="location" value="<?php echo isset($data['location']) ? $data['location'] : '' ?>">
        <?php 
            wp_nonce_field('custom_maps_mapbox_nonce_form', 'custom_maps_mapbox_nonce');
        ?>
    <div class="search-container">
        <input type="text" class="components-text-control__input" name="place_name" value="<?php echo isset($data['place_name']) ? $data['place_name'] : ''; ?>" id="search-location">
        <div class="search-results">
            <div class="custom-maps--spinner"></div>
        </div>
    </div>
    <div class="map-container">
    </div>
</div>
