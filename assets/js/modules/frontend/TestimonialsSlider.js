class TestimonialsSlider {

    constructor() {

        // init variables
        this.$testimonialSlider = $('#testimonials-slider');
        this.$controlsContainer = this.$testimonialSlider.find('.controls')
        this.$controls = this.$controlsContainer.find('span');
        this.$items = this.$testimonialSlider.find('.item');


        // init local variable
        this.sliderDuration = 10; // by seconds;
        this.displayControls = 3;
        this.sliderCounter = 0;
        this.controlsHolder;
        this.lastIndexActiveControl = 0;
        this.isAlreadyInit = false;

        // init slider
        this.initActiveSlider();
        
        //init slider
        this.initSliderAnimation();
        
    }

    initActiveSlider() {
        this.$testimonialSlider.find('.item').first().addClass('is-active');

        // init slider controls
        this.$testimonialSlider.find(`.controls > span:lt(${this.displayControls})`).addClass('is-display');
        this.controlsHolder = this.$testimonialSlider.find(`.controls > span:lt(${this.displayControls})`).get();
        this.$testimonialSlider.find('.controls > span').first().addClass('is-active');
        this.$testimonialSlider.find('.controls > span').append('<div class="duration-progress"></div>');

        // init active item
        this.$activeItem = this.$testimonialSlider.find('.item.is-active');
        this.$activeControl = this.$testimonialSlider.find('.controls > span.is-active');
        this.$durationProgress = this.$controls.find('.duration-progress');

        // init events
        this.events();
       

    }

    events() {
       this.$controlsContainer
       .on('mouseover', () => { if(this.testimonialControlAnimation) this.testimonialControlAnimation.pause()})
       .on('mouseout',() => { if(this.testimonialControlAnimation) this.testimonialControlAnimation.play()});

       this.$controlsContainer.on('click', e => this.gotoItem(e));
    }

    initSliderAnimation () {

        // re-init active item
        this.isAlreadyInit = true;
        this.$userProfile = this.$activeItem.find('.user-profile');
        this.$content = this.$activeItem.find('.content');

        this.testimonialSliderAnimation = gsap.timeline({onReverseComplete: () => this.nextItem() });
        
        if(this.$content.find('p').length)
        this.testimonialSliderAnimation = this.testimonialSliderAnimation.to(this.$content.find('p'), {translateY: 0, opacity: 1, ease: 'back', duration: .8});
        if(this.$userProfile.length)
        this.testimonialSliderAnimation = this.testimonialSliderAnimation.to(this.$userProfile, {scale: 1, opacity: 1, ease: 'back', duration: .8});
        if(this.$content.find('.autho-details').length)
        this.testimonialSliderAnimation = this.testimonialSliderAnimation.to(this.$content.find('.author-details'), {translateY: 0, opacity: 1, ease: 'back', duration: .8});

        this.testimonialControlAnimation = gsap.timeline({ onComplete: () => this.testimonialSliderAnimation.reverse()});
        this.testimonialControlAnimation.to(this.$activeControl.find('.duration-progress'), {width: '100%', duration: this.sliderDuration});
    }

    paginateControls() {
        this.$controls.removeClass('is-display');
        this.$durationProgress.css('width', 0);
        this.sliderCounter = 0;

        this.controlsHolder = this.$testimonialSlider.find(`.controls > span:gt(${this.lastIndexActiveControl}):lt(${this.lastIndexActiveControl+this.displayControls})`).get();
        
        if(this.displayControls > this.controlsHolder.length) {
            const numberOfElements = this.displayControls - this.controlsHolder.length;

            const addedElements = this.$testimonialSlider.find(`.controls > span:lt(${numberOfElements})`).get();
            
            this.controlsHolder = this.controlsHolder.concat(addedElements);
        }

        $(this.controlsHolder).addClass('is-display');
    }

    nextItem() {
        let newControl;
        let newItem;

        newControl = this.getNewControl();
        newControl.addClass('is-active');

        newItem = this.getNewItem();
        newItem.addClass('is-active');

        // // init new item
        this.$activeItem = newItem;
        this.$activeControl = newControl;

        this.lastIndexActiveControl = this.$testimonialSlider.find('.controls > span.is-active').data('slide');

        this.initSliderAnimation();

    }

    getNewControl() {
        this.$activeControl.removeClass('is-active');
        this.sliderCounter++;        

        if(this.sliderCounter < this.displayControls) {
            return $(this.controlsHolder[this.sliderCounter]);
        }else {
            this.paginateControls();
            const index = this.lastIndexActiveControl+1 === this.$controls.length ? 0 : this.lastIndexActiveControl+1;

            return this.$controls.eq(index);
        }
    }

    getNewItem () {
        this.$activeItem.removeClass('is-active');
        
        const slideIndex = this.$controlsContainer.find('span.is-active').data('slide');
        return this.$items.eq(slideIndex);
    }

    gotoItem(e) {
        const $element = $(e.target);

        if(!$element.hasClass('is-display') || 
            $element.hasClass('is-active') ||
            !this.isAlreadyInit) return;

        this.isAlreadyInit = true;

        const targettedSlideIndex = $element.data('slide');
        this.sliderCounter = this.controlsHolder.findIndex( element => $(element).data('slide') === $element.data('slide') - 1);

        const filteredElements = this.controlsHolder.filter( element => $(element).data('slide') < targettedSlideIndex);
        $(filteredElements).removeClass('is-active');

        const unFilteredElements = this.controlsHolder.filter( element => $(element).data('slide') >= targettedSlideIndex );
        $(unFilteredElements).removeClass('is-active');

        this.stopControlAnimation();
          
        $(filteredElements).find('.duration-progress').css('width', '100%');
        $(unFilteredElements).find('.duration-progress').css('width', '0%');

        this.testimonialSliderAnimation.reverse();
    }

    stopControlAnimation() {
        if(!this.testimonialControlAnimation) return;

        this.testimonialControlAnimation.kill();
        this.testimonialControlAnimation = null;
    }
    
}

export default TestimonialsSlider;