import intlTelInput from 'intl-tel-input';
import intlTelInputUtils from './intl-tel-input/utils.js'

class RequestForm {

    constructor() {
        // initialize elements variables
        this.$requestForm = $('.request-form#request-form');

        if(!this.$requestForm.length) return;

        this.$formGroup = this.$requestForm.find('.form-group');
        this.$inputDatePicker = this.$formGroup.find('.date-picker');
        this.$formButton = this.$requestForm.find('.form-btn');


        // init local variable
        this.assetsDir = translation_array.assets_dir;
        this.primaryColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--primary-color');
        this.requestForm;

        //init input datepicker
        this.initDatePicker();
        
        // init gsap animation

        // initialize events function
        this.events();

        this.initRequestForm();

        // init international country code input
        this.initIntlTelCountryCodeInput();
    }

    initRequestForm() {
        this.requestForm = {
            isValid: false,
            inputs: this.$requestForm.find('input, textarea, select'),
            inputValidations: []
        };

        this.$formButton.attr('disabled', true);
    }

    events() {
        this.$formGroup.on('keyup change', 'input, select, textarea', e => {
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

            // change label position
            if($el.val().length) {
                addClassIsFIllInInput();
            }else {
                removeClassIsFillInInput();
            }

            // validate form
            const isValid = this.isInputValid($el);
            if(!isValid) {
                $el.css('--border-color', '#dc3545');
                return;
            }

            $el.css('--border-color', this.primaryColor);
            this.checkRequestForm();
        });
    }

    isInputValid ($input) {
        const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(($input.attr('required') && !$input.val().length) ||
        ($input.attr('minlength') && $input.val().length < +$input.attr('minlength')) ||
        ($input.attr('maxlength') && $input.val().length > +$input.attr('maxlength')) ||
        ($input.attr('type') === 'email' && !emailPattern.test($input.val())) ||
        ($input.attr('type') === 'tel' && !$input.hasClass('is-valid'))) {
            return false;
        }

        return true;
    }

     checkRequestForm() {
        this.requestForm.inputValidations = [];

        this.requestForm.inputs.each((i, el) => {
            this.requestForm.inputValidations.push(this.isInputValid($(el)));
        });

        const isFormValid = this.requestForm.inputValidations.every(input => input === true);
        this.requestForm.isValid = isFormValid;
        this.$formButton.attr('disabled', !isFormValid);
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
            this.checkRequestForm();

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
                $(el).removeClass('is-valid');
            }

            if(iti.isValidNumber()) {
                $(el).addClass('is-valid');
            }
        }
    }
}

export default RequestForm;