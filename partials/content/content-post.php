<div class="post-list" id="posts">
<?php
    $args = array(
        'post_type' => 'post',
        'posts_per_page' => '3'
    );

    $query = new WP_Query( $args ); 
?>
    <?php if ( $query->have_posts() ) : while ( $query->have_posts() ) : $query->the_post(); ?>
    <div class="item post card border-top-left border--post">
        <img class="card-img-top"  src="<?php echo esc_url(wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID()), 'posts' )[0]);?>" alt="">
        <div class="card-body">
            <div class="author-container">
                <i class="fas fa-book-reader"></i>
                <div class="author-details">
                    <span>
                        <?php the_author_link(); ?>
                    </span>,
                    <span>
                        <small><?php  
                        $date=date_create(get_the_time());
                        echo date_format($date,"F d Y");; ?></small>
                    </span>
                </div>
            </div>
            <a href="<?php the_permalink(); ?>">
                <h5><?php the_title(); ?></h5>
            </a>

            <p><?php echo has_excerpt() ? wp_trim_words(strip_tags(get_the_excerpt()), 30) : wp_trim_words(strip_tags(get_the_content()), 30); ?></p>

            <a class="btn text-center" href="<?php the_permalink(); ?>">Read more</a>
        </div>
    </div>
    <?php endwhile; 
        wp_reset_postdata();
    else : ?>
    <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
    <?php endif; ?>
</div>

<div class="action-container center post">
    <a class="btn text-center" href="<?php esc_url(site_url())?>">View more</a>
</div>