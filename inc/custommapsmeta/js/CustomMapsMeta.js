import $ from 'jquery';
import mapboxgl from "mapbox-gl";
import axios from 'axios';

class CustomMapsMeta {
    constructor() {
        this.$mapContainer = $('.custom-meta-maps-container#custom-maps-meta');
        this.$map = this.$mapContainer.find('.map-container');
        this.$searchContainer = this.$mapContainer.find('.search-container');
        this.$searchResultsContainer = this.$searchContainer.find('.search-results');
        this.$locationSearchSpinner = this.$searchContainer.find('.custom-maps--spinner');

        this.$txtSearchLocation = this.$searchContainer.find('#search-location');
        this.$txtLocation = this.$mapContainer.find("input[name='location']")
        this.mapZoom = 13;

        // local variable

        this.locationSearchValue;
        this.locationSearchTimer;
        this.locationSearchResults;
        this.mapboxtSecretToken = translation_array.mapbox_secret_key;
        this.mapboxPublicToken = translation_array.mapbox_public_key;

        // set location
        if(this.$txtLocation.val()) {
            this.initMap(this.$txtLocation.val().split(','), this.mapZoom);
            this.initMarker(this.$txtLocation.val().split(','));
        }else {
            navigator.geolocation.getCurrentPosition( position =>{
                this.initMap([position.coords.longitude, position.coords.latitude])
            }, () => {
                this.initMap([121.0, 14.583331])
            },{
                enableHighAccuracy: true
            });
        }

        this.events();

    }

    events() {
        this.$txtSearchLocation.on('keyup', () => this.displayLocations());

        this.$searchResultsContainer.on('click', '.item' , (e) => {
            const index = $(e.currentTarget).data('index');
            if(!location) return;

            this.$txtSearchLocation.val(this.locationSearchResults[index].place_name);
            this.locationSearchValue = this.locationSearchResults[index].place_name;

            this.$searchResultsContainer.children().remove();
            this.map.flyTo({
                enableHighAccuracy: true,
                center: this.locationSearchResults[index].center,
                zoom: this.mapZoom,
                essential: true
            });

            this.setMarker(this.locationSearchResults[index].center);
        });
    }

    initMapEvents() {
        this.map.on('click', e => {
            this.setMarker([e.lngLat.lng, e.lngLat.lat]);
        });
    }

    initMarker(center) {
        // Set marker options.
        this.marker = new mapboxgl.Marker({
            draggable: true
        }).setLngLat(center)
        .addTo(this.map);

        this.marker.on('dragend', () => {
            const {lng, lat } = this.marker.getLngLat();
            this.$txtLocation.val([lng, lat].toString());
        });
    }

    initMap(center, mapZoom = 8) {
        this.$map.css('opacity', 0);

        if(!this.$map[0]) return;
        
        mapboxgl.accessToken = this.mapboxPublicToken;
        this.map = new mapboxgl.Map({
            container: this.$map[0],
            style: 'mapbox://styles/andrewlopezit/cksbd685j2dud17pav0q5rf5w',
            center: center,
            zoom: mapZoom,
        });

        this.map.addControl(new mapboxgl.NavigationControl());
       
        this.map.on('load', () =>{
            this.map.resize();
            this.$mapContainer.find('.custom-maps--spinner.is-loading.maps').remove();

            this.initMapEvents();
            this.$txtLocation.val(center.toString());

            this.$map.css('opacity', 1);
        });
    }

    setMarker(center) {
        if(this.marker) {
            this.marker.setLngLat(center);
        } else {
            this.initMarker(center);  
        }

        this.$txtLocation.val(center.toString());
    }

    itemSearchResultsTemplate(data) {

        let template = '';
        
        data.forEach((val, i) => {
            template+=` <div class="item" data-index="${i}">
                            <span class="dashicons dashicons-location"></span>
                            <span>${val.place_name}</span>
                        </div>`;
        });

        return template;
    }

    displayLocations() {
        if(!this.$txtSearchLocation.val() ||
         this.locationSearchValue === this.$txtSearchLocation.val()) return;

         this.$locationSearchSpinner.addClass('is-searching');

         clearInterval(this.locationSearchTimer);

         this.locationSearchTimer = setTimeout(() => {
             this.$searchResultsContainer.children().remove();

             this.locationSearchValue = this.$txtSearchLocation.val();
             this.$locationSearchSpinner.removeClass('is-searching');

            axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.locationSearchValue}.json?access_token=${this.mapboxtSecretToken}`).then(res => {
                const {data: {features}} = res;
                
                if(features.length > 0) {
                    this.locationSearchResults = features;
                    this.$searchResultsContainer.append(this.itemSearchResultsTemplate(features));
                }else {
                    this.$searchResultsContainer.append('<p>No results found.</p>')
                }
                
            });

         }, 800);
    }
}

export default CustomMapsMeta;