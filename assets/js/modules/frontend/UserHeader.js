import axios from "axios";

const UserHeader = (user = null) => {

    class UserHeader {
        constructor() {
            this.$headerContainer = $('#header-container');

            if(!this.$headerContainer.length) return;

            this.$actionHeaderContainer = this.$headerContainer.find('.action-header-container');
            this.$userSettingsContainer = this.$actionHeaderContainer.find('.user-settings-container');
            this.$authContainer = this.$actionHeaderContainer.find('.auth-container');
            this.$displayName = this.$userSettingsContainer.find('.user-container > .user-name');
            this.$userContainer = this.$userSettingsContainer.find('.user-container');

            // local variable
            this.localstorageName = 'workingspaces_user';
            this.siteUrl = translation_array.site_url;
        }

        init() {
            const setUserLocalStorage = (user) => {
                localStorage.setItem(this.localstorageName, JSON.stringify(user));
            }

            const getUserLocalStorage = () => {
                return JSON.parse(localStorage.getItem(this.localstorageName));
            }

            const deleteUserLocalStorage = () => {
                localStorage.removeItem(this.localstorageName);
            }

            const displayUser = (displayName) => {
                this.$authContainer.hide();
                this.$displayName.html(displayName);
                this.$userSettingsContainer.css('display', 'flex');
            }

            const events = () => {
                
                this.$userContainer.on('click', e => {
                    const $el = $(e.currentTarget);
                    const $iconChevronSettings = $el.find('.settings-chevron');

                    if($iconChevronSettings.hasClass('fa-chevron-down')) {
                        $iconChevronSettings.attr('class','fas fa-chevron-up settings-chevron');
                        this.userSettingsAnim.play();
                    } else {
                        $iconChevronSettings.attr('class','fas fa-chevron-down settings-chevron');
                        this.userSettingsAnim.reverse();
                    }
                });

                this.$userContainer.on('click', '.settings > li > .logout', e => {
                    e.preventDefault();
                    deleteUserLocalStorage();

                    this.$userSettingsContainer.hide();
                    this.$authContainer.show();

                    const auth2 = gapi.auth2.getAuthInstance();
                    auth2.signOut().then( () => {});
                });
            }

            const animation = () => {
                const $settings = this.$userContainer.find('.settings');

                $settings.removeAttr('style');

                this.userSettingsAnim = gsap.timeline({paused: true});
                this.userSettingsAnim.to($settings, { display: 'initial', duration: 0.2})
                                     .to($settings, { opacity: 1, y: 0, duration: 0.2});
            }

            if(user) {
                setUserLocalStorage(user);
                displayUser(user.display_name);

                events();
                animation();
                return;
            }

            const userLocalStorage = getUserLocalStorage();

            if(!userLocalStorage) return;

            const endpoint = `${this.siteUrl}/wp-json/wp/v2/auth/checknonce?nonce=${userLocalStorage.x_wp_nonce}`;

            axios(endpoint).then(results => {
                const {data: isNonceValid} = results;

                if(isNonceValid) {
                    displayUser(userLocalStorage?.display_name);

                    events();
                    animation();

                    return;
                }

                return;

            }).then(() => {
                return;
            })
        }
    }

return new UserHeader();
} 

export default UserHeader;