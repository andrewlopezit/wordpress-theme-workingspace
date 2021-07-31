<div class="testimonial-slider" id="testimonials">
    <div class="stage-container">
        <?php
            $args = array(
                'post_type' => 'testimonials',
                'posts_per_page' => '1'
            );

            $query = new WP_Query( $args ); 
        ?>
        <?php if ( $query->have_posts() ) : while ( $query->have_posts() ) : $query->the_post(); ?>
        <div class="item">
            <div class="content">
                <p>
                    <?php $message = get_field('message');
                        echo $message;
                    ?>
                </p>
                <div class="author-details">
                    <?php $author_name = get_field('user');?>
                    <span class="name">
                        <?php 
                        echo ucfirst($author_name['user_firstname']) ?? '';
                        echo '&nbsp';
                        echo ucfirst($author_name['user_lastname']) ?? '';
                        ?>,
                    </span>
                    
                    <?php

                    $profession = get_field('profession');
                    if($profession): ?>
                        <span class="profession">
                            <?php echo $profession;  ?>
                        </span>
                    <?php endif; ?>

                    <?php $signature = get_field('signature'); ?>
                    <span class="signature">
                        <?php if($signature): ?>
                            <img src="<?php echo $signature['url'] ?>" alt="">
                        <?php endif; ?>
                    </span>
                </div>
            </div>
            <div class="user-profile">
                <img src="<?php the_post_thumbnail_url('testimonial_profile'); ?>" alt="">
            </div>
        </div>
        <?php endwhile; 
            wp_reset_postdata();
        else : ?>
        <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
        <?php endif; ?>
    </div>

    <div class="controls">
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>