import axios from 'axios';

const Api = (url) => {
    class Api {
        constructor(url) {
            this.endpoint = url;
        }
    
        getWorkingspacesByFilter(filter) {
            let url =`${this.endpoint}/wp-json/wp/v2/workingspaces?`;
    
            for (let key in filter) {
                if (filter.hasOwnProperty(key) && filter[key]) {
                    url+=`${key}=${filter[key]}&`;
                }
            }

            return axios(url);
        }
    }

    return new Api(url);
}

export default Api;