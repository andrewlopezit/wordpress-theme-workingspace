/**
 * USE FOR GENERAL SETTINGS
 */
(function ($) {
    $(document).ready(function () {
    const root = document.querySelector(':root');

    headerSection();
    colorSection();
    footerSection();

    /**
     *  F U N C T I O N S   
     */
        
    function colorSection() {
        // set primary color to the theme element
        wp.customize( 'primary_color' , function( setting ) {
            const primaryColor = setting.get();

            root.style.setProperty('--primary-color', primaryColor);
        });

        // set secondary color to the theme element
        wp.customize( 'secondary_color' , function( setting ) {
            const secondaryColor = setting.get();

            root.style.setProperty('--secondary-color', secondaryColor);
        });

        // set accent color to the theme element
        wp.customize( 'accent_color' , function( setting ) {
            const accentColor = setting.get();

            root.style.setProperty('--accent-color', accentColor);
        });
    }

    function headerSection() {
        wp.customize( 'brand_src' , function( setting ) {
            const brandSrc = setting.get();

            root.style.setProperty('--brand', 'url('+brandSrc+')');
        });
    }

    function footerSection() {
         // set footer background color
         wp.customize( 'footer_background_color' , function( setting ) {
            const footerBackgroundColor = setting.get();

            root.style.setProperty('--footer-background-color', footerBackgroundColor );
        });

        // set footer background color
        wp.customize( 'footer_background_image_src' , function( setting ) {
            const footerImageBackgroundSrc = setting.get();

            root.style.setProperty('--footer-backgound-image', 'url('+footerImageBackgroundSrc+')');
        });
    }

    function isImageAllowModifyColor(url) {
        return(url.match(/\.(svg)$/) != null);
    }
    });
});