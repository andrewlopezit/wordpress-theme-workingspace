import axios from 'axios';

const Api = (url) => {
    class Api {
        constructor(url) {
            this.endpoint = url;
        }
    
        getWorkingspacesByFilter(filter) {
            let url =`${this.endpoint}/wp-json/wp/v2/workingspaces?${this.getStringFilterUrl(filter)}`;

            return axios(url);
        }

        getPostsByFilter(filter) {
            let url =`${this.endpoint}/wp-json/wp/v2/posts?${this.getStringFilterUrl(filter)}`;

            return axios(url);
        }

        getAllPostTypesByFilter(filter) {
            let url =`${this.endpoint}/wp-json/wp/v2/search?${this.getStringFilterUrl(filter)}`;

            return axios(url);
        }

        getUserWorkingspaces() {
            let url =`${this.endpoint}/wp-json/wp/v2/users/workingspaces`;

            return axios(url);
        }

        getStringFilterUrl(filter) {
            let url = '';

            for (let key in filter) {
                if (filter.hasOwnProperty(key) && filter[key]) {
                    url+=`${key}=${filter[key]}&`;
                }
            }

            return url;
        }
    }

    return new Api(url);
}

export default Api;