<div class="featured-posts">
    <?php 
    $featured_posts  = get_field('featured_posts');
    if ($featured_posts) : foreach ( $featured_posts as $post ):?>
    <div class="item featured">
        <img src="<?php echo esc_url(wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID()), 'posts' )[0]);?>" alt="">
    <div class="overlay">
        <div class="detail-container">
            <h6><a href="<?php the_permalink();?>"><?php the_title(); ?></a></h6>
        </div>
    </div>
    </div>
    <?php endforeach; 
    else : ?>
    <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
    <?php endif; ?>
</div>