<?php
get_header();

if ( have_posts() ) : 
    while ( have_posts() ) : the_post();
?>   
    <section class="hero-section" style="background-image: url('<?php the_post_thumbnail_url('hero_background'); ?>')">
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
        the_content();
    endwhile;
else :
    // When no posts are found, output this text.
    _e( 'Sorry, no posts matched your criteria.' );
endif;
wp_reset_postdata();   


get_footer();