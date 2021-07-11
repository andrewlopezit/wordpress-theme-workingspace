/**
 * USE FOR GENERAL SETTINGS
 */
(function ($) {
    $(document).ready(function () {
        const root = document.querySelector(':root');


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
    });
})(jQuery);