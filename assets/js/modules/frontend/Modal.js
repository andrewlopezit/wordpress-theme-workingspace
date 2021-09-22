class Modal {
    constructor() {
        this.$modal = $('.modal');

        if(!this.$modal.length) return;

        // initialize elements variables

        // init local variable
        
        // init gsap animation

        // initialize events function
        this.events();

        // init international country code input
    }

    events() {
        this.$modal.on('click', '.modal-dialog .modal-header button', () => {
            this.$modal.hide();
        });

        this.$modal.on('click', e => {
            const $el = $(e.target);

            if(!$el.hasClass('modal') && 
                $el.attr('role') !== 'dialog') return;

            this.$modal.hide();
        });

        $(window).on('keyup', e => {
            if(!e.key) return;

            switch(e.key.toLowerCase()) {
                case 'escape': {

                    this.$modal.hide();
                    break;
                }
            }
        });
    }
}

export default Modal;