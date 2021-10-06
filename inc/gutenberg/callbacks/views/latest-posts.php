<?php ob_start(); ?>
<div class="post-list post-list--recent-posts" id="posts">
    <?php if(isset($args['header'])): ?>
        <div class="title" 
             style="<?php echo isset($args['header']['color']) ? 'color: '.$args['header']['color'] :''; ?>;
                    <?php echo isset($args['header']['backgroundColor']) ? 'background-color: '.$args['header']['backgroundColor'] :''; ?>">
            <?php echo $args['header']['title']; ?>
        </div>
    <?php endif;?>
    <div class="inner-container">
        <?php if (isset($args['latestPosts'])) : foreach ( $args['latestPosts'] as $latest_post ): ?>
        <div class="item post card">
            <div class="image-container border-top-left border--thin">
                <img class="card-img-top" src="<?php echo esc_url($latest_post['featured_image']);?>" alt="">
            </div>
            <div class="card-body">
                <h5>
                    <a href="<?php echo $latest_post['permalink']; ?>"><?php echo $latest_post['post_title']?></a>
                </h5>
            </div>
        </div>
        <?php endforeach; 
        else : ?>
        <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
        <?php endif; ?>
    </div>
</div>