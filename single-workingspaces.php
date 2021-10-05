<?php
    get_header();
?>
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<div class="single-workingspaces page">
    <section class="hero-section" style="background-image: url('<?php the_post_thumbnail_url('hero_background'); ?>')">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="headline title large">
                        Find a space in <br/><?php the_title(); ?>
                    </h1>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <?php get_template_part('partials/components/categories','workingspaces' , array( 'id' => get_the_ID())); ?>
                </div>
            </div>
        </div>
    </section>

    <section class="container service">
        <h1>Why <span>cowork</span> on us.</h1>
        <div class="row">
            <div class="col">
                <div class="card border-top-left border--xsmall">
                <div class="card-body text-center">
                    <div class="icon check secondary-color size-content-70"></div>
                    <h4>Validated Space</h4>
                    <hr/>
                    <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <div class="card-body text-center">
                    <div class="icon money-exchange secondary-color size-content-100"></div>
                    <h4>Affordable</h4>
                    <hr/>
                    <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card border-right-bottom border--xsmall">
                <div class="card-body text-center">
                    <div class="icon medal secondary-color size-content-100"></div>
                    <h4>Trusted</h4>
                    <hr/>
                    <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                </div>
            </div>
           
        </div>
    </section>

    <section class="container spaces">
        <div class="row">
            <div class="col">
                <h1>Find your room that suit <span>your needs.</span></h1>
                <?php $location = get_location(); ?>
                <?php if($location['place_name']):?>
                <div class="location-container">
                    <i class="fas fa-map-marker-alt text-muted"></i>
                    <a href="#"><?php echo $location['place_name']; ?></a>
                </div>
            <?php endif; ?>
            <?php 
                $post_id = get_the_ID();
                do_shortcode("[floorplan id=$post_id]"); 
            ?>
            </div>
        </div>
    </section>

    <section class="full-width workingspaces">
     <?php 
        $country = get_field('related_country');

        if($country): ?>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>
                        Workingspaces that you find in <span><?php echo $country->post_title; ?></span>
                    </h1>
                </div>
            </div>
        </div>
        <?php get_template_part('partials/content/content', 'workingspaces-maps', array('id' => get_the_ID(),'country' => array('id' => $country->ID, 'name' => $country->post_title))); ?>
        <?php  endif;?>
    </section>

    <div class="modal" id="request-form" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <?php get_template_part('partials/components/request-form'); ?>
                </div>
            </div>
        </div>
    </div>

</div>

 <?php endwhile; else : ?>
 	<p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
 <?php endif; ?>
<?php
    get_footer();

