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

            const displayUser = (displayName) => {
                this.$authContainer.hide();
                this.$displayName.html(displayName);
                this.$userSettingsContainer.css('display', 'flex');
            }

            if(user) {
                setUserLocalStorage(user);
                displayUser(user.display_name);
                return;
            }

            const userLocalStorage = getUserLocalStorage();

            if(!userLocalStorage) return;

            const endpoint = `${this.siteUrl}/wp-json/wp/v2/auth/checknonce?nonce=${userLocalStorage.x_wp_nonce}`;

            axios(endpoint).then(results => {
                const {data: isNonceValid} = results;

                if(isNonceValid) {
                    displayUser(userLocalStorage?.display_name);
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