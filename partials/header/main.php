<div class="container-fluid background-header">
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="header flex" id="header-container">
                    <a href="<?php echo get_bloginfo('url');?>">
                        <div class="brand" <?php workingspace_the_brand_style(); ?>></div>
                    </a>
                    
                    <div class="action-header-container">
                        <button class="btn login">Login</button>
                        <button class="btn sign-up">Sign-up</button>
                        <div class="hamburger" id="hamburger">
                            <span <?php workingspace_the_color_hamburgermenu_style(); ?>></span>
                            <span <?php workingspace_the_color_hamburgermenu_style(); ?>></span>
                            <span <?php workingspace_the_color_hamburgermenu_style(); ?>></span>
                        </div>
                    </div>

                    <?php get_template_part('partials/header/navigation','navigation'); ?>
                </div>
            </div>
        </div>
    </div>
</div>