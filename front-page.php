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

<div class="workspace-section--background">
    <section class="container workspaces-section">
        <h1>Explore Our Workspaces</h1>
        <div class="row workspaces-section">
            <div class="col">
                <?php get_template_part('partials/content/workspace'); ?>
            </div>
        </div>
    </section>
</div>

<section class="container about-our-service">
    <div class="row">
        <div class="col">
            <h1 class="--border-left">We offer creative working environments that suit your business</h1>
            <p>Coworking spaces have disrupted the traditional office experience by providing flexible work options. With corporates tapping into shared spaces to boost their productivity and efficiency, co workingspace is one of the best to work with.</p>
            <a class="btn" href="">Learn More</a>
        </div>
        <div class="col img-service--background"></div>
    </div>

    <div class="row services">
        <div class="col">
            <div class="card border-top-left border--small">
                <div class="card-body">
                    <div class="icon office-block gray size-content-100"></div>
                    <div class="clearfix"></div>
                    <h4>Office Space</h4>
                    <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <a href="">Learn more</a>
                </div>

            </div>
        </div>
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <div class="icon work white size-content-100"></div>
                    <h4>Co-working</h4>
                    <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <a href="">Learn more</a>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card border-right-bottom border--small">
                <div class="card-body">
                    <div class="icon meeting gray size-content-100"></div>
                    <h4>Meeting Space</h4>
                    <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <a href="">Learn more</a>
                </div>
            </div>
        </div>
    </div>
</section>
<?php
    get_footer();

