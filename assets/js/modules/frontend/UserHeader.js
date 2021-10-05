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
            this.$settingDisplayName = this.$userSettingsContainer.find('.user-container > .settings > .setting-user-name');
            this.$userContainer = this.$userSettingsContainer.find('.user-container');
            this.$settings = this.$userContainer.find('.settings');

            // local variable
            this.localstorageName = 'workingspaces_user';
            this.siteUrl = translation_array.site_url;

        }

        init() {
            const setUserLocalStorage = (user) => {
                localStorage.setItem(this.localstorageName, JSON.stringify(user));
            }

            const deleteUserLocalStorage = () => {
                localStorage.removeItem(this.localstorageName);
            }

            const displayUser = (displayName) => {
                this.$authContainer.hide();
                this.$displayName.html(displayName);
                this.$settingDisplayName.html(`Hi, ${displayName}`);
                this.$userSettingsContainer.css('display', 'flex');
            }

            const logoutUser = (id) => {
                const endpoint = `${this.siteUrl}/wp-json/wp/v2/auth/logout?user_id=${id}`;
                axios(endpoint).then(results => {
                    deleteUserLocalStorage();

                    this.$userSettingsContainer.hide();
                    this.$authContainer.show();

                    const auth2 = gapi.auth2.getAuthInstance();
                    auth2.signOut().then( () => {});
                    this.$userContainer.find('.settings > li').eq(3).removeAttr('data-user-id');

                }).catch(() =>{});
            }

            const events = () => {
                this.$userContainer.on('click', e => {
                    const $el = $(e.currentTarget);
                    const $iconChevronSettings = $el.find('.settings-chevron');

                    if($iconChevronSettings.hasClass('fa-chevron-down')) {
                        $iconChevronSettings.attr('class','fas fa-chevron-up settings-chevron');
                        this.$settings.show();
                    } else {
                        $iconChevronSettings.attr('class','fas fa-chevron-down settings-chevron');
                        this.$settings.hide();
                    }
                });

                this.$userContainer.on('click', '.settings > li > .logout', e => {
                    e.preventDefault();
                    const userId = $(e.currentTarget).parent().data('user-id');
                    logoutUser(userId);
                });
            }

            if(user) {
                setUserLocalStorage(user);
                this.$userContainer.find('.settings > li').eq(3).attr('data-user-id', user.ID);
                displayUser(user.display_name);

                return;
            }

            events();
        }

        getUser() {
            const user = JSON.parse(localStorage.getItem(this.localstorageName));

            if(!user) return null;

            const { x_wp_nonce } = user;

            const endpoint = `${this.siteUrl}/wp-json/wp/v2/auth/checknonce?nonce=${x_wp_nonce}`;
            
            axios(endpoint).then(results => {
                const {data: isNonceValid} = results;

                if(!isNonceValid) {
                    return Promise.reject(null);
                }

                return Promise.resolve(user);


            }).catch(() => {});

            return user;
        }
    }

return new UserHeader();
} 

export default UserHeader;