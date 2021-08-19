<div class="workspace-list" id="workingspaces">
<?php
    $args = array(
        'post_type' => 'workingspaces',
        'posts_per_page' => '6'
    );

    $query = new WP_Query( $args ); 
?>
    <?php if ( $query->have_posts() ) : while ( $query->have_posts() ) : $query->the_post(); ?>
    <div class="item workspace card border-top-left border--post border--hover">
        <img class="card-img-top"  src="<?php echo esc_url(wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID()), 'posts' )[0]);?>" alt="">
        <div class="card-body">
            <div class="like--container shadow-sm">
                <i class="far fa-heart"></i>
            </div>
            <a href="<?php the_permalink(); ?>">
                <h4><?php the_title(); ?></h4>
            </a>
            <?php $location = get_workingspaces_location(); ?>

            <?php if($location):?>
                <div class="detail-icontainer">
                    <i class="fas fa-map-marker-alt text-muted"></i>
                    <a href="#"><?php echo $location; ?></a>
                </div>
            <?php endif; ?>
            <?php
                $rooms = get_field('related_rooms'); 

                if($rooms):?>
                <div class="detail-icontainer">
                    <i class="fas fa-user text-muted"></i>
                    <p class="text-muted">Capacity: <?php echo get_minimum_seat_rooms($rooms).' - '.get_maximmum_seat_rooms($rooms); ?></p>
                </div>
            <?php endif; ?>
            <div class="detail-icontainer">
            <?php
                $numberOfRooms =  $rooms != null ? count($rooms) : 0 ?>
                <i class="fas fa-chair text-muted"></i>
                <p class="text-muted">No. of rooms: <?php echo $numberOfRooms; ?></p>
            </div>
            
            <hr/>
            <small>Starting from</small>
            <div class="price-container">
                <div class="price"><?php echo $numberOfRooms > 0 ? get_rooms_price_range($rooms): 0 ?></div>
                <a href="<?php the_permalink(); ?>">Explore now</a>
            </div>
        </div>
    </div>
    <?php endwhile; 
        wp_reset_postdata();
    else : ?>
    <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
    <?php endif; ?>
</div>

<div class="action-container center workspace">
    <a class="btn text-center" href="<?php esc_url(site_url())?>">View more</a>
</div>