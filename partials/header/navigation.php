<div class="menu-navigation backdrop" id="menu-navigation">
    <div class="container" id="header-content">
        <div class="row">
            <div class="col navigation-container">
                <a href="<?php get_bloginfo('url');?>">
                    <div class="brand <?php if(get_theme_mod('is_svg_allow_modify_color_setting'))  echo 'is-allow-color-modify'; ?>" id="brand" style="background-color: <?php echo get_theme_mod('brand_color');?>"></div>
                </a>
                <?php
                    $defaults = array(
                        'theme_location' => 'header_menu',
                        'menu_class' => 'navigation d-none d-sm-flex d-flex',
                    );
                    wp_nav_menu($defaults);
                ?>
            </div>
        </div>
        
        <div class="row d-none d-sm-flex d-flex">
            <div class="col-5">
               <p class="header tagline">
                   <?php bloginfo( 'description' ); ?>
               </p>
               <p class="sub-header">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eius voluptatibus, recusandae quae laborum officiis nesciunt mollitia natus pariatur sunt iusto.
               </p>
            </div>
            <div class="col-7">
                <?php  get_template_part('partials/footer/navigation', 'navigation'); ?>
            </div>
        </div>

        <div class="row d-none d-sm-flex d-flex">
            <div class="col">
                <?php get_template_part('partials/components/widgets', 'widgets', array('id' => 'main_sidebar')); ?>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="social-media title d-none d-sm-flex d-flex">
                    <h4>Follow us on: </h4>
                    <div class="social-media">
                        <a href="" class="icon facebook primary-color size-content-60"></a>
                        <a href="" class="icon instagram primary-color size-content-70"></a>
                        <a href="" class="icon twitter primary-color size-content-70"></a>
                        <a href="" class="icon behance primary-color size-content-70"></a>
                        <a href="" class="icon linkedin primary-color size-content-70"></a>
                        <a href="" class="icon pinterest primary-color size-content-60"></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col mobile-navigation d-flex d-sm-none">
                    <?php get_template_part('partials/components/widgets', 'widgets', array('id' => 'main_sidebar')); ?>
                <?php
                    $defaults = array(
                        'theme_location' => 'header_menu',
                        'menu_class' => 'navigation',
                    );
                    wp_nav_menu($defaults);
                ?>
                <div class="social-media title">
                    <h4>Follow us on</h4>
                    <div class="social-media">
                        <a href="" class="item facebook"></a>
                        <a href="" class="item instagram"></a>
                        <a href="" class="item twitter"></a>
                        <a href="" class="item behance"></a>
                        <a href="" class="item linkedin"></a>
                        <a href="" class="item pinterest"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>      