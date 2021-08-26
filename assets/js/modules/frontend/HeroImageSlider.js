class HeroImageSlider {

    constructor() {
        // init elements
        this.$heroImageSlider = $('#hero-image-slider');
        this.$items =  this.$heroImageSlider.find('.item');

        // local variables
        this.displayCntrols = 4;
        this.animationSpeed = 5;
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
        this.addClassesActiveItem();
    }

    initHeroImageSliderAnimation() {
        this.heroImageSliderAnimation = gsap.timeline({ 
            onComplete: () => gsap.delayedCall( this.animationSpeed, () => this.heroImageSliderAnimation.reverse()), 
            onReverseComplete: () =>  this.paginateItem()});
        this.heroImageSliderAnimation.to(this.$activeItems, { opacity: 1, scale:1, ease: 'back', stagger:{ amount: 2, ease: 'stepped'} });
    }

    events() {
        this.$heroImageSlider
        .on('mouseover', () => this.heroImageSliderAnimation.pause())
        .on('mouseout', () => this.heroImageSliderAnimation.play());
    }

    paginateItem () {
        this.$items.removeClass(
            `is-display
             first
             second
             third
             fourth
            `
        );

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
        this.addClassesActiveItem();

        this.initHeroImageSliderAnimation();

    }

    addClassesActiveItem() {
        for(let i = 0; i < this.$activeItems.length; i++) {
            switch(i) {
                case 0: {
                    this.$activeItems.eq(i).addClass('first');
                }
                break;
                case 1: {
                    this.$activeItems.eq(i).addClass('second');
                }
                break;
                case 2: {
                    this.$activeItems.eq(i).addClass('third');
                }
                break;
                case 3: {
                    this.$activeItems.eq(i).addClass('fourth');
                }
                break;
            }
        }
    }

}

export default HeroImageSlider;