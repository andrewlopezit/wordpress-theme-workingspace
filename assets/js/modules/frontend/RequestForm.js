import intlTelInput from 'intl-tel-input';
import intlTelInputUtils from './intl-tel-input/utils.js'

class RequestForm {

    constructor() {
        // initialize elements variables
        // init local variable
        this.assetsDir = translation_array.assets_dir;
        
        // init gsap animation

        // initialize events function

        // init international country code input
        this.initIntlTelCountryCodeInput();
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
                $(el).css('border-color', '#dc3545');
            }

            if(iti.isValidNumber()) {
                $(el).removeAttr('style');
            }
        }
    }
}

export default RequestForm;