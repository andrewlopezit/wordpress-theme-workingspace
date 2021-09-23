<div class="workspace-list" id="workingspaces">
<?php
    $query_args = array(
        'post_type' => 'rooms',
        'posts_per_page' => '6'
    );

    if(isset($args['search'])) {
        $query_args['s'] = $args['search'];
    }

    $query = new WP_Query( $query_args ); 
?>
    <?php if ( $query->have_posts() ) : while ( $query->have_posts() ) : $query->the_post(); ?>
    <div class="item workspace card border-top-left border--post border--hover workspace--default">
        <img class="card-img-top"  src="<?php echo esc_url(wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID()), 'posts' )[0]);?>" alt="">
        <div class="card-body">
            <div class="action-container">
                <div class="action-like shadow-sm">
                    <i class="far fa-heart"></i>
                </div>
            </div>

            <h4><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>

            <?php $location = get_location();?>

            <?php if(isset($location['place_name']) && $location['place_name']):?>
                <div class="detail-icontainer">
                    <i class="fas fa-map-marker-alt text-muted"></i>
                    <a href="#"><?php echo $location['place_name']; ?></a>
                </div>
            <?php endif; ?>
            <?php
                $capacity = get_field('capacity');

                if($capacity):?>
                <div class="detail-icontainer">
                    <i class="fas fa-user text-muted"></i>
                    <p class="text-muted">Capacity: <?php echo $capacity; ?></p>
                </div>
            <?php endif; ?>
            <hr/>
            <?php $room_rate = get_field('room_rate'); 
                if($room_rate):?>
            <small>Room rate</small>
            <div class="price-container">
                <div class="price"><?php echo "$$room_rate/month"; ?></div>
                <a href="<?php the_permalink(); ?>">Explore now</a>
            </div>
            <?php endif;?>
        </div>
    </div>
    <?php endwhile; 
        wp_reset_postdata();
    else : ?>
    <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
    <?php endif; ?>
</div>

<?php 
$totalPublishPosts = (int) wp_count_posts('rooms')->publish;
$totalPosts = get_option( 'posts_per_page' );
$totalWorkingspaces = count($query->posts);

if($totalPublishPosts > $totalPosts ||
   $totalWorkingspaces > $totalPosts  ): ?>
    <div class="action-container center workspace">
        <a class="btn text-center" href="<?php echo esc_url(site_url('workingspaces'))?>">View more</a>
    </div>
<?php endif; ?>