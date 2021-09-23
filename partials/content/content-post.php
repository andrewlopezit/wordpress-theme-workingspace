<?php if(isset($args['template']) && $args['template'] == 'secondary'):?>
    <div class="post-list post-list--secondary" id="posts">
<?php else:?>
    <div class="post-list" id="posts">
<?php endif;?>
<?php
    $sql_query = array(
        'post_type' => 'post',
    );

    if(isset($args['posts_per_page']))
    $sql_query['posts_per_page'] = $args['posts_per_page'];

    $cat = isset($_GET['cat']) ? $_GET['cat'] : 'all';
    if($cat !== 'all') {
        $sql_query['category_name'] = $cat;
    }

    if(isset($args['search'])) {
        $sql_query['s'] = $args['search'];
    }

    $query = new WP_Query( $sql_query );

?>
<?php if(isset($args['filters']) && $args['filters'] == 'enable'): ?>
    <div class="post-list post-list--filters">
        <div class="label">Latest:</div>
        <div class="action-container categories">
        <a href="?cat=all" <?php echo $cat === 'all' ? 'class="is-active"': '' ?> data-cat-name="all">All</a>
        <?php 
            $cat_id = get_cat_ID('posts');
            $categories = get_categories(array("child_of" => $cat_id, "hide_empty" => 0));

            if($categories) : foreach($categories as $category) :
        ?>
            <a href="?cat=<?php echo $category->slug ?>" 
                <?php echo $cat === $category->slug ? 'class="is-active"': '' ?>
                data-cat-name="<?php echo $category->slug; ?>">
                <?php echo $category->name; ?>
            </a>
        <?php endforeach;endif; ?>
        </div>
    </div>
<?php endif;?>
   <div class="inner-container posts">
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

                    <h5>
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </h5>

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

<?php 
$totalPublishPosts = (int) wp_count_posts('post')->publish;
$totalPosts = get_option( 'posts_per_page' );
$totalQueryPosts = count($query->posts);

if($totalPublishPosts > $totalPosts ||
   $totalQueryPosts > $totalPosts  ): ?>
    <div class="action-container center post view-more">
        <a class="btn text-center" href="<?php echo esc_url(site_url('news-insights'))?>">View more</a>
    </div>
<?php endif; ?>
