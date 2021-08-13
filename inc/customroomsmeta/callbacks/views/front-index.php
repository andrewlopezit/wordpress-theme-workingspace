<?php 
    ob_start();
    if(!isset($args['id'])) {
        echo '<p class="text-center">No Floor plan to load.</p>';
        return;
    }
    $post_id = $args['id'];

    $data = get_post_meta( $post_id, 'custom_rooms_floorplan_form_key', true);

    if(!isset($data['floorplan'])) {
        echo '<p class="text-center">No Floor plan to load.</p>';
        return;
    }
?>
<div class="floorplan-container" id="custom-rooms--floorplan" data-id="<?php echo $post_id; ?>">
    <?php $location = get_field('related_location');  ?>
    <div class="location-container">
        <i class="fas fa-map-marker-alt text-muted"></i>
        <a href="<?php echo get_the_permalink($location); ?>"><?php echo get_the_title($location); ?></a>
    </div>
    <div class="inner-container">
        <?php echo $data['floorplan']; ?>
        <div class="content">
            <div class="floorplan-progressbar"></div>
        </div>
    </div>
</div>