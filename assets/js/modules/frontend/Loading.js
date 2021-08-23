import gsap from 'gsap';

const loading = ($loading) => {
    class Loading {
        constructor() {

            this.init();
        }

        init() {
            
            $loading.addClass('is-loading');
        }

        initAnimation() {
            this.dotsAnimation = gsap.timeline({ repeat: -1})
            this.dotsAnimation.to($loading.find('span'), {opacity: 0, stagger: {amount: 2}})
        }

        event() {

        }

        get progressbarStyle() {
            return {
            position: 'absolute',
            width: '70px',
            height: '2px',
            marginTop: '-3px',
            marginLeft: '2em',
            backgroundColor: getComputedStyle(document.documentElement)
                              .getPropertyValue('--primary-color')
            }
        }
    }

    return new Loading();
}

export default loading;