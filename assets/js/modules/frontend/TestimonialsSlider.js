import $ from 'jquery';
import gsap from 'gsap';

class TestimonialsSlider {

    constructor() {

        // init variables
        this.$testimonialSlider = $('#testimonials-slider');
        this.$controls = this.$testimonialSlider.find('.controls > span');

        // init slider
        this.initActiveSlider();
        
        //init slider
        this.initSliderAnimation();
        
    }

    initActiveSlider() {
        this.$testimonialSlider.find('.item').first().addClass('is-active');

        this.$testimonialSlider.find('.controls > span:lt(3)').addClass('is-display');
        this.$testimonialSlider.find('.controls > span').first().addClass('is-active');
        this.$testimonialSlider.find('.controls > span').append('<div class="duration-progress"></div>');

        // init active item
        this.$activeItem = this.$testimonialSlider.find('.item.is-active');
        this.$activeControl = this.$testimonialSlider.find('.controls > span.is-active');

        // init events
        this.events();
       

    }

    events() {
        this.$controls.on('mouseenter', () => this.testimonialControlAnimation.pause());
        this.$controls.on('mouseout', () => this.testimonialControlAnimation.play());
    }

    initSliderAnimation () {

        // re-init active item
        this.$userProfile = this.$activeItem.find('.user-profile');
        this.$content = this.$activeItem.find('.content');

        this.testimonialSliderAnimation = gsap.timeline({onReverseComplete: () => this.nextItem() });
        this.testimonialSliderAnimation.from(this.$content.find('p'), {translateY: 100, opacity: 0, duration: .5}) 
                              .from(this.$userProfile, {scale: 0, opacity: 0, duration: .5})
                              .from(this.$content.find('.author-details'), {translateY: 20, opacity: 0, duration: .5});

        this.testimonialControlAnimation = gsap.timeline({ onComplete: () => this.testimonialSliderAnimation.reverse()});
        this.testimonialControlAnimation.to(this.$activeControl.find('.duration-progress'), {width: '100%', duration: 10});
    }

    nextItem() {
        this.$activeControl.removeClass('is-active');
        this.$activeItem.removeClass('is-active');

        const newItem = this.$activeItem.next()
        newItem.addClass('is-active');

        const newControl = this.$activeControl.next().removeClass('is-active');
        newControl.addClass('is-active');


        // // init new item and controls
        this.$activeItem = newItem;
        this.$activeControl = newControl;

        this.initSliderAnimation();
    }
}

export default TestimonialsSlider;