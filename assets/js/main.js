(function ($) {
    $(document).ready(function () {
        // initialize elements variables
        const $hamburgerMenu = $('#hamburger');
        const $navigationMenu = $('#menu-navigation');
        const $headerContainer = $('#header-container');

        // gsap variable
        let largeDeviceNavigationGSAP;
        let smallDeviceNavigaionGSAP;
        let hamburgermenuTimeline;

        // color codes
        const primaryColor = '#FDD500';
        const secondaryColor = '#00CEB5';
        const navigationBackgroundColor = '#013727';


        /**
         *  GSAP ANIMATION
         */
        initGsapAnimation();

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

                 // animate navigation small device
                if(isSmallDevice()) {
                    smallDeviceNavigaionGSAP.play();
                    $hamburgerMenu.addClass('is-hover');

                } else {
                    // animate navigation large device
                    largeDeviceNavigationGSAP.play();
                }

                // hamburgermenu animation
                hamburgermenuTimeline.play();
            } else {
                // animate close navigation small device
                if(isSmallDevice()) {
                    smallDeviceNavigaionGSAP.reverse();
                    $hamburgerMenu.removeClass('is-hover');
                } else {
                    // animate close navigation large device
                    largeDeviceNavigationGSAP.reverse();
                }

                // hamburgermenu animation
                hamburgermenuTimeline.reverse();
            }
        });

        // resize document events init functions
        $(window).resize(function (){
            initElementCSSRules();
            initGsapAnimation();

            // animate close navigation menu
            largeDeviceNavigationGSAP.reverse();
            smallDeviceNavigaionGSAP.reverse();
            hamburgermenuTimeline.reverse();

            if(!isSmallDevice()) hamburgerMenuBackdropAnimation();
        });

        /**
         *  FUNCTIONS
         */
        function initElementCSSRules() {
            // reposition navigation menu upon resizing the window
            $navigationMenu.css('left', 'auto');
        }

        function initGsapAnimation() {

        // large device animation
        largeDeviceNavigationGSAP = gsap.timeline({ paused: true });

        largeDeviceNavigationGSAP
        .to($navigationMenu, 
            {width:'100vw',
            height: 'auto',
            minHeight: '100vh', 
            backgroundColor: navigationBackgroundColor ,
            scale: 1, 
            top: 0, 
            left: 0,
            translateY: -20,
            translateX: -($(document).width()- $headerContainer.width())/2,
            duration: 0.3})
        .to($navigationMenu.find('#header-content'), {display: 'inherit', opacity: 1, duration: 0.5});
        
        // small device animation
        smallDeviceNavigaionGSAP = gsap.timeline({ paused: true});

        smallDeviceNavigaionGSAP
        .to($navigationMenu, {width:'100vw',
            height: 'auto',
            minHeight: '100vh', 
            backgroundColor: navigationBackgroundColor ,
            scale: 1, 
            top: 0, 
            left: 0,
            opacity: 1,
            translateY: -20,
            translateX: -($(document).width()- $headerContainer.width())/2,
            duration: 0.2})
        .to($navigationMenu.find('#header-content'), {display: 'inherit', opacity: 1, duration: 0.3});

        // hamburgermenu animation
        hamburgermenuTimeline = gsap.timeline( {paused: true} );

        hamburgermenuTimeline
        .to($hamburgerMenu.find('span').eq(1), {x: -30, opacity: 0, duration: 0.1})
        .to($hamburgerMenu.find('span').eq(0), {rotate: 45, translateY: 10, duration:0.1})
        .to($hamburgerMenu.find('span').eq(2), {rotate: -45, translateY: -10, duration: 0.1}, '<');
            
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