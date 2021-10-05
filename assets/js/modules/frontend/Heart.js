import axios from "axios";
import { userHeader } from "./index";

class Heart {
    constructor() {
        this.$itemWorkspaceContainer = $('#workingspaces');

     
        if(!this.$itemWorkspaceContainer.length) return;

        this.$selectedHeartContainer;

        // local variable
        this.siteUrl = translation_array.site_url;

        // events
        this.events();
    }

    events() {
        this.$itemWorkspaceContainer.on('click', '.item.workspace > .card-body > .action-container > .action-like', e => {
            const $el = $(e.currentTarget);
            const workingspaceId = $el.parent().parent().parent().data('id');
            this.$selectedHeartContainer = $el;
            this.initLoadingAnimHeartContainer();

            if($el.find('i').hasClass('is-added')) {
                this.disLike(workingspaceId).then(result => {
                    const {data: workingspaces} = result;
    
                    this.heartAnimation.repeat(0);
                    this.initLikeAnimation();
                    userHeader().setUserWorkingSpacesCount(workingspaces.length);
                    
                }).catch(() => {
    
                });

            }else {
                this.like(workingspaceId).then(result => {
                    const {data: workingspaces} = result;
    
                    this.heartAnimation.repeat(0);
                    this.initLikeAnimation();
                    userHeader().setUserWorkingSpacesCount(workingspaces.length);
                    
                }).catch(() => {
    
                });
            }

        });
    }

    initLoadingAnimHeartContainer() {
        const $heart = this.$selectedHeartContainer.find('i');
        $heart.removeAttr('style');

        this.heartAnimation = gsap.timeline({repeat: -1 });
        
        this.heartAnimation.to($heart, {scale: 1.5});
    }

    initLikeAnimation() {
        const $heart = this.$selectedHeartContainer.find('i');
        $heart.removeAttr('style');

        this.heartAnimation = gsap.timeline({
            onComplete: () => {
                if($heart.hasClass('is-added')) {
                    $heart.attr('class','far fa-heart');
                }else {
                    $heart.attr('class', 'fas fa-heart is-added');
                }
            }
        });
        
        this.heartAnimation.to($heart, {scale: 2})
                             .to($heart, {scale: 1, ease: 'bounce'});
    }

    like(workingspaceId) {
        const endpoint = `${this.siteUrl}/wp-json/wp/v2/users/add/workingspace/${workingspaceId}`;
        return axios(endpoint);
    }

    disLike(workingspaceId) {
        const endpoint = `${this.siteUrl}/wp-json/wp/v2/users/remove/workingspace/${workingspaceId}`;
        return axios(endpoint);
    }
}

export default Heart;