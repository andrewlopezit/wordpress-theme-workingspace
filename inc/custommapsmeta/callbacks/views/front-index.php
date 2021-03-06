<?php
ob_start();

$country = $args['country'] ?? null;
$max_posts = get_option( 'posts_per_page' );

$maxCapacityCount = 5;

$query = array(
    'post_type' => 'workingspaces',
);

$min_room_rate = get_min_room_rate();
$max_room_rate =  get_max_room_rate();

$user_workingspaces = get_user_workingspaces();

if(isset($country['id'])) {
    $query['meta_query'] = array(
        array(
            'key' => 'related_country',
            'value' => $country['id'],
            'compare' => '='
        )
    );

    $country_location = get_location($country['id']);
}

$workingspaces = new WP_Query( $query ); 
?>
<div class="container">
    <div class="row">
        <div class="col">
            <div id="workspaces-map">
            <div class="content-container">
                <div class="action-container shadow-sm d-flex d-sm-block d-md-none" id="mobile-maps">
                    <div class="loading --icon"></div>
                </div>
                <div class="item-container" id="workingspaces">
                    
                    <div class="action-container">
                        <div class="action filter">
                            <i class="fas fa-filter"></i>
                            <span>View all filters</span>
                        </div>
                        <span class="text-muted label"><?php echo isset($country['name']) ? 'Location: '.$country['name'].', ' : '' ?> Price range: $<?php echo $min_room_rate; ?> - $<?php echo $max_room_rate; ?></span>
                    </div>
                    <div class="filter-container shadow-sm">
                        <div class="filter location">
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
                                    <button class="btn outline small 
                                    <?php echo isset($country) ? $country['id'] == get_the_ID() ? 'is-active' : '' : '' ?>" 
                                    <?php echo isset($country) ? 'disabled' : '' ?> data-id="<?php the_ID(); ?>">
                                        <?php the_title(); ?>
                                    </button>
                                <?php endwhile; 
                                wp_reset_postdata();
                                else : ?>
                                <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
                                <?php endif; ?>
                            </div>
                        </div>

                        <div class="filter categories">
                            <div class="title">Categories: </div>
                            <div class="action-container">
                                <?php
                                $cat_id = get_cat_ID('workingspaces');
                                $categories = get_categories(array("child_of" => $cat_id, "hide_empty" => 0));
                                ?>
                                <?php if ( $categories ) : foreach ($categories as $category):?>
                                    <button class="btn outline small is-active" data-id="<?php echo $category->term_id; ?>"><?php echo $category->name; ?></button>
                                <?php endforeach; 
                                else : ?>
                                <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
                                <?php endif; ?>
                            </div>
                        </div>

                        <div class="filter capacity">
                            <div class="title">Capacity: </div>
                            <div class="action-container">
                                <?php for ($count = 1 ; $count <= $maxCapacityCount; $count++): ?>
                                    <button class="btn outline small" data-capacity="<?php echo $count; ?>">
                                        <?php for($person = 1; $person <= $count; $person++): ?>
                                            <i class="fas fa-user"></i>
                                        <?php endfor; ?>
                                    </button>
                                <?php endfor;?>

                                <button class="btn outline small" data-capacity="<?php echo $maxCapacityCount;?>up">
                                    <?php for($person = 1; $person <= $maxCapacityCount -1; $person++): ?>
                                        <i class="fas fa-user"></i>
                                    <?php endfor; ?>
                                    <i class="fas fa-user-plus"></i>
                                </button>
                            </div>
                        </div>

                        <?php if($country): ?>
                        <div class="filter price-range">
                            <div class="header-container">
                                <div class="title-container">
                                    <div class="title">Price range: </div>
                                    <p class="annotate">The average price is $<?php echo get_average_room_rate_country($country['id'] ?? null) ?> in <?php echo $country['name'] ?? ''; ?> / month</p>
                                </div>
                                <div class="range">Price range: $<span id="third"></span>/month</div>
                            </div>
                            <div class="minmax-values">
                                <div>Min Budget: $<span id="minimum"></span></div>
                                <div>Max Mudget: $<span id="maximum"></span></div>
                            </div>

                            <div class="action-container">
                                <div class="slider" 
                                    data-value-0="#minimum" 
                                    data-value-1="#maximum" 
                                    data-range="#third"  
                                    data-values="<?php echo $min_room_rate; ?>, <?php echo $max_room_rate; ?>"
                                    data-min ="<?php echo $min_room_rate >= 10 ? 10 : $min_room_rate; ?>"
                                    data-max = "<?php echo $max_room_rate+20; ?>"
                                    data-step = "1"
                                    data-min-range ="5"
                                    id="price-range">
                                </div>
                            </div>
                        </div>
                        <?php endif; ?>
                        <button class="btn filter"> Save</button>
                    </div>
                    <?php if ( $workingspaces->have_posts() ) : while ( $workingspaces->have_posts() ) : $workingspaces->the_post(); ?>
                    <?php $location = get_location(); ?>

                    <div class="item workspace card border-top-left border--post border--hover" data-id="<?php the_ID(); ?>" <?php echo isset($location['location']) && $location['location'] ? 'data-geolocation='.$location['location'] : ''; ?>>
                    <img class="card-img-top"  src="<?php echo esc_url(wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID()), 'posts' )[0]);?>" alt="">
                    <div class="card-body">
                        <div class="action-container">
                            <div class="action-like shadow-sm">
                                <i class="<?php echo in_array(get_the_ID(), $user_workingspaces) ? 'fas fa-heart is-added' : 'far fa-heart' ?>"></i>
                            </div>
                        </div>
                        
                        <h5><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h5>
                        <?php if(isset($location['place_name']) && $location['place_name']):?>
                            <div class="detail-icontainer location">
                                <i class="fas fa-map-marker-alt text-muted"></i>
                                <a href="#"><?php echo $location['place_name']; ?></a>
                            </div>
                        <?php endif; ?>
                        <?php
                            $rooms = get_field('related_rooms'); 

                            if($rooms):?>
                            <div class="detail-icontainer capacity">
                                <i class="fas fa-user text-muted"></i>
                                <p class="text-muted">Capacity: <span class="capacity"><?php echo get_minimum_seat_rooms($rooms).' - '.get_maximmum_seat_rooms($rooms); ?></span></p>
                            </div>
                        <?php endif; ?>
                        <div class="detail-icontainer total-rooms">
                        <?php
                            $numberOfRooms =  $rooms != null ? count($rooms) : 0 ?>
                            <i class="fas fa-chair text-muted"></i>
                            <p class="text-muted">No. of rooms: <span class="total-rooms"><?php echo $numberOfRooms; ?></span></p>
                        </div>
                        <?php $price_range = get_rooms_price_range($rooms); 
                        if($price_range):?>
                        <div class="detail-icontainer price-range">
                            <span>Price range: </span>
                            <span class="price"><?php echo count($price_range) > 1 ? '$'.implode(' - $', $price_range).'/month': '$'.$price_range[0].'/month'; ?></span>
                        </div>
                        <?php endif;?>
                        </div>
                    </div>
                    <?php endwhile; 
                    wp_reset_postdata();
                    else : ?>
                    <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
                    <?php endif; ?>
                    
                    <?php if((isset($country['name']) AND count($workingspaces->posts) >= (int)$max_posts) AND is_single()):?>
                        <div class="find-all posts">
                            <?php 
                                $country_id = $country['id'];
                                $country_name = $country['name'];
                            ?>
                            <a href="<?php echo esc_url(site_url("workingspaces?country_id=$country_id&country_name=$country_name")) ?>">Find more workingspaces in <span><?php echo $country['name']; ?></span></a>
                        </div>
                    <?php endif; ?>

                    <?php if(is_page()):?>
                        <div class="load-more-container">
                            <button class="btn load-more">Load more</button>
                        </div>
                    <?php endif; ?>
                </div>
                <div class="map-container">
                    <div class="map-spacer"></div>
                    <div class="map" id="map" <?php echo isset($country_location['location']) && $country_location['location'] ? 'data-geolocation='.$country_location['location'] : ''; ?>>
                        <button class="btn fit-workingspaces"><i class="fas fa-search-location"></i></button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>