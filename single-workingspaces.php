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
            <div class="col">s</div>
        </div>
    </section>
</div>

 <?php endwhile; else : ?>
 	<p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
 <?php endif; ?>
<?php
    get_footer();

