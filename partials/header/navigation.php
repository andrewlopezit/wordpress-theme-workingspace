<div class="menu-navigation backdrop" id="menu-navigation">
    <div class="container" id="header-content">
        <div class="row">
            <div class="col offset-1">
            <?php
                $defaults = array(
                    'theme_location' => 'header_menu',
                    'menu_class' => 'navigation',
                );
                wp_nav_menu($defaults);
            ?>
            </div>

            <div class="col-2">
                <a href="">
                    <div class="brand" id="brand"></div>
                </a>
            </div>
        </div>
        
        <div class="row">
            <div class="col-5">
               <p class="header tagline">
                   <?php bloginfo( 'description' ); ?>
               </p>
               <p class="sub-header">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eius voluptatibus, recusandae quae laborum officiis nesciunt mollitia natus pariatur sunt iusto.
               </p>
            </div>
            <div class="col-7">
                <?php  get_template_part('partials/footer/navigation', 'navigation');?>
            </div>
        </div>

        <div class="row">
            <div class="col">
            <?php get_template_part('partials/components/widgets', 'widgets', array('id' => 'main_sidebar')); ?>
            </div>
        </div>
    </div>
</div>  