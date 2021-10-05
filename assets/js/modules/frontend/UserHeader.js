import axios from "axios";

const UserHeader = (user = null) => {

    class UserHeader {
        constructor() {
            this.$headerContainer = $('#header-container');

            if(!this.$headerContainer.length) return;

            this.$actionHeaderContainer = this.$headerContainer.find('.action-header-container');
            this.$userSettingsContainer = this.$actionHeaderContainer.find('.user-settings-container');
            this.$userBadgeContainer = this.$userSettingsContainer.find('.user-heart-badge-container');
            this.$countUserWorkingspace = this.$userBadgeContainer.find('.badge.badge-danger');
            this.$authContainer = this.$actionHeaderContainer.find('.auth-container');
            this.$displayName = this.$userSettingsContainer.find('.user-container > .user-name');
            this.$settingDisplayName = this.$userSettingsContainer.find('.user-container > .settings > .setting-user-name');
            this.$userContainer = this.$userSettingsContainer.find('.user-container');
            this.$settings = this.$userContainer.find('.settings');

            // local variable
            this.siteUrl = translation_array.site_url;

        }

        init() {
            const displayUser = (displayName) => {
                this.$authContainer.hide();
                this.$displayName.html(displayName);
                this.$settingDisplayName.html(`Hi, ${displayName}`);
                this.$userSettingsContainer.css('display', 'flex');
            }

            const logoutUser = (id) => {
                const endpoint = `${this.siteUrl}/wp-json/wp/v2/auth/logout`;
                axios(endpoint).then(results => {

                    this.$userSettingsContainer.hide();
                    this.$authContainer.show();

                    const auth2 = gapi.auth2.getAuthInstance();
                    auth2.signOut().then( () => {});
                    this.$userContainer.find('.settings > li').eq(3).removeAttr('data-user-id');
                    location.reload();

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
                this.$userContainer.find('.settings > li').eq(3).attr('data-user-id', user.ID);
                displayUser(user.display_name);

                return;
            }

            events();
        }

        setUserWorkingSpacesCount(count) {
            console.log(count);

            if(count > 0) {
                this.$userBadgeContainer.children().eq(0).attr('class', 'fas fa-heart');
                this.$countUserWorkingspace.addClass('is-display').html(count);
            }else {
                this.$userBadgeContainer.children().eq(0).attr('class', 'far fa-heart');
                this.$countUserWorkingspace.removeClass('is-display').html('');
            }
        }
    }

return new UserHeader();
} 

export default UserHeader;