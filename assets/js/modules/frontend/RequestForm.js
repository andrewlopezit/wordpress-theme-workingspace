import intlTelInput from 'intl-tel-input';
import intlTelInputUtils from './intl-tel-input/utils.js'

class RequestForm {

    constructor() {
        // initialize elements variables
        this.$requestForm = $('.request-form#request-form');

        if(!this.$requestForm.length) return;

        this.$formGroup = this.$requestForm.find('.form-group');
        this.$inputDatePicker = this.$formGroup.find('.date-picker');

        // init local variable
        this.assetsDir = translation_array.assets_dir;
        this.primaryColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--primary-color');

        //init input datepicker
        this.initDatePicker();
        
        // init gsap animation

        // initialize events function
        this.events();

        // init international country code input
        this.initIntlTelCountryCodeInput();
    }

    events() {
        this.$formGroup.on('keyup change', 'input, select', e => {
            const $el = $(e.currentTarget);
            
            if($el.hasClass('intl-tel-country-code')) return;

            const addClassIsFIllInInput = () => {
                if($el.hasClass('is-fill')) return;

                $el.addClass('is-fill');
            }

            const removeClassIsFillInInput = () => {
                if(!$el.hasClass('is-fill')) return;

                $el.removeClass('is-fill');
            }


            if($el.val().length) {
                addClassIsFIllInInput();
            }else {
                removeClassIsFillInInput();
            }
        });
    }

    initDatePicker() {
        if(!this.$inputDatePicker.length) return;

        const dateToday = new Date();
        
        this.$inputDatePicker.datepicker({
            minDate: dateToday,
        });
    }

    initIntlTelCountryCodeInput() {
        const $inputTel = $('.intl-tel-country-code');
        const input =$inputTel.get()[0];

        if(!$inputTel.length) return;

        const iti = intlTelInput(input, {
            initialCountry: "auto",
            customPlaceholder: (selectedCountryPlaceholder, selectedCountryData) => {
                const $label = $(input)
                    .parent()
                    .siblings('label');

                if(!$label.hasClass('has-tel-label')) $label.addClass('has-tel-label');

                $label.html(`e.g. ${selectedCountryPlaceholder}`);

                return '';
            },
            geoIpLookup: function(callback) {
                $.get('https://ipinfo.io/?token=dd681f7a626544', function() {}, "jsonp").always(function(resp) {
                const countryCode = (resp && resp.country) ? resp.country : "us";
                callback(countryCode);
                });
            },
            utilsScript: intlTelInputUtils,
        });

        //events
        input.addEventListener("countrychange", e => {
            const countryData = iti.getSelectedCountryData();

            iti.setCountry(countryData.iso2);
            validatedTelNumber(e.currentTarget);

        });
        $(input).on('keyup', e => {

            if(isNaN(e.currentTarget.value)){
                $(input).val(e.currentTarget.value.replace(/[a-zA-Z]/g, ''));                
            }

            const $label = $(input)
                    .parent()
                    .siblings('label');

            if($(e.currentTarget).val().length && !$label.hasClass('is-active')) $label.addClass('is-active');
            if(!$(e.currentTarget).val().length) $label.removeClass('is-active');
            
            validatedTelNumber(e.currentTarget);
            
        });


        const validatedTelNumber = (el) => {

            if(!iti.isValidNumber()) {
                $(el).removeAttr('style');
            }

            if(iti.isValidNumber()) {
                $(el).css('border-color', this.primaryColor);
            }
        }
    }
}

export default RequestForm;