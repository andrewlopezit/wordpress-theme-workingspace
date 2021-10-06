const FormValidation = ($inputs) => {

    if(!$inputs) return;

    class FormValidation {
        constructor () {
            // init local variable
            this.primaryColor = getComputedStyle(document.documentElement)
            .getPropertyValue('--primary-color');
        }

        validate() {
            const isInputValid = ($input) => {
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

            const formValidations = [];

            $inputs.each( (i , e)=> {
                const $el = $(e);

                const isValid = isInputValid($el);

                if(!isValid) {
                    $el.css('--border-color', '#dc3545');
                    formValidations.push(false);
                } else {
                    $el.css('--border-color', this.primaryColor);
                    formValidations.push(true);
                }
            });

            return formValidations.every(input => input === true);
        }

        getFormData() {
            let obj = {};
    
            $inputs.each((i, el) => {
                obj[$(el).attr('name')] = $(el).val();
            });
    
            return obj;
        }
    }

    return new FormValidation($inputs);
}

export default FormValidation;