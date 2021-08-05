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
                    <div class="search-form">
                    <?php 
                        $cat_id = get_cat_ID('workingspaces');
                        $categories = get_categories(array("child_of" => $cat_id, "hide_empty" => 0));

                        if($categories) : foreach($categories as $category) :
                    ?>
                    <div class="input-group">
                        <input type="checkbox" id="horns" name="horns">
                        <label for="horns">Horns</label>
                    </div>
                    <?php endforeach;endif; ?>

                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

 <?php endwhile; else : ?>
 	<p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
 <?php endif; ?>
<?php
    get_footer();

