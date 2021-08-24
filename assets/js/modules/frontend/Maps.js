import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from "mapbox-gl";

const Maps = (args) => {

    class Maps {
        constructor() {
            if(!args?.container) return;

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
         * @param {boolean} istFitToMarkers 
         * @returns 
         */
        addMarkers(markers, istFitToMarkers = false) {
            let coordinates = [];

            markers.forEach(marker => {
                if(marker?.geolocation) {
                    const template = `<div class="maps-marker">
                    <div class="background"></div>
                    <img src="${marker.imgSrc}"/></div>`;

                    const el = $.parseHTML(template);

                    new mapboxgl.Marker(el[0])
                    .setLngLat(marker.geolocation)
                    .addTo(this.map); 
                }

                if(istFitToMarkers) {
                    if(marker?.geolocation) {
                        coordinates.push(marker.geolocation);
                    }
                }
            });

            if(istFitToMarkers) {
                const bounds = new mapboxgl.LngLatBounds(coordinates);
                for (const coord of coordinates) {
                    bounds.extend(coord);
                }
                     
                this.map.fitBounds(bounds, {
                    padding: 50
                });
            }

            return this;
        }
    }

    return new Maps(args);
}

export default Maps;