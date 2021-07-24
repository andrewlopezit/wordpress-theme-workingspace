import $ from 'jquery';
import gsap from 'gsap';

class HamburgerMenu {
    constructor() {
        // initialize elements variables
        this.$hamburgerMenu = $('#hamburger');
        this.$navigationMenu = $('#menu-navigation');
        this.$headerContainer = $('#header-container');

        // init gsap animation
        this.initAnimationHamburgerMenu();

        // initialize events function
        this.events();
    }

    get getBackdropHoverProperties() {
        return {
            opacity: 1,
            scale: 1.6,
            duration: 0.25,
        }
    }

    get getBackdropExtendProperties() {
        return {
            width:'100vw',
            height: 'auto',
            minHeight: '100vh', 
            scale: 1, 
            top: 0, 
            left: 0,
            translateY: -20,
            translateX: -($(document).width()- this.$headerContainer.width())/2,
            duration: 0.2
        };
    }

    initAnimationHamburgerMenu() {
        // hamburger menu animation
        this.menuNavigationBackdropAnimation = gsap.timeline({ paused: true });

        if(this.isTouchEvent()) {
            this.menuNavigationBackdropAnimation
            .to(this.$navigationMenu, {opacity: 0, duration: 0})
            .to(this.$navigationMenu, this.getBackdropExtendProperties)
            .to(this.$navigationMenu, {opacity: 1, duration: 0.3})
            .to(this.$navigationMenu.find('#header-content'), {display: 'inherit', opacity: 1, duration: 0})

        } else {
            this.menuNavigationBackdropAnimation
            .to(this.$navigationMenu, this.getBackdropHoverProperties)
            .add('middle')
            .to(this.$navigationMenu, this.getBackdropExtendProperties)
            .to(this.$navigationMenu.find('#header-content'), {display: 'inherit', opacity: 1, duration: 0.1})
            .add('end');
        }

        // hamburger layer animation
        this.hamburgermenuLayerAnimation = gsap.timeline({ paused: true });

        this.hamburgermenuLayerAnimation
        .to(this.$hamburgerMenu.find('span').eq(1), {x: -40, opacity: 0, duration: 0.1})
        .to(this.$hamburgerMenu.find('span').eq(0), {rotate: 45, translateY: 10, duration:0.05})
        .to(this.$hamburgerMenu.find('span').eq(2), {rotate: -45, translateY: -10, duration: 0.05}, '<');
    }

    events() {
        // hamburger menu animation
        this.$hamburgerMenu
        .on('mouseover', this.animateInHoverBackdropNavigation.bind(this))
        .on('mouseout', this.animateOutHoverBackdropNavigation.bind(this));

        this.$hamburgerMenu.on('click', (e) => {
            const $hamburgerMenu = $(e.target);

            if(!$hamburgerMenu.hasClass('is-active')) {
                this.$hamburgerMenu.addClass('is-active');

                this.animateExtendBackdropNavigation();
                
            } else {
                this.$hamburgerMenu.removeClass('is-active');

                this.animateShringBackdropNavigation();
            }

        });

        $(window).on('resize', () => {
            this.hamburgermenuLayerAnimation.reverse();
            this.menuNavigationBackdropAnimation.reverse();

            this.$hamburgerMenu.removeClass('is-hover is-active');

            this.initAnimationHamburgerMenu();

            this.$navigationMenu.css('left', 'auto');
        });
    }

    isTouchEvent() {
        return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0))
    }

    animateInHoverBackdropNavigation() {
        if(this.isTouchEvent()) return;

        this.$hamburgerMenu.addClass('is-hover');
        
        if(!this.$hamburgerMenu.hasClass('is-active')) this.menuNavigationBackdropAnimation.tweenTo("middle");
    }

    animateOutHoverBackdropNavigation() {
        if(this.isTouchEvent()) return;

        this.$hamburgerMenu.removeClass('is-hover');
        
        if(!this.$hamburgerMenu.hasClass('is-active')) this.menuNavigationBackdropAnimation.reverse();
    }

    animateExtendBackdropNavigation() {
        this.hamburgermenuLayerAnimation.play();

        if(this.isTouchEvent()) {
            this.menuNavigationBackdropAnimation.play();
        } else {
            this.menuNavigationBackdropAnimation.tweenFromTo("middle", "end");
        }
    }

    animateShringBackdropNavigation() {
        this.hamburgermenuLayerAnimation.reverse();
        
        if(this.isTouchEvent()) {
            this.menuNavigationBackdropAnimation.reverse();

        } else {
            this.menuNavigationBackdropAnimation.tweenFromTo("end", "middle");
        }
    }
}

export default HamburgerMenu;