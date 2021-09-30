import { formValidation, userHeader } from './index';
import axios from 'axios';
class Auth {
    constructor() {
        // initialize elements variables
        this.$headerActionContainer = $('.action-header-container');

        if(!this.$headerActionContainer.length) return;

        this.$modalAuthContainer = $('#auth-modal');
        this.$errorMessage = this.$modalAuthContainer.find('.error-message#auth-error-message');
        this.$loginFormContainer = this.$modalAuthContainer.find('form#login-auth-form');
        this.$btnLogin = this.$loginFormContainer.find('.button-container > .btn.login');
        this.$btnSignInGoogle = $('#google-signin');

        // init local variable
        this.loginForm;
        this.siteUrl = translation_array.site_url;
        this.googleClientId = translation_array.google_client_id;
         
        // init gsap animation

        // init login form
        this.initLoginForm();

        // initialize events function
        this.events();

        // init google auth
        this.googleAuth();
    }

    initLoginForm() {
        if(!this.$loginFormContainer.length) return;

        this.loginForm = {
            isValid: false,
            inputs: this.$loginFormContainer.find('input, textarea, select'),
        }
    }

    events() {
        this.$headerActionContainer.on('click', '.login', e => {
            e.preventDefault();

            this.$modalAuthContainer.show();
        });

        // login
        this.$btnLogin.on('click', e => {
            e.preventDefault();

            if(!this.loginForm.isValid) return;

            const loginFormData = formValidation(this.loginForm.inputs).getFormData();
            this.$btnLogin.attr('disabled', true);
            this.$btnLogin.html('Logging in...');
            this.$errorMessage.hide();

            this.login(loginFormData).then(results => {
                const {data : user} = results;

                userHeader(user).init();
                this.$btnLogin.html('Login');
                this.clearLoginInputs();
                this.$modalAuthContainer.hide();

            }).catch(() => {
                this.$errorMessage.show().html(`
                    <strong>Error</strong>: The username <strong>${loginFormData.username}</strong> is not registered on this site.
                    If you are unsure of your username, try your email address instead.
                `)
                this.$btnLogin.html('Login');
                this.$btnLogin.attr('disabled', false);
            });

        });

        // create account
        this.$loginFormContainer.on('click', '.button-container > .create-account', e => {
            e.preventDefault();
            
            console.log(e);
        });

        // sign-in as google

        this.loginForm.inputs.on('keyup', e => {
            const isFormValid = formValidation(this.loginForm.inputs).validate();
            this.loginForm.isValid = isFormValid;

            if(!isFormValid) {
                this.$btnLogin.attr('disabled', true);
                return;
            }

            this.$btnLogin.attr('disabled', false);
        });
    }

    login(data) {
        if(!data) return;

        const url = `${this.siteUrl}/wp-json/wp/v2/auth/login`;
        return axios.post(url, data);
    }

    clearLoginInputs() {
        this.loginForm.inputs.each((i, el) => {
            $(el).val(undefined);
            $(el).removeClass('is-fill');
        });

        formValidation(this.loginForm.inputs).validate();
        this.loginForm.inputValidations = [];
        this.loginForm.isValid = false;
        this.$btnLogin.attr('disabled', true);
    }

    googleAuth() {
        const googleApi = gapi.load('auth2', () => {
            // Retrieve the singleton for the GoogleAuth library and set up the client.
            const auth2 = gapi.auth2.init({
                client_id: this.googleClientId,
                cookiepolicy: 'single_host_origin',
                // Request scopes in addition to 'profile' and 'email'
                //scope: 'additional_scope'
            });

            const attachSignin = ($element) => {
                $element.find('.abcRioButtonContents').children().eq(0).html('Sign in with google');
                $element.find('.abcRioButtonContents').children().eq(1).html('Sign in with google');
            }

            const onAuthSuccess = (googleUser) => {
                if(!googleUser) return;

                const token = googleUser.getAuthResponse().id_token;
                const endpoint = `${this.siteUrl}/wp-json/wp/v2/auth/google?token=${token}`;

                axios(endpoint).then( results => {
                    const {data: user} = results;
                    
                    if(!user) return;

                    userHeader(user).init();
                    this.$modalAuthContainer.hide();
                }).catch(() => {})
            }

            gapi.signin2.render('google-signin', {
                'scope': 'profile email',
                'theme': 'dark',
                'onsuccess': (googleUser) => onAuthSuccess(googleUser),
                'onfailure': (googleUser) => { console.log(googleUser)}
            });

           

            attachSignin(this.$btnSignInGoogle);
        });


    }
}

export default Auth;