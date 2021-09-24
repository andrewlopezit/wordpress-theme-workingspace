<?php get_header(); 
    $args = array(
        'search' => $_GET['s']
    );
?>

<div class="container search-page" id="search-page">
    <div class="row">
        <div class="col">
            <h2 class="text-center center">
                <span>Find your needs without any difficulties.</span>
            </h2>
            <p class="text-center heading--sub-paragraph">Explore top related workingspaces and more - Exactly matching requirement.</p>
        </div>
    </div>

    <div class="row search-container shadow-sm">
        <div class="col-sm-8 col-md-10">
            <div class="action-container">
                <button class="btn is-active all">All</button>
                <button class="btn workingspaces">Co-workingspaces</button>
                <button class="btn rooms">Rooms</button>
                <button class="btn posts">Posts</button>
            </div>
            <div class="form-group">
                <input type="text" class="form-control search" id="search-post-types" name="s" value="<?php echo $_GET['s']; ?>" required/>
                <label class="form-group label search" for="search-post-types">Co-workingspaces, rooms and posts</label>
            </div>
        </div>

        <div class="col-sm-4 col-md-2 location">
            <?php
                $country_args = array(
                    'post_type' => 'countries',
                    'posts_per_page' => '-1'
                );

                $query = new WP_Query( $country_args ); 
            ?>
            <div class="form-group">
                <select class="custom-select" id="capacity" name="capacity" required>
                <option selected>All</option>
                <?php if ( $query->have_posts() ) : while ( $query->have_posts() ) : $query->the_post(); ?>
                    <option value="<?php the_ID(); ?>"><?php the_title(); ?></option>
                <?php endwhile;endif; 
                    wp_reset_postdata();?>
                </select>
                <label class="form-group label" for="duration">Location</label>
            </div>
        </div>
    </div>

    <div class="row search-results-container shadow-sm">
        <div class="col">
            <div class="header">
                <h6>Workingspaces</h6>
            </div>

            <div class="workingspaces-container">

                <?php get_template_part('partials/content/content','workingspaces', $args); ?>
            </div>

            <div class="header">
                <h6>Rooms</h6>
            </div>

            <div class="rooms-container">
                <?php  get_template_part('partials/content/content','rooms', $args); ?>
            </div>

            <div class="header">
                <h6>Posts</h6>
            </div>

            <div class="posts-container">
                <?php  get_template_part('partials/content/content','post', $args); ?>
            </div>

        </div>
    </div>
</div>

<?php get_footer(); ?>