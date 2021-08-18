<?php 

$query = array(
    'post_type' => 'workingspaces',
);

$workingspaces = new WP_Query( $query ); 

?>
<div id="workspaces-map">
    <div class="action-container">
        <div class="action">
            <i class="fas fa-filter"></i>
            <span>View all filters</span>
        </div>
        <span class="text-muted">Location: Philippines, Price range: $20 - $50</span>
    </div>
    <div class="filter-container shadow-sm">
        <div class="filter">
            <div class="title">Location: </div>
            <div class="action-container">
                <?php
                    $query = array(
                        'post_type' => 'countries',
                        'posts_per_page' => '-1'
                    );
                    
                    $countries = new WP_Query( $query );
                ?>
                <?php if ( $countries->have_posts() ) : while ( $countries->have_posts() ) : $countries->the_post(); ?>
                    <button class="btn outline small"><?php the_title(); ?></button>
                <?php endwhile; 
                wp_reset_postdata();
                else : ?>
                <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
                <?php endif; ?>
            </div>
        </div>

        <div class="filter">
            <div class="title">Categories: </div>
            <div class="action-container">
                <?php
                   $cat_id = get_cat_ID('workingspaces');
                   $categories = get_categories(array("child_of" => $cat_id, "hide_empty" => 0));
                ?>
                <?php if ( $categories ) : foreach ($categories as $category): ?>
                    <button class="btn outline small"><?php echo $category->name; ?></button>
                <?php endforeach; 
                else : ?>
                <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
                <?php endif; ?>
            </div>
        </div>

        <div class="filter">
            <div class="title">Capacity: </div>
            <div class="action-container">
                <?php
                $maxCount = 5;
                ?>
                <?php for ($count = 1 ; $count <= $maxCount; $count++): ?>
                    <button class="btn outline small">
                        <?php for($person = 1; $person <= $count; $person++): ?>
                            <i class="fas fa-user"></i>
                        <?php endfor; ?>
                    </button>
                <?php endfor;?>

                <button class="btn outline small">
                    <?php for($person = 1; $person <= $maxCount -1; $person++): ?>
                        <i class="fas fa-user"></i>
                    <?php endfor; ?>
                    <i class="fas fa-user-plus"></i>
                </button>
            </div>
        </div>

        <div class="filter">
            <div class="title">Price range: </div>
            <p class="annotate">The average price is $43 in Philippines / month</p>
            <div class="action-container">
                <div class="slider" data-value-0="#first" data-value-1="#second" data-range="#third"  id="price-range">
                </div>
            </div>
        </div>
    </div>
    <div class="content-container">
        <div class="item-container">
            <?php if ( $workingspaces->have_posts() ) : while ( $workingspaces->have_posts() ) : $workingspaces->the_post(); ?>
            <div class="item workspace card border-top-left border--post border--hover">
            <img class="card-img-top"  src="<?php echo esc_url(wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID()), 'posts' )[0]);?>" alt="">
            <div class="card-body">
                <div class="like--container shadow-sm">
                    <i class="far fa-heart"></i>
                </div>
                <a href="<?php the_permalink(); ?>">
                    <h5><?php the_title(); ?></h5>
                </a>
                <?php $location = get_workingspaces_location(); ?>

                <?php if($location):?>
                    <div class="detail-icontainer">
                        <i class="fas fa-map-marker-alt text-muted"></i>
                        <a href="#"><?php echo $location; ?></a>
                    </div>
                <?php endif; ?>
                <div class="detail-icontainer">
                <?php
                    $rooms = get_field('related_rooms'); 
                    $numberOfRooms =  $rooms != null ? count($rooms) : 0 ?>
                    <i class="fas fa-chair text-muted"></i>
                    <p class="text-muted">No. of rooms: <?php echo $numberOfRooms; ?></p>
                </div>
                <div class="detail-icontainer">
                    <span>Price range: </span>
                    <span><?php echo $numberOfRooms > 0 ? get_rooms_price_range($rooms): 0 ?></span>
                </div>
                </div>
            </div>
            <?php endwhile; 
            wp_reset_postdata();
            else : ?>
            <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
            <?php endif; ?>
        </div>
        <div class="map"></div>
    </div>
</div>