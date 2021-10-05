import axios from "axios";

class Heart {
    constructor() {
        this.$itemWorkspaceContainer = $('.item.workspace');

     
        if(!this.$itemWorkspaceContainer.length) return;

        this.$itemContent = this.$itemWorkspaceContainer.find('.card-body');
        this.$selectedHeartContainer;

        // local variable
        this.siteUrl = translation_array.site_url;

        // events
        this.events();

        // animation
    }

    events() {
        this.$itemContent.on('click', '.action-container > .action-like', e => {
            const $el = $(e.currentTarget);
            const workingspaceId = $el.parent().parent().parent().data('id');
            this.$selectedHeartContainer = $el;
            this.initLoadingAnimHeartContainer();

            if($el.find('i').hasClass('is-added')) {
                this.disLike(workingspaceId).then(result => {
                    const {data: workingspaces} = result;
    
                    this.heartAnimation.repeat(0);
                    this.initLikeAnimation();
                    console.log(workingspaces);
                    
                }).catch(() => {
    
                });

            }else {
                this.like(workingspaceId).then(result => {
                    const {data: workingspaces} = result;
    
                    this.heartAnimation.repeat(0);
                    this.initLikeAnimation();
                    console.log(workingspaces);
                    
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