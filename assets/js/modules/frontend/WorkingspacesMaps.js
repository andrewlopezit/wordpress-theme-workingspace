import slider from "./Slider";
import $ from 'jquery';
import gsap from 'gsap';

class WorkingspacesMaps {
    constructor( ) {
        this.$workspaceContainer = $('#workspaces-map');
        this.$filterContainer = this.$workspaceContainer.find('.filter-container');
        this.$filterCategoriesContainer = this.$filterContainer.find('.filter.categories');
        this.$filterCapacityContainer = this.$filterContainer.find('.filter.capacity');
        this.$priceRange = this.$filterContainer.find('.filter > .action-container > .slider#price-range');

        this.$btnFilter =  this.$workspaceContainer.find('.action-container > .action.filter');

        //init slider
        slider({
            container: this.$priceRange.get()[0]
        });

        this.initAnimation();

        // init events
        this.events();
    }

    initAnimation() {
        if(!this.$filterContainer) return;

        this.filterAnimation = gsap.timeline({paused: true});
        
        this.$filterContainer.css({
            'display': 'none',
            'opacity': 0
        });

        this.filterAnimation.to(this.$filterContainer, {
            opacity: 1,
            display: 'flex',
            flexDirection: 'column', 
            translateY: 0, 
            duration: .3
        });
    }

    events() {
        this.$btnFilter.on('click', () => {
            this.$btnFilter.toggleClass('is-active');

            if(this.$btnFilter.hasClass('is-active')) {
                this.filterAnimation.play();
                return;
            }else {
                this.filterAnimation.reverse();
                return;
            }
        });

        this.$filterCategoriesContainer.on('click', '.action-container > button', e =>{
            const $el = $(e.currentTarget);

            $el.toggleClass('is-active');
        });

        this.$filterCapacityContainer.on('click', '.action-container > button', e => {
            const $el = $(e.currentTarget);

            $el.siblings().removeClass('is-active');
            $el.addClass('is-active');

        });
    }
}

export default WorkingspacesMaps;