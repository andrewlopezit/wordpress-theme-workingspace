(function ($) {
    $(document).ready(function () {
        // initialize elements variables
        const $hamburgerMenu = $('#hamburger');
        const $navigationMenu = $('#menu-navigation');

        const windowHeight = $(document).outerHeight();

        // color codes
        const primaryColor = '#FDD500';
        const secondaryColor = '#00CEB5';
        const navigationBackgroundColor = '#013727';


        /**
         *  GSAP ANIMATION
         */

        // navigation animation
        let navigationTimeline = gsap.timeline({ paused: true });

        navigationTimeline
        .to($navigationMenu, {width:'100vw', height: '100vh', backgroundColor: navigationBackgroundColor ,scale: 1, top: 0, left: 0, duration: 0.3})
        .to($navigationMenu.find('#header-content'), {display: 'inherit',opacity: 1, duration: 0.5})

        // hamburgermenu active
        let hamburgermenuTimeline = gsap.timeline( {paused: true} );

        hamburgermenuTimeline
        .to($hamburgerMenu.find('span').eq(1), {x: 30, opacity: 0, duration: 0.1})
        .to($hamburgerMenu.find('span').eq(0), {rotate: 45, translateY: 10, duration:0.1})
        .to($hamburgerMenu.find('span').eq(2), {rotate: -45, translateY: -10, duration: 0.1}, '<')

        // init elements css rules
        initElementCSSRules();

        /**
         *  EVENTS
         */
        
        // prepare menu navigation
        $hamburgerMenu.mouseover(function() {
            if(!$navigationMenu.hasClass('is-active')) {
                $(this).addClass('is-hover');
                gsap.to($navigationMenu, {scale: 1.8, opacity: 1, duration: 0.3});
            }

        }).mouseout(function() {
            if(!$navigationMenu.hasClass('is-active')) {
                $(this).removeClass('is-hover');
                gsap.to($navigationMenu, {scale: 1, opacity: 0, duration: 0.3});
            }
        });

        // display menu navigation
        $hamburgerMenu.click(function() {
            $navigationMenu.toggleClass('is-active');

            if($navigationMenu.hasClass('is-active')) {
                navigationTimeline.play();
                hamburgermenuTimeline.play();
            } else {
                navigationTimeline.reverse();
                hamburgermenuTimeline.reverse();
            }
        });

        /**
         *  FUNCTIONS
         */
        function initElementCSSRules() {
           
        }

    });
})(jQuery);