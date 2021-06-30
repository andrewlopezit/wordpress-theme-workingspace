
<?php 
     
     /**
      * Supply id by calling this template parts
      * 
      * array(
      *  id => primary_id
      * )
      */
     if ( is_active_sidebar( $args['id'] ) ) : ?>
         <div id="secondary" class="widget-area" role="complementary">
             <?php dynamic_sidebar( $args['id'] ); ?>
         </div>
 <?php endif; ?>