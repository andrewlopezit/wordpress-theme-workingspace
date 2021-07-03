<div class="container">
    <div class="row">
        <div class="col">
            <div class="header flex" id="header-container">
                <a href="<?php echo get_bloginfo('url');?>">
                    <div class="brand"></div>
                </a>
                <div class="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <?php get_template_part('partials/header/navigation','navigation'); ?>
            </div>
        </div>
    </div>
</div>
