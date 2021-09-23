class Main {
    constructor() {
        // initialize elements variables
        this.$heroSectionContainer = $(document).find('.hero-section > .container');
        this.$heroTitle = this.$heroSectionContainer.find('.row > .col > .headline');
        this.$heroSubTitle = this.$heroSectionContainer.find('.row > .col > p');
        this.$formGroup = $('.form-group');

        // init local variable
        
        // init gsap animation

        // initialize events function

        // init international country code input

        // init label formgroup
        this.formGroupLabel();
    }

    formGroupLabel() {
        if(!this.$formGroup.length) return;

        const addRemoveLabelClassFill = ($el) => {
            
            if($el.hasClass('intl-tel-country-code')) return;

            const addClassIsFIllInInput = () => {
                if($el.hasClass('is-fill')) return;
    
                $el.addClass('is-fill');
            }
    
            const removeClassIsFillInInput = () => {
                if(!$el.hasClass('is-fill')) return;
    
                $el.removeClass('is-fill');
            }
    
            // change label position
            if($el.val().length) {
                addClassIsFIllInInput();
            }else {
                removeClassIsFillInInput();
            }
        }

        addRemoveLabelClassFill(this.$formGroup.find('input, select, textarea'));

        this.$formGroup.on('keyup change', 'input, select, textarea', e => {
            const $el = $(e.currentTarget);

            addRemoveLabelClassFill($el);
        });
    }
}

export default Main;