(function ($) {
    $(document).ready(function () {
        // initialize elements variables
        const $hamburgerMenu = $('#hamburger');
        const $navigationMenu = $('#menu-navigation');

        const windowHeight = $(document).outerHeight();

        //init functions
        initElementCSSRules();

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
        .to($navigationMenu, {width:'100vw', height: 'auto', minHeight: '100vh', backgroundColor: navigationBackgroundColor ,scale: 1, top: 0, left: 0, duration: 0.3})
        .to($navigationMenu.find('#header-content'), {display: 'inherit', opacity: 1, duration: 0.5})

        // hamburgermenu active
        let hamburgermenuTimeline = gsap.timeline( {paused: true} );

        hamburgermenuTimeline
        .to($hamburgerMenu.find('span').eq(1), {x: -30, opacity: 0, duration: 0.1})
        .to($hamburgerMenu.find('span').eq(0), {rotate: 45, translateY: 10, duration:0.1})
        .to($hamburgerMenu.find('span').eq(2), {rotate: -45, translateY: -10, duration: 0.1}, '<');

        // init elements css rules
        initElementCSSRules();

        /**
         *  EVENTS
         */
        
        // prepare menu navigation
        if(!isSmallDevice()) hamburgerMenuBackdropAnimation();

        // display menu navigation
        $hamburgerMenu.click(function() {
            $navigationMenu.toggleClass('is-active');

            if($navigationMenu.hasClass('is-active')) {
                if(isSmallDevice()) {
                    $navigationMenu.css('opacity', 1);
                    $hamburgerMenu.addClass('is-hover');
                }

                navigationTimeline.play();
                hamburgermenuTimeline.play();
            } else {
                if(isSmallDevice()) {
                    $navigationMenu.css('opacity', 0);
                    $hamburgerMenu.removeClass('is-hover');
                }

                navigationTimeline.reverse();
                hamburgermenuTimeline.reverse();
            }
        });

        // resize document events init functions
        $(window).resize(function (){
            initElementCSSRules();

            if(!isSmallDevice()) hamburgerMenuBackdropAnimation();
        });

        /**
         *  FUNCTIONS
         */
        function initElementCSSRules() {
           const hamburgerPosition = $hamburgerMenu.position();

           $navigationMenu.css({
               top: '32px',
               left: hamburgerPosition.left+10
           });
        }

        function isSmallDevice() {
            return $(document).width() <= 578;
        }

        function hamburgerMenuBackdropAnimation() {
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
        }

    });
})(jQuery);