import { formValidation, userHeader } from './index';
import axios from 'axios';
class Auth {
    constructor() {
        // initialize elements variables
        this.$headerActionContainer = $('.action-header-container');

        if(!this.$headerActionContainer.length) return;

        this.$modalAuthContainer = $('#auth-modal');
        this.$registerContainer = this.$modalAuthContainer.find('.register-container');
        this.$loginContainer = this.$modalAuthContainer.find('.login-container');
        this.$loginErrorMessage = this.$modalAuthContainer.find('#auth-error-message');
        this.$registerErrorMessage = this.$modalAuthContainer.find('#register-error-message');
        this.$loginFormContainer = this.$loginContainer.find('form#login-auth-form');
        this.$registerFormContainer = this.$registerContainer.find('form#register-auth-form');

        this.$btnLogin = this.$loginFormContainer.find('.button-container > .btn.login');
        this.$btnRegister = this.$registerFormContainer.find('.btn.create-account');
        this.$btnSignInGoogle = $('#google-signin');

        // init local variable
        this.loginForm;
        this.registerForm;
        this.siteUrl = translation_array.site_url;
        this.googleClientId = translation_array.google_client_id;
         
        // init gsap animation

        // init login form
        this.initLoginForm();

        // init register form
        this.initRegisterForm();

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

    initRegisterForm() {
        if(!this.$registerFormContainer.length) return;

        this.registerForm = {
            isValid: false,
            inputs: this.$registerFormContainer.find('input, textarea, select'),
        }
    }

    events() {
        this.$headerActionContainer.on('click', '.login', e => {
            e.preventDefault();

            this.$modalAuthContainer.show();
            this.$registerContainer.hide();
            this.$loginContainer.show();
        });

        this.$headerActionContainer.on('click', '.sign-up', e => {
            e.preventDefault();

            this.$modalAuthContainer.show();
            this.$loginContainer.hide();
            this.$registerContainer.show();
        });

        // login
        this.$btnLogin.on('click', e => {
            e.preventDefault();

            if(!this.loginForm.isValid) return;

            const loginFormData = formValidation(this.loginForm.inputs).getFormData();
            this.$btnLogin.attr('disabled', true);
            this.$btnLogin.html('Logging in...');
            this.$loginErrorMessage.hide();

            this.login(loginFormData).then(results => {
                const {data : user} = results;

                userHeader(user).init();
                this.$btnLogin.html('Login');
                this.clearLoginInputs();
                this.$modalAuthContainer.hide();

            }).catch(() => {
                this.$loginErrorMessage.show().html(`
                    <strong>Error</strong>: The username <strong>${loginFormData.username}</strong> is not registered on this site.
                    If you are unsure of your username, try your email address instead.
                `)
                this.$btnLogin.html('Login');
                this.$btnLogin.attr('disabled', false);
            });

        });

        // register 
        this.$btnRegister.on('click', e => {
            e.preventDefault();

            if(!this.registerForm.isValid) return;

            const registerFormData = formValidation(this.registerForm.inputs).getFormData();
            this.$btnRegister.attr('disabled', true);
            this.$btnRegister.html('Signing up...');
            this.$registerErrorMessage.hide();

            this.register(registerFormData).then(results => {
                const {data : user} = results;

                userHeader(user).init();
                this.$modalAuthContainer.hide();
                this.clearRegisterInputs();
                this.$btnRegister.html('Sign up');

            }).catch( e => {
                const {response: {status}} = e;

                let message;

                switch(status) {
                    case 409: {
                        message = `<strong>Error</strong>: <strong>${registerFormData.email}</strong> is already exist, find other email.`
                        break
                    }

                    default: {
                        message = `<strong>Error</strong>: Some fields are not match of our end.`;
                        break;
                    }
                }

                this.$registerErrorMessage.show().html(message)
                this.$btnRegister.html('Sign up');
                this.$btnRegister.attr('disabled', false); 
            });
        });

        // create account
        this.$loginFormContainer.on('click', '.button-container > .create-account', e => {
            e.preventDefault();

            this.$loginContainer.hide();
            this.$registerContainer.show();
        });

        // input login form
        this.loginForm.inputs.on('keyup', e => {
            const isFormValid = formValidation(this.loginForm.inputs).validate();
            this.loginForm.isValid = isFormValid;

            if(!isFormValid) {
                this.$btnLogin.attr('disabled', true);
                return;
            }

            this.$btnLogin.attr('disabled', false);
        });

        // input register form
        this.registerForm.inputs.on('keyup', e => {
            const isFormValid = formValidation(this.registerForm.inputs).validate();
            this.registerForm.isValid = isFormValid;

            if(!isFormValid) {
                this.$btnRegister.attr('disabled', true);
                return;
            }

            this.$btnRegister.attr('disabled', false);
        });
    }

    login(data) {
        if(!data) return;

        const url = `${this.siteUrl}/wp-json/wp/v2/auth/login`;
        return axios.post(url, data);
    }

    register(data) {
        if(!data) return;

        const url = `${this.siteUrl}/wp-json/wp/v2/auth/register`;
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

    clearRegisterInputs() {
        this.registerForm.inputs.each((i, el) => {
            $(el).val(undefined);
            $(el).removeClass('is-fill');
        });

        formValidation(this.registerForm.inputs).validate();
        this.registerForm.inputValidations = [];
        this.registerForm.isValid = false;
        this.$btnRegister.attr('disabled', true);
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
                const endpoint = `${this.siteUrl}/wp-json/wp/v2/auth/google`;
                this.$modalAuthContainer.hide();

                axios.post(endpoint, {token:token}).then( results => {
                    const {data: user} = results;
                    
                    if(!user) return;

                    userHeader(user).init();
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