import axios from 'axios';

const api = (url) => {

    class Api {
        constructor(url) {
            this.endpoint = url;
        }

        getPostsByName(name) {
            const url = `${this.endpoint}?search=${name}`;
            return axios(url);
        }

        getPostsByIds(ids) {
            const url = `${this.endpoint}?ids=${ids}`;
            return axios(url);
        }

        getPostById(id) {
            const url = `${this.endpoint}/${id}`;
            return axios(url);
        }
        
    }


    return new Api(url);
}

export default api;
