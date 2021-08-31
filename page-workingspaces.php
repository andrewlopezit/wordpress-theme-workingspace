<?php
get_header();

if(isset($_GET['country_id']) && isset($_GET['country_name'])) {
    $country = array('country' => array('id' => $_GET['country_id'], 'name' => $_GET['country_name']));
}

if ( have_posts() ) : 
    while ( have_posts() ) : the_post();
?>   
    <section class="hero-section" style="background-image: url('<?php echo esc_url(wp_get_attachment_image_src(get_post_thumbnail_id(get_the_ID()), 'hero_background')[0]) ?>')">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="headline title large">
                        <?php  the_field('hero_title'); ?>
                    </h1>
                    <p><?php the_field('hero_subtitle'); ?></p>
                </div>
            </div>
        </div>
    </section>
<?php
    endwhile;
else :
    // When no posts are found, output this text.
    _e( 'Sorry, no posts matched your criteria.' );
endif;
wp_reset_postdata();   
?>

<section class="container">
    <div class="row">
        <div class="col">
            <?php get_template_part('partials/content/content', 'workingspaces-maps', isset($country) ? $country : null); ?>
        </div>
    </div>
</section>

<?php

get_footer();