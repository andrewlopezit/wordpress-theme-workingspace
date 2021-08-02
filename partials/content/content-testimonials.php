<div class="testimonial-slider" id="testimonials-slider">
    <div class="stage-container">
        <?php
            $args = array(
                'post_type' => 'testimonials',
                'posts_per_page' => '6'
            );

            $query = new WP_Query( $args );

            $testimonial_ids = [];
            $counter = 0;
        ?>
        <?php if ( $query->have_posts() ) : while ( $query->have_posts() ) : $query->the_post(); 
            array_push($testimonial_ids, get_the_ID());
        ?>
        <div class="item" data-id="<?php the_ID(); ?>" data-slide="<?php echo $counter; $counter++; ?>">
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
        <?php $counter = 0; ?>
        <?php if($testimonial_ids) : foreach($testimonial_ids as $id): ?>
            <span data-id="<?php echo $id; ?>" data-slide="<?php echo $counter; $counter++; ?>"></span>
        <?php endforeach;endif; ?>
    </div>
</div>