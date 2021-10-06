
<?php 
ob_start();

$data = get_post_meta( $post->ID, 'custom_rooms_floorplan_form_key', true 
);
?>

<div class="custom-meta-rooms-container" id="custom-rooms-meta" data-id="<?php echo $post->ID ?>">
    <h4>SVG Floor Plan</h4>
    <div class="action-container">
        <button disabled="<?php isset($data['floorplan']); ?>" id="svg-cluster" type="button" class="components-button editor-post-featured-image__toggle
        <?php echo !isset($data['floorplan']) ? 'is-selected' : '' ?>">
            SVG for Clustering
        </button>
        <button id="output" type="button" class="components-button editor-post-featured-image__toggle
        <?php echo isset($data['floorplan']) ? 'is-selected' : '' ?>">
            Output
        </button>
    </div>

    <div class="content-container">
        <div class="floorplan-container">
            <div class="svg-clustering <?php echo !isset($data['floorplan']) ? 'is-display' : '' ?>">
                <form action="">
                    <textarea rows="15" name="custom_rooms_floorplan" placeholder="Paste svg code here">
                    </textarea>
                   <?php 
                   wp_nonce_field('custom_rooms_floorplan_nonce_form', 'custom_rooms_floorplan_nonce');
                   ?>
                </form>
            </div>
            <div class="output <?php echo isset($data['floorplan']) ? 'is-display' : '' ?>">
                <?php 
                    if(isset($data['floorplan'])) {
                        echo $data['floorplan'];
                    }
                ?>
            <div class="search-container">
                    <input type="text" class="components-text-control__input" 
                    placeholder="search rooms">

                    <div class="spinner-container">
                        <div class="custom-rooms--spinner"></div>
                    </div>
                    <div class="search-results">
                    </div>
                </div>
            </div>
        </div>
        <div class="assigned-rooms">
            <div class="details-container">
                <div class="legend-container">
                    <div class="detail">
                        <span class="total-rooms">Total rooms: <p>0</p></span>
                        <span class="total-assigned-rooms">Assigned rooms: <p>0</p></span>
                        <span class="total-unassigned-rooms">Unassigend rooms: <p>0</p></span>
                       
                    </div>
                    <div class="detail color">
                        <h4>Legend:</h4>
                        <div class="color assigned">
                            <span></span>
                            <span>Assigned rooms</span>
                        </div>
                        <div class="color unassigned">
                            <span></span>
                            <span>Unassigend rooms</span>
                        </div>
                    </div>
                    
                </div>
            </div>
            <hr/>
            <div class="post-container">
                <div class="selected-rooms">
                    <div class="spinner-container">
                        <div class="custom-rooms--spinner"></div>
                    </div>
                </div>
                <div class="rooms-container">
                </div>
            </div>
        </div>
    </div>
</div>