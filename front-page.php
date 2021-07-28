<?php
    get_header();
?>
<section class="container hero-section">
   <div class="row">
        <div class="col">
            <div class="image-slider" id="hero-image-slider">

                <?php
                    $args = array(
                        'post_type' => 'workingspaces',
                        'posts_per_page' => '4'
                    );

                    $query = new WP_Query( $args ); 
                ?>
                <?php if ( $query->have_posts() ) : while ( $query->have_posts() ) : $query->the_post(); ?>
                <div class="item">
                    <a href="<?php the_permalink(); ?>">
                        <img src="<?php echo wp_get_attachment_image_src( get_post_thumbnail_id( $query->ID ), 'hero_image_slider' )[0];?>" alt="">
                    </a>
                </div>
                <?php endwhile; 
                   wp_reset_postdata();
                else : ?>
                <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
                <?php endif; ?>
            </div>
        </div>
    <div class="col content">
            <h1 class="headline title large">Coworking space.</h1>
            <p class="title sub-paragraph">
                Grow your business with co workingspace productivity led agile coworking spaces in Philippines that suit your business across all the metropolitan
            </p>
            <a class="btn" href="">Request a visit</a>
        </div>
   </div>
</section>

<section class="container workspaces-section">
    <h1>Explore Our Workspaces</h1>
    <div class="row workspaces-section">
        <div class="col">1</div>
    </div>
</section>

<?php
    get_footer();

