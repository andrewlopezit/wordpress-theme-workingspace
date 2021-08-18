import mapboxgl from "mapbox-gl";

const maps = (args) => {

    class Maps {
        constructor() {
            if(!args?.container) return;

            this.mapboxtSecretToken ='sk.eyJ1IjoiYW5kcmV3bG9wZXppdCIsImEiOiJja3NmaHFkcnIxOXl5MnZxcTRxMnl6dnVjIn0.FeYFdhahKOk9un-uF8sXpQ';
            this.mapboxPublicToken = 'pk.eyJ1IjoiYW5kcmV3bG9wZXppdCIsImEiOiJja3NiYWE0ZzQwMjcxMnFvNHBmMDlwMHpwIn0.Arhd62cdkLAS0k7SlXoQRg';
            
            this.initMap();

        }

        initMap() {
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

export default maps;