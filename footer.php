<div class="footer background">
    <div class="image-background d-none d-lg-block"></div>
    <div class="container" id="header-content">
        <div class="row">
            <div class="col">
                <a href="<?php get_bloginfo('url');?>">
                    <div class="brand" id="brand" <?php workingspace_the_footer_brand_style(); ?>></div>
                </a>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <?php get_template_part('partials/components/widgets', 'widgets', array('id' => 'main_sidebar')); ?>
            </div>
        </div>

        <div class="row">
            <div class="col col-lg-3 contact-container">
                <div class="contact-info">
                    <h4>Contact Us</h4>
                    <div class="info-container">
                        <div class="item">
                            <span class="icon marker accent-color hover-none size-content-60">&nbsp;</span>
                            <span class="label">Sta. Rosa st, Dumaguete City Negros Oriental Philippines 6200</span>
                        </div>

                        <div class="item">
                            <span class="icon telephone accent-color hover-none size-content-60">&nbsp;</span>
                            <span class="label">+639 327 432 7982</span>
                        </div>

                        <div class="item">
                            <span class="icon email accent-color hover-none size-content-60">&nbsp;</span>
                            <span class="label">coworkingspace@inquire.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-lg-5 navigation-container footer">
                <?php  get_template_part('partials/footer/navigation', 'navigation'); ?>
            </div>
            <div class="offset-4 d-none d-lg-block"></div>
        </div>
    </div>
</div>

<?php wp_footer(); ?>
</body>
</html>