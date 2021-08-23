import gsap from 'gsap';

const Loading = ($loadingContainer) => {
    class Loading {

        start() {
            if(!$loadingContainer) return;

            $loadingContainer.children().remove();

            $loadingContainer.append(`
            <div class="loading" id="loading">
                <p>Loading</p>
                <div class="loading-bar"></div>
                <span></span>
                <span></span>
                <span></span>
            </div>`);

            this.isDisplayMessage = false;
            this.$loading = $loadingContainer.find('.loading#loading');

            this.initAnimation();

            return this;
        }

        initAnimation() {
            this.dotsAnimation = gsap.timeline({ repeat: -1})
            this.dotsAnimation.to($loadingContainer.find('span'), {opacity: 1, stagger: {amount: 2}});

            this.loadingbarAnimation = gsap.timeline({ onComplete: () => this.displayError()});
            this.loadingbarAnimation.to($loadingContainer.find('.loading-bar'), {width: 70, duration: 30})
            .add('end');
        }

        end() {
            this.$loading.remove();
        }

        displayError(message = 'Takes too long to respond, please try again.') {
            if(this.isDisplayMessage) return;

            this.isDisplayMessage = true;
            this.loadingbarAnimation.tweenFromTo('end');
            this.dotsAnimation.kill();

            this.$loading.append(`<p class="error-message">${message}</p>
            <button class="btn retry">Retry</button>`);
        }

        event() {

        }

    }

    return new Loading($loadingContainer);
}

export default Loading;