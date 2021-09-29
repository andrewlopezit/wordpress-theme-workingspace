<div class="container-fluid background-header">
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="header flex" id="header-container">
                    <a href="<?php echo get_bloginfo('url');?>">
                        <div class="brand" <?php workingspace_the_brand_style(); ?>></div>
                    </a>
                    
                    <div class="action-header-container">
                        <div class="user-settings-container">
                            <div class="user-heart-badge-container">
                                <i class="far fa-heart"></i>
                                <span class="badge badge-danger">99+</span>
                            </div>                            
                            <div class="user-container">
                                <i class="far fa-user"></i>
                                <span class="user-name">admin</span>
                                <i class="fas fa-chevron-down"></i>
                            </div>
                        </div>
                        <div class="auth-container">
                            <a data-toggle="auth-modal" class="btn sign-up">Sign-up</a href="#">
                            <a data-toggle="auth-modal" class="btn login">Login</a href="#">
                        </div>

                        <!--TODO:// ADD DROPDOWN FOR USER AND HEARTEAD WORKINGSPACES
                                    * ADD PAGE FOR THIS SETTINGS -->
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