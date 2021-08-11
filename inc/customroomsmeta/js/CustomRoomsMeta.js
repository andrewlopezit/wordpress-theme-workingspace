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
        this.$selectedRoomsContainer = this.$postContainer.find('.selected-rooms');
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
        this.$totalAssignedRooms = this.$legendContainer.children().eq(0).find('.total-assigned-rooms > p');
        this.$unAssignedRooms = this.$legendContainer.children().eq(0).find('.total-unassigned-rooms > p');
        this.$assignedRoomsColor = this.$legendContainer.children().eq(1).find('.color.assigned').children().eq(0);
        this.$unAssignedRoomsColor = this.$legendContainer.children().eq(1).find('.color.unassigned').children().eq(0);

        // local varialble
        this.translationArray = translation_array;
        this.floorplanShapes;
        this.searchTimer;
        this.searchValue;
        this.roomsResults;

        this.totalRooms;
        this.totalAssignedRooms;
        this.totalUnAssignedRooms;
        this.assigendRoomsColor = '#00CEB5';
        this.unAssignedRoomsColor = '#778B85';
        this.isFetchingSelectedRooms;

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

    initHoverAnimation() {
        if(!this.$roomHover) return;

        this.$roomHover.css('opacity', 1);

        this.hoverRoomAnimation = gsap.timeline({repeat: -1});

        this.hoverRoomAnimation.to(this.$roomHover, {opacity: 0});
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

        const svgSelector = ['svg','svg > rect','svg > polygon', 'svg > polyline'];
        this.$outputContainer.on('click', svgSelector.toString(), e => {
            this.destroyActiveShapeAnimation();

                if(e.target.tagName === 'image') {
                    this.$searchPostContainer.removeClass('is-display');

                    return;
                }
                // display room if it has assigned rooms
                if($(e.target).data('id') && !this.isFetchingSelectedRooms){
                    this.$selectedRoomsContainer.find('.spinner-container').addClass('is-display');

                    const { site_url } =this.translationArray;
                    this.isFetchingSelectedRooms = true;

                    api(site_url).getPostById($(e.target).data('id')).then( result =>{
                        this.$selectedRoomsContainer.find('.item').remove();
                        this.$selectedRoomsContainer.find('.spinner-container').removeClass('is-display');
                        this.isFetchingSelectedRooms = false;

                        const { data } = result;

                        this.$selectedRoomsContainer.append(this.roomTemplate([data], true));

                    }).catch(() =>{
                        this.$selectedRoomsContainer.find('.spinner-container').removeClass('is-display');
                        this.isFetchingSelectedRooms = false;
                    });
                    return;
                }

                this.$activeShapes = $(e.target);
                this.$searchPostContainer.addClass('is-display');
                
                // console.log(e.target.getBoundingClientRect()); // get coordinates
                this.initActiveShapesAnimation();

                this.searchValue = '';
                this.$txtSearchInput.val('');
                this.$txtSearchInput.get(0).focus();

                return;
        });

        // search available rooms
        this.$txtSearchInput.on('keyup', () => this.displaySearchRooms());

        // assign rooms
        this.$searchResultsContainer.on('click', '.action-container > .assign-rooms', e => {

            const id = $(e.target).data('id');
            this.assignedRoom(id);
            return;
        });

        // delete assinged rooms
        this.$roomsContainer.on('click','.item > .action-container > .delete-rooms', e => {

            this.$selectedRoomsContainer.find('.item').remove();
            const $el = $(e.target);
        
            $el.parent().parent().remove();
            this.removeRooms($el);
            return;
        });
        

        // delete selected rooms
        this.$selectedRoomsContainer.on('click', '.item > .action-container > .delete-rooms',e => {
            const $el = $(e.target);

            this.removeRooms($el);

            this.$selectedRoomsContainer.find('.item').remove();
            this.destroyActiveShapeAnimation();

            this.$roomsContainer.children().each((i, el) => {
                const $assignedRooms = $(el);

                if($el.data('id') === $assignedRooms.data('id')) {
                    $assignedRooms.remove();
                    return;
                }
            });

            return;
        });

        this.$roomsContainer.on('mouseenter', '.item', e => {
            this.floorplanShapes.forEach((el, i) => {
                const id = $(el).data('id');

                if($(e.currentTarget).data('id') === id) {
                    this.$roomHover = $(this.floorplanShapes[i]);

                    this.initHoverAnimation();
                    return;
                }
            });
        });

        this.$roomsContainer.on('mouseleave', '.item', () => {
            if(!this.hoverRoomAnimation) return;
            
            this.hoverRoomAnimation.kill();
            this.$roomHover.css('opacity', 1);
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
        this.$totalAssignedRooms.html(this.totalAssignedRooms);

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

    removeRooms ($el) {
        const id = $el.data('id');

        this.$outputContainer.find('svg').children().each( (i, el)=> {
            const $el = $(el);

            if($el.data('id') === id) {
                this.destroyActiveShapeAnimation();

                $el.removeAttr('data-id style');
                this.rooms = _.remove(this.rooms, room => room.ID !== id);

                this.reloadContent();
                return;
            }
        });
    }

    getConvertedOutputtedSvg() {
        const serializer = new XMLSerializer();
        return serializer.serializeToString(this.$outputContainer.find('svg')[0]);
    }

    destroyActiveShapeAnimation(color = null) {
        if(!this.activeShapeAnimation) return;

        this.activeShapeAnimation.kill();

        color ? this.$activeShapes.css('fill', color) : this.$activeShapes.removeAttr('style');
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
            template+= `<div class="item" data-id="${value.ID}">
                            ${value.featured_image}
                            <div class="detail">
                                <h4 class="name">${value.post_title}</h4>
                                <div class="price">$${value.room_rate}/month</div>
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

        this.destroyActiveShapeAnimation(this.assigendRoomsColor);

        this.$activeShapes.attr('data-id', selectedRooms.ID);

        this.$searchPostContainer.removeClass('is-display');
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