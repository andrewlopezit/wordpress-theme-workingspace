import { filter } from 'lodash';
import {rangeSlider, api, loading, maps} from './index';
class WorkingspacesMaps {
    constructor() {
        this.$workspaceContainer = $('#workspaces-map');

        if(!this.$workspaceContainer.length) return;

        this.$contentContainer = this.$workspaceContainer.find('.content-container');
        this.$labelFilterContainer = this.$contentContainer.find('.action-container > .label');
        this.$filterContainer = this.$contentContainer.find('.filter-container');
        this.$mapContainer = this.$contentContainer.find('.map-container');
        this.$mapSpacer = this.$mapContainer.find('.map-spacer');
        this.$map = this.$mapContainer.find('.map#map')
        this.$itemContainer = this.$contentContainer.find('.item-container');
        this.$filterCategoriesContainer = this.$filterContainer.find('.filter.categories');
        this.$filterCapacityContainer = this.$filterContainer.find('.filter.capacity');
        this.$filterLocationContainer = this.$filterContainer.find('.filter.location');
        this.$filterPriceRangeContainer = this.$filterContainer.find('.filter.price-range');
        this.$priceRange = this.$filterContainer.find('.filter > .action-container > .slider#price-range');

        this.$btnFilter =  this.$workspaceContainer.find('.action-container > .action.filter');
        this.$btnSetFilter = this.$filterContainer.find('.btn.filter');
        this.$btnFitLocations = this.$mapContainer.find('.btn.fit-workingspaces');
        this.$btnMapView =  this.$contentContainer.find('.action-container#mobile-maps');
        this.$btnLoadMore = this.$itemContainer.find('.btn.load-more');

        //local variable
        this.siteUrl = translation_array.site_url;
        this.mapZoom = 15;
        this.isMapLoaded = false;
        this.btnFilterPositionTop = this.$btnFilter.offset().top + 500;
        this.filterPaged = 1;

        //init slider
        rangeSlider({
            container: this.$priceRange.get()[0]
        });

        this.initAnimation();

        // init events
        this.events();

        // init map
        this.initMap();
    }
    initMap() {
        this.map =  maps({
            container: this.$map.get()[0],
            center: this.$map?.data('geolocation')?.split(',') ?? null,
            zoom: this.mapZoom
        }).control();

        this.workingspaces = this.getWorkingspacesInHtml();
        const locations = this.workingspaces.map(workingspace => {if(workingspace?.geolocation) return workingspace.geolocation});

        this.setMapMarkers(locations);

        //
        this.mapEvents();
    }
    
    setMapMarkers(locations) {
        if(this.markers) this.markers.forEach(marker => marker.remove());

        if(locations.length < 1) return;

        if(locations.length > 1) {
            this.markers = this.map
            .fitLocations(locations)
            .addMarkers(this.workingspaces)
            .getMarkers();

        }else {
            this.markers = this.map
            .addMarkers(this.workingspaces)
            .getMarkers();

            this.map.get().flyTo({
                center: locations[0],
                essential: true,
                zoom: this.mapZoom
            });
        }
    }

    mapEvents() {
        this.$map.hide();
        const load =  loading(this.$mapContainer, 60).start();

        this.map.get().on('load', () =>{
            this.$btnMapView.html(`<button class="btn maps"><i class="far fa-map"></i></button>`);

            this.map.get().resize();
            this.$map.show();
            this.isMapLoaded = true;

            load.end();
        });
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

        this.mapMobileAnimation = gsap.timeline({paused: true, 
            onComplete: () => {
                if(this.isMapLoaded) {
                    this.$mapContainer.css('width', $(document).width() - 44);
                    this.map.get().resize();
                }
            },
            onReverseComplete: () => this.$mapContainer.css('width', 0)});
        this.mapMobileAnimation.to(this.$mapContainer, {opacity: 1, width: $(document).width() - 44});

    }

