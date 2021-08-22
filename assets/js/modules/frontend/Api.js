import axios from 'axios';

const api = (url) => {

    class Api {
        constructor(url) {
            this.endpoint = url;
        }

        getWorkingspacesByFilter(filter) {
            const {country, roomCategories, capacities, priceRange} = filter;
            let url =`${this.endpoint}/wp-json/wp/v2/workingspaces?`;

            console.log(capacities);

            if(roomCategories.length > 0) url+=`room_categories=${roomCategories.toString()}`;
            if(country) url+=`&country=${country}`;
            if(capacities.length >= 1) url+= `&capacities=${capacities}`;
            if(capacities.length < 1) url+= `&capacities=1up`;

            if(priceRange) url+=`&price_range=${priceRange.toString()}`;
            
            return axios(url);
        }
    }


    return new Api(url);
}

export default api;
