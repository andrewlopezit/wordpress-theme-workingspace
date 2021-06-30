(function ($) {
    $(document).ready(function () {
        const $hamburgermenu = $('#hamburger');

        // Events
        $hamburgermenu.mouseover(function() {
            $(this).addClass('is-hover')
        }).mouseout(function() {
            $(this).removeClass('is-hover');
        });

    });
})(jQuery);