    initBtnMobileMapAnimation() {
        
        this.$btnMapView.addClass('is-active');
        this.btnMapviewAnimation = gsap.timeline({ 
            onComplete: () => this.$btnMapView.find('.btn.maps > i').attr('class', 'fas fa-times'),
            onReverseComplete: () => {
                this.$btnMapView.find('.btn.maps > i').attr('class', 'far fa-map')
                this.$btnMapView.css({
                    left: 'auto',
                    right: 0
                });
            }
        });

        this.btnMapviewAnimation.to(this.$btnMapView, {top: 20, left: -10, padding: 5, right: 'auto'})
                                .to(this.$btnMapView.find('.btn.maps'), {width: 35, height: 35, marginRight: 0}, '<')
                                .to(this.$btnMapView.find('.btn.maps > i'), {fontSize: 18}, '<');
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

            $el.toggleClass('is-active');
        });

        this.$btnSetFilter.on('click', () => {
            this.filterAnimation.reverse();
            this.$btnFilter.removeClass('is-active');

            this.dislplayFilteredWorkingspaces();
        });

        this.$itemContainer.on('click', '.loading#loading > .btn.retry', () => {
            this.dislplayFilteredWorkingspaces();
        });

        this.$btnFitLocations.on('click', ()=>{
            const locations = this.workingspaces.map(workingspace => {if(workingspace?.geolocation) return workingspace.geolocation});

            this.map.fitLocations(locations);
        });

        this.$mapContainer.on('click', '.loading#loading > .btn.retry', () =>{ 
            this.initMap();
        });

        this.$itemContainer.on('click', '.item', (e) => {
            const $el = $(e.currentTarget);

            if($el) {
                const geolocation = $el.data('geolocation').split(',');
                this.map.get().flyTo({
                    center: geolocation,
                    essential: true,
                    zoom: this.mapZoom
                });
            }
        });

        $(document).on('scroll', e => {
            this.changePostionMobileBtnMap();
            this.changeFiltersPosition();
            this.changeMapPosition();
            
            if(this.$btnMapView.hasClass('is-active')) {
                this.btnMapviewAnimation.reverse();
                this.mapMobileAnimation.reverse();
                this.$btnMapView.removeClass('is-active');
            }
        });

        $(window).on('resize orientationchange', e => {
            if(this.isMapLoaded) this.map.get().resize();

            if(this.$btnMapView.hasClass('is-active')) {
                this.btnMapviewAnimation.reverse();
                this.mapMobileAnimation.reverse();
                this.$btnMapView.removeClass('is-active');
            }
        });

        this.$btnMapView.on('click', () => {
            if(!this.isMapLoaded) return;

            if(!this.$btnMapView.hasClass('is-active')){
                this.initBtnMobileMapAnimation();
                this.mapMobileAnimation.play();
            }else{
                this.btnMapviewAnimation.reverse();
                this.mapMobileAnimation.reverse();
                this.$btnMapView.removeClass('is-active');
            }
        });

        this.$btnLoadMore.on('click', () => {
            this.filterPaged++;

            const load =  loading(this.$itemContainer).start();
            const filter = this.getWorkingspaceFilter;

            this.$btnLoadMore.hide();

            api(this.siteUrl).getWorkingspacesByFilter(filter).then(res =>{
                this.$btnLoadMore.show();
                load.end();

                const {data: {posts}} = res;

                if(!posts) {
                    this.$btnLoadMore.attr('disabled', true);
                    return;
                }

                const template = this.workingspacesTemplate(posts);

                $(template).insertBefore(this.$btnLoadMore.parent());
                this.setWorkingspaces(posts, true);

                const locations = this.workingspaces.map(workingspace => { return workingspace?.geolocation});

                this.setMapMarkers(locations);

            }).catch((e) => {
                load.displayError();
            });
        });
    }

    changePostionMobileBtnMap() {
        const btnPostionTop = parseInt(getComputedStyle(this.$btnMapView.get()[0]).getPropertyValue('--position-top'));

        if(window.scrollY <= btnPostionTop) {
            this.$btnMapView.css('top', (btnPostionTop + 20) - window.scrollY);
        }else {
            this.$btnMapView.css('top', 20);
        }
    }

    changeFiltersPosition() {
        if(window.scrollY >= this.btnFilterPositionTop) {
            if(this.$btnFilter.hasClass('is-fixed')) return;

            this.$btnFilter.addClass('is-fixed shadow');
            this.$filterContainer.addClass('is-fixed shadow');
        }else {
            if(!this.$btnFilter.hasClass('is-fixed')) return;

            this.$btnFilter.removeClass('is-fixed shadow');
            this.filterAnimation.reverse();
            this.$filterContainer.removeClass('is-fixed shadow');
        }
    }

    changeMapPosition() {
        if($(document).width() <= 575.98) return;
        
        if(window.scrollY >= this.btnFilterPositionTop) {
            if(this.$mapContainer.hasClass('is-fixed')) return;

            this.$mapContainer.addClass('is-fixed shadow');
            this.$mapSpacer.hide();
            this.map.get().resize();
        }else {
            if(!this.$mapContainer.hasClass('is-fixed')) return;

            this.$mapContainer.removeClass('is-fixed shadow');
            this.$mapSpacer.show();
            this.map.get().resize();
        }
    }

    workingspacesTemplate(data) {
        let template = '';
        
        if(data.length < 1) {
            return `<p>No items match your criteria.</p>`;
        }

        data.forEach(val => {
            const minimumCapacity = val.capacity_list ? Math.min.apply(Math, val.capacity_list) : null;
            const maximumCapacity = val.capacity_list ? Math.max.apply(Math, val.capacity_list) : null;

            const locationTemplate = (location) => {
                return `
                    <div class="detail-icontainer location">
                        <i class="fas fa-map-marker-alt text-muted"></i>
                        <a href="#">${location}</a>
                    </div>`;
            }

            const priceRangeTemplate = (priceRange) => {
                return `<div class="detail-icontainer price-range">
                            <span>Price range: </span>
                            <span class="price">$${priceRange.length > 1 ? priceRange.join(' - $'): priceRange[0]}/month</span>
                        </div>`
            }

            const capacityTemplate = (capacityRange) => {
                return `<div class="detail-icontainer capacity">
                            <i class="fas fa-user text-muted"></i>
                            <p class="text-muted">Capacity: <span>${capacityRange[0]} - ${capacityRange[1]}</span></p>
                        </div>`;
            }

            template+= `<div class="item workspace card border-top-left border--post border--hover" data-geolocation="${val?.location?.location}">
                            <img class="card-img-top" src="${val.featured_image}" alt="">
                            <div class="card-body">
                                <div class="action-container">
                                    <div class="action-like shadow-sm">
                                        <i class="far fa-heart"></i>
                                    </div>
                                </div>

                                <h5><a href="${val?.permalink}">${val?.post_title}</a></h5>
                                
                                ${val?.location?.place_name ? locationTemplate(val.location.place_name): ''}
                                ${minimumCapacity || maximumCapacity ? capacityTemplate([minimumCapacity, maximumCapacity]) : ''} 
                                <div class="detail-icontainer total-rooms">
                                    <i class="fas fa-chair text-muted"></i>
                                    <p class="text-muted">No. of rooms: <span>${val?.total_rooms ?? 0}</span></p>
                                </div>
                                ${val?.price_range ? priceRangeTemplate(val.price_range): ''}
                            </div>
                        </div>`;
        });

        return template;
    }

    dislplayFilteredWorkingspaces() {
        const filter = this.getWorkingspaceFilter;
        const $activeLocation = this.$filterLocationContainer.find('.action-container > .btn.is-active');

        if(filter.priceRange) {
            const priceRange = filter.price_range.split(',');
            this.$labelFilterContainer.html(`Location: ${$activeLocation.html()}, Price range: $${priceRange.join(' - $')}`);
        }

        this.$itemContainer.find('.item,p').remove();
        const load =  loading(this.$itemContainer).start();

        api(this.siteUrl).getWorkingspacesByFilter(filter).then(res =>{
            const {data: {posts}} = res;

            this.$itemContainer.append(this.workingspacesTemplate(posts));
            this.setWorkingspaces(posts);

            const locations = this.workingspaces.map(workingspace => { return workingspace?.geolocation});
            this.setMapMarkers(locations);

            load.end();
        }).catch((e) => {
            load.displayError();
        });
    }

    getWorkingspacesInHtml() {
        let workingspaces = [];

        this.$itemContainer.find('.item').each((i, el) => {
            const property = {
                title: $(el).find('.card-body > h5 > a').html(),
                location: $(el).find('.card-body > .location > a').html(),
                capacity: $(el).find('.card-body > .capacity > p > .capacity').html(),
                totalRooms: $(el).find('.card-body > .total-rooms > p > .total-rooms').html(),
                priceRange: $(el).find('.card-body > .price-range > .price').html(),
                imgSrc: $(el).find('img').attr('src'),
                geolocation: $(el).data('geolocation').split(',') ?? null
            };

            workingspaces.push(property);
        })

        return workingspaces;
    }

    get getWorkingspaceFilter() {
        const $activeLocation = this.$filterLocationContainer.find('.action-container > .btn.is-active');
        const $activeCategories = this.$filterCategoriesContainer.find('.action-container > .btn.is-active');
        const $activeCapacity = this.$filterCapacityContainer.find('.action-container > .btn.is-active');
        const $priceRangeMin = this.$filterPriceRangeContainer.find('.minmax-values > div > #minimum');
        const $priceRangeMax = this.$filterPriceRangeContainer.find('.minmax-values > div > #maximum');

        const locationID = $activeLocation.map((i , el) => $(el).data('id'))[0];
        const categoryIds = $activeCategories.map((i , el) => $(el).data('id')).get();
        const capacities = $activeCapacity.map((i , el) => $(el).data('capacity')).get();
        const minimumPriceRange = +$priceRangeMin.html();
        const maximumPriceRange = +$priceRangeMax.html();

        const filter = {
            country: locationID,
            room_categories: categoryIds,
            capacities: capacities.length > 0 ? capacities : '1up',
            price_range: minimumPriceRange && maximumPriceRange ? `${minimumPriceRange},${maximumPriceRange}`: null,
            paged: this.filterPaged
        }

        return filter;
    }

    setWorkingspaces(workingspaces, isConcat = false) {
        let newWorkingspaces = [];

        workingspaces.forEach(workingspace => {
            const minimumCapacity = Math.min.apply(Math, workingspace.capacity_list);
            const maximumCapacity = Math.max.apply(Math, workingspace.capacity_list);

            const property = {
                title: workingspace?.post_title,
                location: workingspace?.location?.place_name,
                capacity: `${minimumCapacity} - ${maximumCapacity}`,
                totalRooms: workingspace?.total_rooms,
                imgSrc: workingspace?.featured_image,
                geolocation: workingspace?.location?.location.split(',')
            };

            if(workingspace?.priceRange) 
            property.priceRange =  `${workingspace?.price_range?.length > 1 ? workingspace.price_range.join(' - $'): workingspace?.price_range[0]}/month`;

            newWorkingspaces.push(property);
        });

        this.workingspaces = isConcat ? this.workingspaces.concat(newWorkingspaces) : newWorkingspaces;
    }

    isTouchEvent() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }
}

export default WorkingspacesMaps;