class Auth {
    constructor() {
        // initialize elements variables
        this.$headerActionContainer = $('.action-header-container');

        if(!this.$headerActionContainer.length) return;

        // init local variable
         
        // init gsap animation
 
        // initialize events function
        this.events();
 
        // init international country code input
 
        // init label formgroup
    }

    events() {
        this.$headerActionContainer.on('click', 'a', e => {
            e.preventDefault();
            
            const $el = $(e.currentTarget);
        });
    }
}

export default Auth;