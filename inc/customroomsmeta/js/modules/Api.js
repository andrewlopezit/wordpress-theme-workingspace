import axios from 'axios';

const api = (url) => {

    class Api {
        constructor(url) {
            const postUrl = new URL(window.location.href);
            const postId = postUrl.searchParams.get("post");
            this.endpoint = `${url}/wp-json/wp/v2/workingspaces/${postId}/rooms`;
        }

        getPostsByName(name) {
            const url = `${this.endpoint}?search=${name}`;
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
