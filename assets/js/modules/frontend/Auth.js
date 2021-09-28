import { formValidation } from './index';
class Auth {
    constructor() {
        // initialize elements variables
        this.$headerActionContainer = $('.action-header-container');

        if(!this.$headerActionContainer.length) return;

        this.$modalAuthContainer = $('#auth-modal');
        this.$loginFormContainer = this.$modalAuthContainer.find('form#login-auth-form');
        this.$btnLogin = this.$loginFormContainer.find('.button-container > .btn.login');

        // init local variable
        this.loginForm;
         
        // init gsap animation

        // init login form
        this.initLoginForm();

        // initialize events function
        this.events();
    }

    initLoginForm() {
        if(!this.$loginFormContainer.length) return;

        this.loginForm = {
            isValid: false,
            inputs: this.$loginFormContainer.find('input, textarea, select'),
        }
    }

    events() {
        this.$headerActionContainer.on('click', 'a', e => {
            e.preventDefault();

            this.$modalAuthContainer.show();
        });

        // login
        this.$btnLogin.on('click', e => {
            e.preventDefault();
            
            console.log(e);
        });

        // create account
        this.$loginFormContainer.on('click', '.button-container > .create-account', e => {
            e.preventDefault();
            
            console.log(e);
        });

        this.loginForm.inputs.on('keyup', e => {
            const isFormValid = formValidation(this.loginForm.inputs).validate();

            console.log(isFormValid);

            if(!isFormValid) {
                this.$btnLogin.attr('disabled', true);
                return;
            }

            this.$btnLogin.attr('disabled', false);
        });
    }
}

export default Auth;