<?php ob_start();?>
<div class="container gutenberg--featured-post <?php echo isset($args['className']) ? $args['className'] : ''; ?>">
    <div class="row">
        <div class="col">
            <div class="featured-posts">
            <?php
                if (isset($args['featuredPosts'])) : foreach ( $args['featuredPosts'] as $featured_post ):
            ?>
                <div class="item featured">
                    <img src="<?php echo esc_url($featured_post['featured_image']);?>" alt="">
                <div class="overlay">
                    <div class="detail-container">
                        <h6><a href="<?php echo $featured_post['permalink']; ?>"><?php echo $featured_post['post_title']; ?></a></h6>
                    </div>
                </div>
                </div>
                <?php endforeach; 
                else : ?>
                <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>