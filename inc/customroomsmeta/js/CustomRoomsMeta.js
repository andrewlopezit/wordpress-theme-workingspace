import $ from 'jquery';
import gsap from 'gsap';
import api from './modules/Api';
import _ from 'lodash';

class CustomRoomsMeta {

    constructor() {
        this.$customRoomsMeta = $('#custom-rooms-meta');
        this.$actionContainer = this.$customRoomsMeta.find('.action-container');
        
        this.$contentContainer = this.$customRoomsMeta.find('.content-container');
        this.$postContainer = this.$contentContainer.find('.post-container');
        this.$roomsContainer = this.$postContainer.find('.rooms-container');
        this.$svgClusteringContainer =  this.$contentContainer.find('.floorplan-container > .svg-clustering');
        this.$outputContainer = this.$contentContainer.find('.output');
        this.$searchPostContainer = this.$outputContainer.find('.search-container');
        this.$searchResultsContainer = this.$searchPostContainer.find('.search-results');
        this.$searchSpinner = this.$searchPostContainer.find('.spinner-container');

        this.$textareaSvg = this.$svgClusteringContainer.find('textarea');
        this.$txtSearchInput = this.$searchPostContainer.find('input');

        this.$btnOutput = this.$actionContainer.find('#output');
        this.$btnSvgCluster = this.$actionContainer.find('#svg-cluster');

        this.$detailsContainer = this.$contentContainer.find('.details-container');
        this.$legendContainer = this.$detailsContainer.find('.legend-container');
        this.$totalRooms = this.$legendContainer.children().eq(0).find('.total-rooms > p');
        this.$assignedRooms = this.$legendContainer.children().eq(0).find('.total-assigned-rooms > p');
        this.$unAssignedRooms = this.$legendContainer.children().eq(0).find('.total-unassigned-rooms > p');
        this.$assignedRoomsColor = this.$legendContainer.children().eq(1).find('.color.assigned').children().eq(0);
        this.$unAssignedRoomsColor = this.$legendContainer.children().eq(1).find('.color.unassigned').children().eq(0);

        // local varialble
        this.translationArray = translation_array;
        this.floorplanShapes;
        this.$activeShapes;
        this.searchTimer;
        this.searchValue;
        this.roomsResults;

        this.totalRooms;
        this.totalAssignedRooms;
        this.totalUnAssignedRooms;
        this.assigendRoomsColor = '#00CEB5';
        this.unAssignedRoomsColor = '#778B85';

        this.rooms = [];

        // init events
        this.events();

        //init color
        this.$assignedRoomsColor.css('background-color', this.assigendRoomsColor);
        this.$unAssignedRoomsColor.css('background-color', this.unAssignedRoomsColor);
    }

    initActiveShapesAnimation() {
        if(!this.$activeShapes) return;

        this.unAssignedRoomsColor = this.$activeShapes.css('fill');


        this.activeShapeAnimation = gsap.timeline({repeat: -1});

        this.activeShapeAnimation.to(this.$activeShapes, {fill: this.assigendRoomsColor});
    }
    events() {
        this.$btnOutput.on('click', () => {
            this.$svgClusteringContainer.removeClass('is-display');
            this.$outputContainer.addClass('is-display');

            this.initContent();
        });

        this.$btnSvgCluster.on('click', () => {
            this.$svgClusteringContainer.addClass('is-display');
            this.$outputContainer.removeClass('is-display');
        });

        // on clicking shapes
        this.$outputContainer.on('click', e => {
            const classesSearchContainer = ['components-text-control__input', 
            'item',
            'attachment-post-thumbnail size-post-thumbnail wp-post-image',
            'name',
            'price',
            'detail',   
            'categories',
            'components-button is-primary assign-rooms'];

           if(classesSearchContainer.includes(e.target.className)) {
                //prevent close search input
               return;
           } else if(this.floorplanShapes.map(shape => shape.id).includes(e.target.id)) {

                this.destroyActiveShapeAnimation();

                this.$activeShapes = $(e.target);
                this.$searchPostContainer.addClass('is-display');
                
                // console.log(e.target.getBoundingClientRect()); // get coordinates
                this.initActiveShapesAnimation();

                this.searchValue = '';
                this.$txtSearchInput.val('');
                this.$txtSearchInput.get(0).focus();

                return;
           } else {
                this.$searchPostContainer.removeClass('is-display');
                this.destroyActiveShapeAnimation();
                
                return;
           }
        });

        // search available rooms
        this.$txtSearchInput.on('keyup', () => this.displaySearchRooms());

        // assign rooms
        this.$searchResultsContainer.on('click', e => {

            if(e.target.className !== 'components-button is-primary assign-rooms') return;

            const id = $(e.target).data('id');
            this.assignedRoom(id);
            return;
        });

        // delete assinged rooms
        this.$roomsContainer.on('click', e =>{

            if(e.target.className !== 'components-button is-destructive delete-rooms') return;

            const $el = $(e.target);
            const id = $el.data('id');

            $el.parent().parent().remove();

            this.$outputContainer.find('svg').children().each( (i, el)=> {
                const $el = $(el);

                if($el.data('id') === id) {
                    $el.removeAttr('data-id style');

                    this.reloadContent();

                    return;
                }
            });
        });
    }

