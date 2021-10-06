class Page {
    constructor() {
        this.$heroBackground = $('.image-hero-background');

        // Blur background
        this.initHeroBlurBacgkround();
    }

    initHeroBlurBacgkround() {
        if(!this.$heroBackground.length && !this.$heroBackground.data('blur-position')) return;

        const blurHeaderHeroBackgroundByScrollPosition = (positionY) => {
            if(positionY <= $(window).height()) {
                this.$heroBackground.addClass('has-blur-background');
            }else {
                this.$heroBackground.removeClass('has-blur-background');
            }
        }

        const blurFooterHeroBackgroundByScrollPosition = (positionY) => {
            if(positionY >= (document.documentElement.scrollHeight /2)) {
                this.$heroBackground.addClass('has-blur-background');
            }else {
                this.$heroBackground.removeClass('has-blur-background');
            }
        }

        if(this.$heroBackground.data('blur-position') && 
            this.$heroBackground.data('blur-position') === 'header') blurHeaderHeroBackgroundByScrollPosition(window.scrollY);

        if(this.$heroBackground.data('blur-position') && 
            this.$heroBackground.data('blur-position') === 'footer') blurFooterHeroBackgroundByScrollPosition(window.scrollY);


        $(document).on('scroll', () => {
            if(this.$heroBackground.data('blur-position').includes('header')) {
                blurHeaderHeroBackgroundByScrollPosition(window.scrollY);
            }

            if(this.$heroBackground.data('blur-position').includes('footer')) {
                blurFooterHeroBackgroundByScrollPosition(window.scrollY);
            }
        })
    }
}

export default Page;