import $ from 'jquery';
import gsap from 'gsap';

class HeroImageSlider {

    constructor() {
        // init elements
        this.$heroImageSlider = $('#hero-image-slider');
        this.$items =  this.$heroImageSlider.find('.item');

        // local variables
        this.displayCntrols = 4;
        this.animationSpeed = 10;
        this.lastIndexActiveItem = 0;
        this.primaryColor = getComputedStyle(document.documentElement)
                         .getPropertyValue('--primary-color');

        // init image slider
        this.initHeroImageSlider();

        // init slider animation
        this.initHeroImageSliderAnimation();

        this.events();
    }

    initHeroImageSlider() {
        this.$activeItems = this.$heroImageSlider.find('.item:lt(4)').addClass('is-display');
        this.addBorderClassActiveItems();
    }

    initHeroImageSliderAnimation() {
        this.heroImageSliderAnimation = gsap.timeline({ 
            onComplete: () => gsap.delayedCall( this.animationSpeed, () => this.heroImageSliderAnimation.reverse()), 
            onReverseComplete: () =>  this.paginateItem()});
        this.heroImageSliderAnimation
        .to(this.$activeItems.eq(0), { scale:1, width: '70%', opacity: 1 ,ease: 'back', duration: 1})
        .to(this.$activeItems.eq(1), { scale:1, width: '45%', translateX: '100%', translateY: '105%',  opacity: 1, ease: 'back', duration: 1})
        .to(this.$activeItems.eq(2), { scale:1, width: '60%', translateY: '130%',   opacity: 1, ease: 'back', duration: 1})
        .to(this.$activeItems.eq(3), { scale:1, width: '40%', translateX: '112%', translateY: '275%', opacity: 1, ease: 'back', duration: 1});
    }

    events() {
        this.$heroImageSlider
        .on('mouseover', () => this.heroImageSliderAnimation.pause())
        .on('mouseout', () => this.heroImageSliderAnimation.play());
    }

    paginateItem () {
        this.$items.removeClass('is-display border-left border-right hover-odd hover-even');

        this.heroImageSliderAnimation.reverse();

        this.lastIndexActiveItem = this.$activeItems.last().data('slide');

        const unDisplayItems = this.$heroImageSlider.find(`.item:gt(${this.lastIndexActiveItem}):lt(${this.lastIndexActiveItem+this.displayCntrols})`).get();

        if(this.displayCntrols > unDisplayItems.length) {
            const numberOfElements = this.displayCntrols - unDisplayItems.length;

            const addedUnDisplayItems = this.$heroImageSlider.find(`.item:lt(${numberOfElements})`).get();

            this.$activeItems = $(unDisplayItems.concat(addedUnDisplayItems));

        }else {
            this.$activeItems = $(unDisplayItems);
        }

        this.$activeItems.addClass('is-display');
        this.addBorderClassActiveItems();

        this.initHeroImageSliderAnimation();

    }

    addBorderClassActiveItems() {
        this.$activeItems.eq(0).addClass('border-left');
        this.$activeItems.eq(this.displayCntrols-1).addClass('border-right');

        for(let i = 0; i < this.$activeItems.length; i++) {
            if((i%2) === 0) {
                this.$activeItems.eq(i).addClass('hover-even');
            }else {
                this.$activeItems.eq(i).addClass('hover-odd');
            }
        }
    }

}

export default HeroImageSlider;