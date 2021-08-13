import $ from 'jquery';
import gsap from 'gsap';
import api from '../Api';
import { duration } from 'moment';

class CustomRoomsMeta {
    constructor() {
        this.$floorplanContainer = $('.floorplan-container#custom-rooms--floorplan');

        if(this.$floorplanContainer.length < 1)  return;
        
        this.$contentContainer = this.$floorplanContainer.find('.content');
        this.$progressbar = this.$contentContainer.find('.floorplan-progressbar');

        this.$activeShapes;
        this.$activeItem;


        // local variable
        this.translationArray = translation_array;
        this.baseEndpointUrl = `${this.translationArray.site_url}/wp-json/wp/v2/workingspaces/${this.$floorplanContainer.data('id')}/rooms`;
        this.floorplanShapes;
        this.floorplanAnimation;
        this.floorplanAnimationDuration = 15;
        this.indexActiveShape = 0;

        this.primaryColor = getComputedStyle(document.documentElement)
                         .getPropertyValue('--primary-color');

        this.secondaryColor = getComputedStyle(document.documentElement)
                         .getPropertyValue('--secondary-color');

        this.init();

        this.events();

    }

    init() {
        this.floorplanShapes = this.getFloorPlanShapes();

        let ids = [];
        this.floorplanShapes.forEach( el => {
            $(el).addClass('is-active');
            ids.push($(el).data('id'));
        });

        api(this.baseEndpointUrl).getPostsByIds(ids).then(result => {
            const {data} = result;

            this.$contentContainer.append(this.roomTemplate(data));

            this.displayItemElement();
            this.initAnimation();

        }).catch(() =>{
        });
    }

    initAnimation() {
        this.$activeShapes = $(this.floorplanShapes[this.indexActiveShape]);

        // animate shape
        this.activeShapeAnimation = gsap.timeline({repeat: -1});
        this.activeShapeAnimation.to(this.$activeShapes, {fill: this.primaryColor});

        // animate progressbar
        this.$progressbar.css('height', 0);
        this.progressbarAnimation = gsap.timeline({ onComplete: () => this.nextItem(), paused: true, delay: 1});
        this.progressbarAnimation.to(this.$progressbar, {height: '280px', duration: this.floorplanAnimationDuration});

        if(this.$activeItem) {
            this.activeItemAnimation = gsap.timeline({});
            this.activeItemAnimation.from(this.$activeItem.find('a > img'), {translateX: 100, opacity: 0})
                                    .from(this.$activeItem.find('.detail').children(), { opacity: 0, translateY: 20, ease: 'back', stagger:{ amount: 1, ease: 'stepped'} })
                                    .from(this.$activeItem.find('a.btn.visit-request'), {opacity: 0});

            this.progressbarAnimation.play();
        }
    }

    events() {
        this.$contentContainer.on('mouseover', '.item.is-display', () => this.progressbarAnimation.pause());
        this.$contentContainer.on('mouseout', '.item.is-display', () => this.progressbarAnimation.play());

        $(this.floorplanShapes).on('click', el => {
            const id = $(el.target).data('id');

            const activeId =this.floorplanShapes.findIndex( el => $(el).data('id') === id);

            this.gotoItem(activeId);
        });
    }

    getFloorPlanShapes() {
        const shapes = ['rect','polygon', 'polyline'];
        let floorplanShapes = [];

        this.$floorplanContainer.find('svg').children().each(function() {
            if($(this).data('id') > 0) {
                floorplanShapes.push(this);
            }
        });

        return floorplanShapes;
    }

    nextItem() {
        this.activeShapeAnimation.kill();

        $(this.floorplanShapes[this.indexActiveShape]).css('fill', this.secondaryColor);
        this.indexActiveShape =(this.indexActiveShape < this.floorplanShapes.length - 1) ? ++this.indexActiveShape :  0;

        this.displayItemElement();
        this.initAnimation();
    }

    gotoItem(num) {
        this.activeShapeAnimation.kill();
        this.progressbarAnimation.kill();

        $(this.floorplanShapes[this.indexActiveShape]).css('fill', this.secondaryColor);
        this.$progressbar.css('height', 0);
        
        this.indexActiveShape = num;

        this.displayItemElement();
        this.initAnimation();
    }

    displayItemElement() {
        this.$contentContainer.find('.item').removeClass('is-display');

        this.$contentContainer.find('.item').each( (i, el) => {
            if($(this.floorplanShapes[this.indexActiveShape]).data('id') === $(el).data('id')) {
                this.$activeItem = $(el).addClass('is-display');

                return;
            }
        });
    }

    roomTemplate(data) {
        let template ='';
        let categoriesTemplate = '<small>Category: ';

        data.forEach(val => {
            val.categories.forEach((category, index) => {
                categoriesTemplate+=`<a href="#">${category.name}`;
                if(index < val.categories.length-1) {
                    categoriesTemplate+=', </a>';
                }else {
                    categoriesTemplate+= '</a>';
                }
            });
        });

        categoriesTemplate+='</small>';

        data.forEach(value => {
            template+= `<div class="item" data-id="${value.ID}">
                            <a href="#">
                                ${value.featured_image}
                            </a>
                            <div class="detail">
                                <h2 class="name"><a href="#">${value.post_title}</a></h2>
                                <div class="price">Price: <span>$${value.room_rate}/month</span></div>
                                ${value.categories.length > 0 ? categoriesTemplate : ''}

                                <p>${value.post_excerpt ? value.post_excerpt : value.post_content ? value.post_content_trim: ''}</p>
                            </div>
                            <a class="btn visit-request" href="">Request a visit</a>
                        </div>`;
        });
       return template;
    }
}

export default CustomRoomsMeta;