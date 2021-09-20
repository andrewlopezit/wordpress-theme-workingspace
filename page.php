<?php
get_header();

if ( have_posts() ) : 
    while ( have_posts() ) : the_post();

    $is_fixed_background = get_field('has_fixed_background');
    $image_hero_blur_background_position  = get_field('has_blur_background');

    $imageSrc = get_hero_background_src($is_fixed_background ? 'default' : 'hero_background');
?>   

    <?php if($imageSrc && $is_fixed_background):?>
        <div class="image-hero-background
        <?php echo $is_fixed_background ? ' has-fixed-background ' : ''; ?>
        <?php echo $image_hero_blur_background_position === 'header' ? ' has-blur-background ' : ''; ?>" 
            style="background-image: url(<?php echo $imageSrc; ?>);"
            <?php echo isset($image_hero_blur_background_position) ? 'data-blur-position = "'.$image_hero_blur_background_position.'"' : '' ?>></div>
    <?php endif;?>
    <section class="hero-section 
        <?php echo ($imageSrc && !$is_fixed_background) ? 'has-image': '' ?>" 
        <?php echo isset($imageSrc) && !$is_fixed_background ? 'style= "background-image: url('.$imageSrc.')";' : '';?>>
    <?php 
        $hero_title = get_field('hero_title');
        $hero_sub_title = get_field('hero_subtitle');

        if($hero_title && $hero_sub_title):
    ?>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="headline title large">
                        <?php  echo $hero_title;  ?>
                    </h1>
                    <p><?php echo $hero_sub_title; ?></p>
                </div>
            </div>
        </div>
        <?php endif;?>
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