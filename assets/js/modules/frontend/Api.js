import axios from 'axios';

const api = (url) => {

    class Api {
        constructor(url) {
            this.endpoint = url;
        }

        getWorkingspacesByFilter(filter) {
            const {country, roomCategories, capacity, priceRange} = filter;
            let url =`${this.endpoint}/wp-json/wp/v2/workingspaces?`;

            if(roomCategories) url+=`room_categories=${roomCategories.toString()}`;
            if(country) url+=`&country=${country}`;
            
            if(capacity) url+= `&capacity=${capacity}`;
            if(!capacity) url+= `&capacity=1up`;

            if(priceRange) url+=`&price_range=${priceRange.toString()}`;
            
            return axios(url);
        }
    }


    return new Api(url);
}

export default api;
