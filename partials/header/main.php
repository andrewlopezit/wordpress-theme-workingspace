<div class="container-fluid background-header">
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="header flex" id="header-container">
                    <a href="<?php echo get_bloginfo('url');?>">
                        <div class="brand" <?php workingspace_the_brand_style(); ?>></div>
                    </a>
                    
                    <div class="action-header-container">
                        <?php 
                            $current_user = wp_get_current_user();
                        ?>
                        <div class="user-settings-container <?php if(is_user_logged_in()) echo 'is-display'; ?>">
                            <div class="user-heart-badge-container">
                                <i class="far fa-heart"></i>
                                <span class="badge badge-danger"></span>
                            </div>                            
                            <div class="user-container">
                                <i class="far fa-user"></i>
                                <span class="user-name"><?php if(is_user_logged_in()) echo $current_user->display_name; ?></span>
                                <i class="fas fa-chevron-down settings-chevron"></i>

                                <ul class="settings shadow-sm">
                                    <li class="setting-user-name"></li>
                                    <li>
                                        <a href="#"><i class="far fa-building"></i><span>Workingspaces</span></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fas fa-user-cog"></i><span>Settings</span></a>
                                    </li>
                                    <li <?php if(is_user_logged_in()) echo ' data-user-id="'.$current_user->ID.'"';?>>
                                        <a class="logout" href="#"><i class="fas fa-sign-out-alt"></i><span>Logout</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="auth-container <?php if(!is_user_logged_in()) echo 'is-display'; ?>">
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

<?php
is_user_authenticate();
?>