import intlTelInput from 'intl-tel-input';
import intlTelInputUtils from './intl-tel-input/utils.js';
import { formValidation } from './index.js';
import axios from 'axios';

class RequestForm {

    constructor() {
        // initialize elements variables
        this.$requestForm = $('.request-form#request-form');

        if(!this.$requestForm.length) return;

        this.$formGroup = this.$requestForm.find('.form-group');
        this.$inputDatePicker = this.$formGroup.find('.date-picker');
        this.$formButton = this.$requestForm.find('.form-btn');
        this.$loadingBar = this.$requestForm.find('.loading-bar');
        this.$alertBox = this.$requestForm.find('.alert-box');

        // init local variable
        this.assetsDir = translation_array.assets_dir;
        this.siteUrl = translation_array.site_url;
        axios.defaults.headers.common["X-WP-Nonce"] = translation_array.workingspaces_nonce

        this.primaryColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--primary-color');
        this.requestForm;

        //init input datepicker
        this.initDatePicker();
        
        // init gsap animation
        this.initAnimation();

        this.initRequestForm();

        // initialize events function
        this.events();


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

    initAnimation() {
        this.loadingBarAnimation = gsap.timeline({paused: true});
        this.alertBoxAnimation = gsap.timeline({paused: true,
                onComplete: () => gsap.delayedCall( 20, () => {
                    this.alertBoxAnimation.reverse();
                    this.$alertBox.removeClass('alert-success alert-danger');
                }), 
            });

        this.loadingBarAnimation.to(this.$loadingBar, {width: '99%', duration: 2});
        this.alertBoxAnimation
        .to(this.$alertBox, {display: 'initial'})
        .to(this.$alertBox, { x: 0, opacity: 1, duration: 1, ease: 'back'});

    }

    events() {
        this.requestForm.inputs.on('keyup change', e => {
            this.validateForm();
        });

        this.$formButton.on('click', e => {
            e.preventDefault();
            
            if(!this.requestForm.isValid) return;

            const requestFormData = formValidation(this.requestForm.inputs).getFormData();

            this.$formButton.html('submitting');
            this.loadingBarAnimation.play();
            this.$formButton.attr('disabled', true);

            this.submitForm(requestFormData).then(result => {
                this.clearInputs();
                this.loadingBarAnimation.to(this.$loadingBar,{width: '100%'}).play();
                this.$alertBox.addClass('alert-success').html(`<strong>Well done!</strong> Successfully sent.`);

                this.$formButton.html('Send inquiry');

                this.alertBoxAnimation.play();
            }).catch(() => {
                this.$formButton.attr('disabled', false);
                this.$alertBox.addClass('alert-danger').html(`<strong>Well done!</strong> Oh snap! Change a few things up and try submitting again.`);

                this.alertBoxAnimation.play();
            });
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
            this.validateForm();
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
            this.validateForm();
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

    clearInputs() {
        this.requestForm.inputs.each((i, el) => {
            $(el).val(undefined);
        });

        this.requestForm.inputValidations = [];
        this.requestForm.isValid = false;
        this.$formButton.attr('disabled', true);
    }

    validateForm() {
        const isFormValid = formValidation(this.requestForm.inputs).validate();
        this.requestForm.isValid = isFormValid;

        if(!isFormValid) {
            this.$formButton.attr('disabled', true);
            return;
        }

        this.$formButton.attr('disabled', false);
    }

    submitForm(data) {
        if(!data) return;

        const url = `${this.siteUrl}/wp-json/wp/v2/inquiries`;
        return axios.post(url, data);
    }
}

export default RequestForm;