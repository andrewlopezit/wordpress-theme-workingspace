import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from "mapbox-gl";

const Maps = (args) => {

    class Maps {
        constructor() {
            if(!args?.container) return;

            const { mapbox_public_key, mapbox_secret_key } = translation_array;

            this.mapboxtSecretToken = mapbox_secret_key;
            this.mapboxPublicToken = mapbox_public_key;

            this.initMap([39.657325, -4.024902], 9);
        }

        initMap(center, mapZoom) {
            mapboxgl.accessToken = this.mapboxPublicToken;
            this.map = new mapboxgl.Map({
                container: args.container,
                style: 'mapbox://styles/andrewlopezit/cksbd685j2dud17pav0q5rf5w',
                center: center,
                zoom: mapZoom,
            });
        }
    }

    return new Maps(args);
}

export default Maps;