    initContent() {
        this.$outputContainer.find('svg').remove();

        let svg = this.$textareaSvg.val();
        this.$outputContainer.append(svg);
        this.floorplanShapes = this.getFloorPlanShapes();

        this.totalRooms = this.floorplanShapes.length;
        this.$totalRooms.html(this.totalRooms);

        this.totalAssignedRooms = this.getTotalUnAssignedRooms();
        this.$assignedRooms.html(this.totalAssignedRooms);

        this.totalUnAssignedRooms = this.totalRooms - this.totalAssignedRooms;
        this.$unAssignedRooms.html(this.totalUnAssignedRooms);
    }
    
    getFloorPlanShapes() {
        const shapes = ['rect','polygon', 'polyline'];
        let floorplanShapes = [];

        this.$outputContainer.find('svg').children().each(function() {
            if(shapes.includes(this.tagName)) {
                floorplanShapes.push(this);
            }
        });

        return floorplanShapes;
    }

    getTotalUnAssignedRooms() {
        return this.floorplanShapes.map(shape => $(shape).data('id')).filter(val => val > 0).length;;
    }

    getConvertedOutputtedSvg() {
        const serializer = new XMLSerializer();
        return serializer.serializeToString(this.$outputContainer.find('svg')[0]);
    }

    destroyActiveShapeAnimation(color = this.unAssignedRoomsColor) {
        if(!this.activeShapeAnimation) return;

        this.$activeShapes.css('fill', color);

        this.activeShapeAnimation.kill();
        this.activeShapeAnimation = null;
    }

    displaySearchRooms() {        

        if(!this.$txtSearchInput.val() ||
            this.searchValue === this.$txtSearchInput.val()) return;

        this.searchValue = this.$txtSearchInput.val();

        clearInterval(this.searchTimer);
        this.$searchSpinner.addClass('is-display');

        this.searchTimer = setTimeout(() => {
            const { site_url } =this.translationArray;

            this.$searchResultsContainer.children().remove();
            api(site_url).getPostsByName(this.searchValue).then( result => {
                const { data } = result;

                const diff = _.differenceBy(data, this.rooms, 'ID');

                if(diff.length > 0) {
                    this.roomsResults = diff;
                    this.$searchResultsContainer.append(this.roomTemplate(diff));
                }
                else{
                    this.$searchResultsContainer.append(`<p>No results found.</p>`);
                }
                
                this.$searchSpinner.removeClass('is-display');
            }).catch(() =>{
                this.$searchResultsContainer.append(`<p>No results found.</p>`);
            });
        }, 800);
    }

    roomTemplate(data, isContent = false) {
        let template ='';

        data.forEach(value => {
            template+= `<div class="item">
                            ${value.featured_image}
                            <div class="detail">
                                <h4 class="name">${value.post_title}</h4>
                                <div class="price">${value.room_rate}</div>
                                <small class="categories">${value.categories.map(category => category.name).toString()}</small>
                            </div>
                            <div class="action-container">
                                <button data-id="${value.ID}" type="button" class="components-button ${isContent ?  'is-destructive delete-rooms': 'is-primary assign-rooms'}">
                                    ${isContent ?  'Remove': 'Assign'}
                                </button>
                            </div>
                        </div>`;
        });

       return template;
    }

    assignedRoom(id) {
        const selectedRooms = this.roomsResults.filter( room => room.ID === id)[0];

        if(!selectedRooms) return;

        this.$activeShapes.attr('data-id', selectedRooms.ID);

        this.$searchPostContainer.removeClass('is-display');
        this.destroyActiveShapeAnimation(this.assigendRoomsColor);
        this.$searchResultsContainer.children().remove();

        this.rooms.unshift(selectedRooms);

        this.reloadContent();

        this.$roomsContainer.append(this.roomTemplate([selectedRooms], true));

        return;
    }

    reloadContent() {
        this.$textareaSvg.val(this.getConvertedOutputtedSvg());
        this.initContent();
    }
}

export default CustomRoomsMeta;