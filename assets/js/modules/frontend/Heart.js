import { userHeader } from "./index";
import axios from "axios";

class Heart {
    constructor() {
        this.$itemWorkspaceContainer = $('.item.workspace');

     
        if(!this.$itemWorkspaceContainer.length) return;

        this.$itemContent = this.$itemWorkspaceContainer.find('.card-body');

        // local variable
        this.siteUrl = translation_array.site_url;

        // events
        this.events();
    }

    events() {
        this.$itemContent.on('click', '.action-container > .action-like', async (e) => {
            const user = await userHeader().getUser();

            console.log(user);

            if(!user) return;

            this.like(user).then(result => {
                console.log(result);
            })

        });
    }

    like(user) {
        const endpoint = `${this.siteUrl}/wp-json/wp/v2/workingspaces/281/like/2`;
        return axios(endpoint);
    }
}

export default Heart;