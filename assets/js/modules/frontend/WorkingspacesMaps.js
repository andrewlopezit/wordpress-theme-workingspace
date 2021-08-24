import $ from 'jquery';
import gsap from 'gsap';
import {slider, api, loading, maps} from './index';
 
class WorkingspacesMaps {
    constructor() {
        this.$workspaceContainer = $('#workspaces-map');
        this.$contentContainer = this.$workspaceContainer.find('.content-container');
        this.$labelFilterContainer = this.$contentContainer.find('.action-container > .label');
        this.$filterContainer = this.$contentContainer.find('.filter-container');
        this.$mapContainer = this.$contentContainer.find('.map-container');
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

        //local variable
        this.siteUrl = translation_array.site_url;

        //init slider
        slider({
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
            center: this.$map.data('geolocation').split(',') ?? null,
            zoom: 20
        }).control();

        this.workingspaces = this.getWorkingspacesInHtml();
        const locations = this.workingspaces.map(workingspace => {if(workingspace?.geolocation) return workingspace.geolocation});

        this.setMapMarkers(locations);

        //
        this.mapEvents();
    }

    setMapMarkers(locations) {
        if(this.markers) this.markers.forEach(marker => marker.remove());

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
                zoom: 12 
            });
        }
    }

    mapEvents() {
        this.$map.hide();
        const load =  loading(this.$mapContainer, 60).start();

        this.map.get().on('load', () =>{
            this.$map.show();
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
        })
    }

    workingspacesTemplate(data) {
        let template = '';
        
        if(data.length < 1) {
            return `<p>No items match your criteria.</p>`;
        }

        data.forEach(val => {
            const minimumCapacity = Math.min.apply(Math, val.capacity_list);
            const maximumCapacity = Math.max.apply(Math, val.capacity_list);

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

            template+= `<div class="item workspace card border-top-left border--post border--hover">
                            <img class="card-img-top" src="${val.featured_image}" alt="">
                            <div class="card-body">
                                <div class="like--container shadow-sm">
                                    <i class="far fa-heart"></i>
                                </div>
                                <a href="${val?.permalink}">
                                    <h5>${val?.post_title}</h5>
                                </a>
                                ${val?.location?.place_name ? locationTemplate(val.location.place_name): ''}
                                <div class="detail-icontainer capacity">
                                    <i class="fas fa-user text-muted"></i>
                                    <p class="text-muted">Capacity: <span>${minimumCapacity} - ${maximumCapacity}</span></p>
                                </div>
                                <div class="detail-icontainer total-rooms">
                                    <i class="fas fa-chair text-muted"></i>
                                    <p class="text-muted">No. of rooms: <span>${val?.total_rooms}</span></p>
                                </div>
                                ${val?.price_range ? priceRangeTemplate(val.price_range): ''}
                            </div>
                        </div>`;
        });

        return template;
    }

    dislplayFilteredWorkingspaces() {
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
                roomCategories: categoryIds,
                capacities: capacities,
                priceRange: [minimumPriceRange, maximumPriceRange]
            }

            this.$labelFilterContainer.html(`Location: ${$activeLocation.html()}, Price range: $${filter.priceRange.join(' - $')}`);

            this.$itemContainer.find('.item').remove();
            const load =  loading(this.$itemContainer).start();

            api(this.siteUrl).getWorkingspacesByFilter(filter).then(res =>{
                const {data: {posts}} = res;

                this.$itemContainer.append(this.workingspacesTemplate(posts));
                this.setWorkingspaces(posts);

                const locations = this.workingspaces.map(workingspace => {if(workingspace?.geolocation) return workingspace.geolocation});
                this.setMapMarkers(locations);

                load.end();
            }).catch(() => {
                load.displayError();
            });
    }

    getWorkingspacesInHtml() {
        let workingspaces = [];

        this.$itemContainer.find('.item').each((i, el) => {
            const property = {
                title: $(el).find('.card-body > a > h5').html(),
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

    setWorkingspaces(workingspaces) {
        let newWorkingspaces = [];

        workingspaces.forEach(workingspace => {
            const minimumCapacity = Math.min.apply(Math, workingspace.capacity_list);
            const maximumCapacity = Math.max.apply(Math, workingspace.capacity_list);

            const property = {
                title: workingspace?.post_title,
                location: workingspace?.location?.place_name,
                capacity: `${minimumCapacity} - ${maximumCapacity}`,
                totalRooms: workingspace?.total_rooms,
                priceRange: `${workingspace.price_range.length > 1 ? workingspace.price_range.join(' - $'): workingspace.price_range[0]}/month`,
                imgSrc: workingspace?.featured_image,
                geolocation: workingspace?.location?.location.split(',')
            };

            newWorkingspaces.push(property);
        });

        this.workingspaces = newWorkingspaces;
    }
}

export default WorkingspacesMaps;