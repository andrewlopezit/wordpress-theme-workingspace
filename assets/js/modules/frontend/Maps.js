import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from "mapbox-gl";

const Maps = (args) => {

    class Maps {
        constructor() {
            if(!args?.container) return;
            this.markers = [];

            const { mapbox_public_key, mapbox_secret_key } = translation_array;

            this.mapboxtSecretToken = mapbox_secret_key;
            this.mapboxPublicToken = mapbox_public_key;

            this.initMap(args.center, args.zoom ?? 10);
        }

        initMap(center, zoom) {
            if(!center) return;

            mapboxgl.accessToken = this.mapboxPublicToken;
            this.map = new mapboxgl.Map({
                container: args.container,
                style: 'mapbox://styles/andrewlopezit/cksbd685j2dud17pav0q5rf5w',
                center: center,
                zoom: zoom
            });

            return this.map;
        }

        control() {
            this.map.addControl(new mapboxgl.NavigationControl());

            return this;
        }

        /**
         * 
         * @param {*} markers 
         * @returns 
         */
        addMarkers(markers) {
            let coordinates = [];

            markers.forEach(marker => {
                if(marker?.geolocation) {
                    const template = `<div class="maps-marker places">
                    <div class="background"></div>
                    <img src="${marker.imgSrc}"/></div>`;

                    // create the popup
                    const popup = new mapboxgl.Popup().setHTML(
                        `<div class="title">${marker?.title}</div>
                        <p><span>Location: </span>${marker?.location ? marker.location : ''}</p>
                        <p><span>Capacity: </span> ${marker?.capacity ? marker.capacity : ''}</p>
                        <p><span>Total rooms: </span>${marker?.totalRooms ? marker.totalRooms : ''}</p>
                        <p><span>Price range: </span> ${marker?.priceRange ? marker.priceRange : ''}</p>`
                    );

                    const el = $.parseHTML(template);

                    const loc = marker?.geolocation.map(loc => +loc);

                   const placeMarker =  new mapboxgl.Marker(el[0])
                    .setLngLat(loc)
                    .setPopup(popup)
                    .addTo(this.map); 

                    this.markers.push(placeMarker);
                }
            });

            return this;
        }

        fitLocations(locations) {
            const bounds = locations.reduce((bounds, coord) => {
                return bounds.extend(coord);
            }, new mapboxgl.LngLatBounds(locations[0], locations[0]));

            this.map.fitBounds(bounds, {
                padding: 80
            });

            return this;
        }

        get() {
            return this.map;
        }

        getMarkers() {
            return this.markers;
        }
    }

    return new Maps(args);
}

export default Maps;