<?php
get_header();

if ( have_posts() ) : 
    while ( have_posts() ) : the_post();
?>   
    <div class="page-news-insights page">
        <section class="container featured-posts">
            
        </section>
    </div>
<?php
    endwhile;
else :
    // When no posts are found, output this text.
    _e( 'Sorry, no posts matched your criteria.' );
endif;
wp_reset_postdata();   


get_footer();