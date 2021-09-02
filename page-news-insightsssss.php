<?php
get_header();

if ( have_posts() ) : 
    while ( have_posts() ) : the_post();
?>   
    <div class="page-news-insights page">
        <section class="container">
            <div class="row">
                <div class="col">
                    <?php get_template_part('partials/components/featured-posts');  ?>
                </div>
            </div>
        </section>

        <section class="container posts">
            <div class="row">
                <div class="col">
                    <h1><span>Coworking Insights</span></h1>
                </div>
            </div>
            <div class="row">
                <div class="col-8 posts-container">
                    <div class="head">
                        <div class="label">Latest:</div>
                        <div class="action-container categories">
                        <a href="?filter=all">All</a>
                        <?php 
                            $cat_id = get_cat_ID('posts');
                            $categories = get_categories(array("child_of" => $cat_id, "hide_empty" => 0));

                            if($categories) : foreach($categories as $category) :
                        ?>
                            <a href="?filter=<?php echo $category->slug ?>"><?php echo $category->name; ?></a>
                        <?php endforeach;endif; ?>
                        </div>
                    </div>
                    <div class="content">
                        <?php get_template_part('partials/content/content','post', array('posts_per_page' => 8)); ?>
                    </div>
                </div>
                <div class="col-4 right-sidebar">
                    <div class="title">Recent Posts</div>
                    <div class="content">

                    <?php 
                        $args = array(
                        'post_type' => 'post',
                        'posts_per_page' => 4
                    );
                
                    $query = new WP_Query( $args ); 
                    if ( $query->have_posts() ) : while ( $query->have_posts() ) : $query->the_post(); ?>
                    <div class="item post card image-side border-top-left border--post image-side--no-author">
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
                </div>
            </div>
        </section>

        <section class="our-client posts">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h1 class="text-center">Our <span>Client Stories</span></h1>
                        <p class="text-center heading--sub-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra nunc mollis etiam quis. Adipiscing viverra convallis orci tortor.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col testimonials">
                        <?php get_template_part('partials/content/content','testimonials'); ?>
                    </div>
                </div>
            </div>
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