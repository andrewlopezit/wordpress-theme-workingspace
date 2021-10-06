<?php
/**
 * Workingspace functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @since Workingspace 1.0
 */

namespace Inc\Gutenberg;

class Pattern {

    public function __construct() {
        add_action( 'init', array($this, 'workingspaces_pattern_callback') );   
    }

    public function workingspaces_pattern_callback() {
        register_block_pattern(
            'workingspaces/content-pattern',
            array(
                'title'       => __( 'Content Pattern', THEME_NAME ),
                'description' => __( 'Template Gutenberg blocs', 'Block pattern description', 'workingspaces' ),
                'content'     => '
                <!-- wp:spacer -->
                <div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->
                
                <!-- wp:heading {"textAlign":"center","level":1,"className":"center","highlightedText":"Gutenberg Blocks"} -->
                <h1 class="has-text-align-center center"><mark>Gutenberg Blocks</mark></h1>
                <!-- /wp:heading -->
                
                <!-- wp:spacer {"height":50} -->
                <div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->
                
                <!-- wp:columns -->
                <div class="wp-block-columns"><!-- wp:column -->
                <div class="wp-block-column"><!-- wp:heading {"level":3,"highlightedText":"Featured Posts"} -->
                <h3><mark>Featured Posts</mark></h3>
                <!-- /wp:heading --></div>
                <!-- /wp:column --></div>
                <!-- /wp:columns -->
                
                <!-- wp:workingspaces/featured-posts {"featuredPosts":[{"ID":282,"post_author":"1","post_date":"2021-07-26 16:18:31","post_date_gmt":"2021-07-26 16:18:31","post_content":"","post_title":"Alcove","post_excerpt":"","post_status":"publish","comment_status":"closed","ping_status":"closed","post_password":"","post_name":"alcove","to_ping":"","pinged":"","post_modified":"2021-08-22 12:39:49","post_modified_gmt":"2021-08-22 12:39:49","post_content_filtered":"","post_parent":0,"guid":"http://localhost:8888/wordpress-development/?post_type=workingspaces\u0026#038;p=282","menu_order":0,"post_type":"workingspaces","post_mime_type":"","comment_count":"0","filter":"raw","featured_image":"http://localhost:8888/wordpress-development/working-space/wp-content/uploads/2021/07/benjamin-child-0sT9YhNgSEs-unsplash-scaled-400x280.jpg","post_content_trim":"","permalink":"http://localhost:8888/wordpress-development/working-space/workingspaces/alcove/","location":{"post_id":282,"location":"123.30922453383067,9.30981834373118","place_name":"Dumaguete City, Negros Oriental, Philippines"},"capacity_list":["2","3"],"price_range":["56.25","100.00"],"total_rooms":2},{"ID":281,"post_author":"1","post_date":"2021-07-26 16:18:17","post_date_gmt":"2021-07-26 16:18:17","post_content":"","post_title":"Honeycomb Coworking","post_excerpt":"","post_status":"publish","comment_status":"closed","ping_status":"closed","post_password":"","post_name":"honeycomb-coworking","to_ping":"","pinged":"","post_modified":"2021-08-24 04:42:37","post_modified_gmt":"2021-08-24 04:42:37","post_content_filtered":"","post_parent":0,"guid":"http://localhost:8888/wordpress-development/?post_type=workingspaces\u0026#038;p=281","menu_order":0,"post_type":"workingspaces","post_mime_type":"","comment_count":"0","filter":"raw","featured_image":"http://localhost:8888/wordpress-development/working-space/wp-content/uploads/2021/07/eloise-ambursley-VGvRb8TQ7-k-unsplash-scaled-400x280.jpg","post_content_trim":"","permalink":"http://localhost:8888/wordpress-development/working-space/workingspaces/honeycomb-coworking/","location":{"post_id":281,"location":"123.90133544350545,10.29812196486354","place_name":"Cebu, Philippines"},"capacity_list":["3"],"price_range":["56.25"],"total_rooms":1},{"ID":280,"post_author":"1","post_date":"2021-07-26 16:17:54","post_date_gmt":"2021-07-26 16:17:54","post_content":"","post_title":"Acceler8","post_excerpt":"","post_status":"publish","comment_status":"closed","ping_status":"closed","post_password":"","post_name":"acceler8","to_ping":"","pinged":"","post_modified":"2021-08-24 06:30:59","post_modified_gmt":"2021-08-24 06:30:59","post_content_filtered":"","post_parent":0,"guid":"http://localhost:8888/wordpress-development/?post_type=workingspaces\u0026#038;p=280","menu_order":0,"post_type":"workingspaces","post_mime_type":"","comment_count":"0","filter":"raw","featured_image":"http://localhost:8888/wordpress-development/working-space/wp-content/uploads/2021/07/gian-paolo-aliatis-AfflhhVVuA-unsplash-scaled-400x280.jpg","post_content_trim":"","permalink":"http://localhost:8888/wordpress-development/working-space/workingspaces/acceler8/","location":{"post_id":280,"location":"125.63998046009851,7.190763616917536","place_name":"Tibungco, Davao City, Davao 8000, Philippines"},"capacity_list":["3"],"price_range":["56.25"],"total_rooms":1},{"ID":279,"post_author":"1","post_date":"2021-07-26 16:17:34","post_date_gmt":"2021-07-26 16:17:34","post_content":"","post_title":"Dojo 8","post_excerpt":"","post_status":"publish","comment_status":"closed","ping_status":"closed","post_password":"","post_name":"dojo-8","to_ping":"","pinged":"","post_modified":"2021-08-24 04:51:45","post_modified_gmt":"2021-08-24 04:51:45","post_content_filtered":"","post_parent":0,"guid":"http://localhost:8888/wordpress-development/?post_type=workingspaces\u0026#038;p=279","menu_order":0,"post_type":"workingspaces","post_mime_type":"","comment_count":"0","filter":"raw","featured_image":"http://localhost:8888/wordpress-development/working-space/wp-content/uploads/2021/07/johnson-wang-iI4sR_nkkbc-unsplash-400x280.jpg","post_content_trim":"","permalink":"http://localhost:8888/wordpress-development/working-space/workingspaces/dojo-8/","location":{"post_id":279,"location":"121.02425852643586,14.553989181079615","place_name":"Makati Shangri-La, Ayala Ave, Makati, 1224, Philippines"},"capacity_list":["10"],"price_range":["150.00"],"total_rooms":1}]} /-->
                
                <!-- wp:spacer {"height":50} -->
                <div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->
                
                <!-- wp:columns -->
                <div class="wp-block-columns"><!-- wp:column -->
                <div class="wp-block-column"><!-- wp:heading {"level":3,"highlightedText":"Icons"} -->
                <h3><mark>Icons</mark></h3>
                <!-- /wp:heading -->
                
                <!-- wp:paragraph -->
                <p>Customize the color that suit your theme.</p>
                <!-- /wp:paragraph -->
                
                <!-- wp:columns -->
                <div class="wp-block-columns"><!-- wp:column -->
                <div class="wp-block-column"><!-- wp:spacer {"height":40} -->
                <div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->
                
                <!-- wp:workingspaces/icons {"slug":"mission","size":50,"color":"#FDD500","align":"center"} /--></div>
                <!-- /wp:column -->
                
                <!-- wp:column -->
                <div class="wp-block-column"><!-- wp:spacer {"height":40} -->
                <div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->
                
                <!-- wp:workingspaces/icons {"slug":"group","size":50,"color":"#00CEB5","align":"center"} /--></div>
                <!-- /wp:column -->
                
                <!-- wp:column -->
                <div class="wp-block-column"><!-- wp:spacer {"height":40} -->
                <div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->
                
                <!-- wp:workingspaces/icons {"slug":"work-station","size":50,"color":"#e44769","align":"center"} /--></div>
                <!-- /wp:column --></div>
                <!-- /wp:columns -->
                
                <!-- wp:columns -->
                <div class="wp-block-columns"><!-- wp:column -->
                <div class="wp-block-column"><!-- wp:spacer {"height":40} -->
                <div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->
                
                <!-- wp:workingspaces/icons {"slug":"pin","size":50,"color":"#178d85","align":"center"} /--></div>
                <!-- /wp:column -->
                
                <!-- wp:column -->
                <div class="wp-block-column"><!-- wp:spacer {"height":40} -->
                <div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->
                
                <!-- wp:workingspaces/icons {"slug":"flag","size":50,"color":"#1953c8","align":"center"} /--></div>
                <!-- /wp:column -->
                
                <!-- wp:column -->
                <div class="wp-block-column"><!-- wp:spacer {"height":40} -->
                <div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->
                
                <!-- wp:workingspaces/icons {"slug":"support","size":50,"color":"#c952c9","align":"center"} /--></div>
                <!-- /wp:column --></div>
                <!-- /wp:columns -->
                
                <!-- wp:columns -->
                <div class="wp-block-columns"><!-- wp:column -->
                <div class="wp-block-column"><!-- wp:spacer {"height":40} -->
                <div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->
                
                <!-- wp:workingspaces/icons {"slug":"mission","size":50,"color":"#2e7438","align":"center"} /--></div>
                <!-- /wp:column -->
                
                <!-- wp:column -->
                <div class="wp-block-column"></div>
                <!-- /wp:column -->
                
                <!-- wp:column -->
                <div class="wp-block-column"></div>
                <!-- /wp:column --></div>
                <!-- /wp:columns --></div>
                <!-- /wp:column -->
                
                <!-- wp:column -->
                <div class="wp-block-column"><!-- wp:heading {"level":3,"highlightedText":"Recent posts"} -->
                <h3><mark>Recent posts</mark></h3>
                <!-- /wp:heading --></div>
                <!-- /wp:column --></div>
                <!-- /wp:columns -->
                
                <!-- wp:spacer {"height":50} -->
                <div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->
                
                <!-- wp:columns -->
                <div class="wp-block-columns"><!-- wp:column -->
                <div class="wp-block-column"><!-- wp:heading {"level":3,"highlightedText":"Headshots"} -->
                <h3><mark>Headshots</mark></h3>
                <!-- /wp:heading --></div>
                <!-- /wp:column --></div>
                <!-- /wp:columns -->
                
                <!-- wp:columns -->
                <div class="wp-block-columns"><!-- wp:column -->
                <div class="wp-block-column"><!-- wp:spacer {"height":40} -->
                <div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->
                
                <!-- wp:workingspaces/headshot {"id":939,"src":"http://localhost:8888/wordpress-development/working-space/wp-content/uploads/2021/09/michael-dam-mEZ3PoFGs_k-unsplash-200x300.jpg","name":"Juana Ponce","position":"Position"} /--></div>
                <!-- /wp:column -->
                
                <!-- wp:column -->
                <div class="wp-block-column"><!-- wp:spacer {"height":40} -->
                <div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->
                
                <!-- wp:workingspaces/headshot {"id":938,"src":"http://localhost:8888/wordpress-development/working-space/wp-content/uploads/2021/09/james-balensiefen-snFilgm4_RU-unsplash-300x209.jpg","name":"Eleanor Knorr","position":"Position"} /--></div>
                <!-- /wp:column -->
                
                <!-- wp:column -->
                <div class="wp-block-column"><!-- wp:spacer {"height":40} -->
                <div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->
                
                <!-- wp:workingspaces/headshot {"id":937,"src":"http://localhost:8888/wordpress-development/working-space/wp-content/uploads/2021/09/christina-wocintechchat-com-Zpzf7TLj_gA-unsplash-200x300.jpg","name":"Scarlett Star","position":"Position"} /--></div>
                <!-- /wp:column --></div>
                <!-- /wp:columns -->
                
                <!-- wp:spacer {"height":50} -->
                <div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->
                
                <!-- wp:heading {"textAlign":"center","level":1,"className":"center","highlightedText":"Typography"} -->
                <h1 class="has-text-align-center center"><mark>Typography</mark></h1>
                <!-- /wp:heading -->
                
                <!-- wp:spacer {"height":20} -->
                <div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->
                
                <!-- wp:paragraph {"align":"center","className":"heading\u002d\u002dsub-paragraph"} -->
                <p class="has-text-align-center heading--sub-paragraph">Without hassle adding a border, it just simply highlight the text in gutenberg blocks in inspector controls section.</p>
                <!-- /wp:paragraph -->
                
                <!-- wp:columns -->
                <div class="wp-block-columns"><!-- wp:column -->
                <div class="wp-block-column"><!-- wp:spacer {"height":50} -->
                <div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->
                
                <!-- wp:heading {"level":1} -->
                <h1>Heading H1</h1>
                <!-- /wp:heading -->
                
                <!-- wp:spacer {"height":30} -->
                <div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->
                
                <!-- wp:heading -->
                <h2>Heading H2</h2>
                <!-- /wp:heading -->
                
                <!-- wp:spacer {"height":30} -->
                <div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->
                
                <!-- wp:heading {"level":3} -->
                <h3>Heading H3</h3>
                <!-- /wp:heading -->
                
                <!-- wp:spacer {"height":30} -->
                <div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->
                
                <!-- wp:heading {"level":4} -->
                <h4>Heading H4</h4>
                <!-- /wp:heading -->
                
                <!-- wp:spacer {"height":30} -->
                <div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->
                
                <!-- wp:heading {"level":5} -->
                <h5>Heading H5</h5>
                <!-- /wp:heading --></div>
                <!-- /wp:column -->
                
                <!-- wp:column -->
                <div class="wp-block-column"><!-- wp:spacer {"height":50} -->
                <div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->
                
                <!-- wp:heading {"level":1,"highlightedText":"Heading H1"} -->
                <h1><mark>Heading H1</mark></h1>
                <!-- /wp:heading -->
                
                <!-- wp:spacer {"height":30} -->
                <div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->
                
                <!-- wp:heading {"highlightedText":"Heading H2"} -->
                <h2><mark>Heading H2</mark></h2>
                <!-- /wp:heading -->
                
                <!-- wp:spacer {"height":30} -->
                <div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->
                
                <!-- wp:heading {"level":3,"highlightedText":"Heading H3"} -->
                <h3><mark>Heading H3</mark></h3>
                <!-- /wp:heading -->
                
                <!-- wp:spacer {"height":30} -->
                <div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->
                
                <!-- wp:heading {"level":4,"highlightedText":"Heading H4"} -->
                <h4><mark>Heading H4</mark></h4>
                <!-- /wp:heading -->
                
                <!-- wp:spacer {"height":30} -->
                <div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->
                
                <!-- wp:heading {"level":5,"highlightedText":"Heading H5"} -->
                <h5><mark>Heading H5</mark></h5>
                <!-- /wp:heading --></div>
                <!-- /wp:column --></div>
                <!-- /wp:columns -->
                
                <!-- wp:paragraph -->
                <p></p>
                <!-- /wp:paragraph -->',
            )
        ); 
    }
}