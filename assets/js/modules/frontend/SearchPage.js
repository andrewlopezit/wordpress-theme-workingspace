import {api} from './index';

class SearchPage {
    constructor() {
        // initialize elements variables
        this.$searchPage = $('#search-page');

        if(!this.$searchPage.length) return;

        this.$searchContainer = this.$searchPage.find('.search-container');
        this.$searchActionContainer = this.$searchContainer.find('.action-container');
        this.$labelSearchActionContainer = this.$searchContainer.find('.form-group > label.search');
        this.$locationActionContainer = this.$searchContainer.find('.location');
        this.$searchResultsContainer = this.$searchPage.find('.search-results-container');
        this.$searchResultsWorkingspaceContainer = this.$searchResultsContainer.find('.workingspaces-container > .workspace-list#workingspaces');
        this.$searchResultsPostContainer = this.$searchResultsContainer.find('.posts-container > .post-list#posts > .inner-container.posts');
        this.$searchResultsRoomContainer = this.$searchResultsContainer.find('.rooms-container > .workspace-list#workingspaces');

        this.$searchInput = this.$searchContainer.find('.form-group > .search');

        this.selectedFilterPostType;
        this.searchTimer;

        // init local variable
        this.siteUrl = translation_array.site_url;
        this.filter = {
            search: '',
            location: ''
        };
        
        // init gsap animation

        // initialize events function
        this.events();

        // init international country code input

        // init label formgroup
    }

    events() {
        this.$searchActionContainer.on('click', 'button' , e => {
            const $el = $(e.currentTarget);

            $el.siblings().removeClass('is-active');
            $el.addClass('is-active');

            if($el.hasClass('posts')) this.setSearchFilterContainerByPostName('posts');
            if($el.hasClass('rooms')) this.setSearchFilterContainerByPostName('rooms');
            if($el.hasClass('workingspaces')) this.setSearchFilterContainerByPostName('workingspaces');
            if($el.hasClass('all')) this.setSearchFilterContainerByPostName('all');

        });

        this.$searchInput.on('keyup', e => {
            const $el = $(e.currentTarget);

            if(this.filter.search === $el.val()) return;

            this.filter.search = $el.val();

            clearInterval(this.searchTimer);
            this.$searchResultsWorkingspaceContainer.children().remove();
            this.$searchResultsPostContainer.children().remove();
            this.$searchResultsRoomContainer.children().remove();

            this.searchTimer = setTimeout(() =>{
                api(this.siteUrl).getAllPostTypesByFilter(this.filter).then(results => {
                    const {data} = results;
                    
                    this.$searchResultsWorkingspaceContainer.append(this.workingspacesTemplate(data.posts.workingspaces));
                    this.$searchResultsRoomContainer.append(this.roomsTemplate(data.posts.rooms));
                    this.$searchResultsPostContainer.append(this.postsTemplate(data.posts.posts));
                }).catch(e =>{
                });

            }, 800);
        });
    }

    setSearchFilterContainerByPostName(postType) {
        this.selectedFilterPostType = postType;

        switch(postType) {
            case 'post': {
                this.$labelSearchActionContainer.html('Posts');
                this.$locationActionContainer.removeClass('is-active');
                break;
            }

            case 'rooms': {
                this.$labelSearchActionContainer.html('Rooms');
                this.$locationActionContainer.removeClass('is-active');
                break;
            }

            case 'workingspaces': {
                this.$labelSearchActionContainer.html('Workingspaces');
                this.$locationActionContainer.addClass('is-active');
                break;
            }

            default: {
                this.$labelSearchActionContainer.html('Co-workingspaces, rooms and posts');
                this.$locationActionContainer.removeClass('is-active');
                break;
            }
        }    
    }

    workingspacesTemplate(data) {
        let template = '';
        
        if(!data ||data.length < 1) {
            return `<p>No items match your criteria.</p>`;
        }

        const locationTemplate = (location) => {
            return `
                <div class="detail-icontainer location">
                    <i class="fas fa-map-marker-alt text-muted"></i>
                    <a href="#">${location}</a>
                </div>`;
        }

        const priceRangeTemplate = (priceRange, url) => {
            return `
                    <hr/>
                    <small>Starting from</small>
                    <div class="price-container">
                        <span class="price">$${priceRange.length > 1 ? priceRange.join(' - $'): priceRange[0]}/month</span>
                        <a href="${url}">Explore now</a>
                    </div>
                    `;
        }

        const capacityTemplate = (capacityRange) => {
            return `<div class="detail-icontainer capacity">
                        <i class="fas fa-user text-muted"></i>
                        <p class="text-muted">Capacity: <span>${capacityRange[0]} - ${capacityRange[1]}</span></p>
                    </div>`;
        }

        data.forEach(val => {
            const minimumCapacity = val.capacity_list ? Math.min.apply(Math, val.capacity_list) : null;
            const maximumCapacity = val.capacity_list ? Math.max.apply(Math, val.capacity_list) : null;

            template+= `<div class="item workspace card border-top-left border--post border--hover" data-geolocation="${val?.location?.location}">
                            <img class="card-img-top" src="${val.featured_image}" alt="">
                            <div class="card-body">
                                <div class="action-container">
                                    <div class="action-like shadow-sm">
                                        <i class="far fa-heart"></i>
                                    </div>
                                </div>

                                <h5><a href="${val?.permalink}">${val?.post_title}</a></h5>
                                
                                ${val?.location?.place_name ? locationTemplate(val.location.place_name): ''}
                                ${minimumCapacity || maximumCapacity ? capacityTemplate([minimumCapacity, maximumCapacity]) : ''} 
                                <div class="detail-icontainer total-rooms">
                                    <i class="fas fa-chair text-muted"></i>
                                    <p class="text-muted">No. of rooms: <span>${val?.total_rooms ?? 0}</span></p>
                                </div>
                                ${val?.price_range ? priceRangeTemplate(val?.price_range, val?.permalink): ''}
                            </div>
                        </div>`;
        });

        return template;
    }

    roomsTemplate(data) {
        let template = '';

        if(!data ||data.length < 1) {
            return `<p>No items match your criteria.</p>`;
        }

        const roomRate = (roomRate, url) => {
            return `
                    <hr/>
                    <small>Room rate</small>
                    <div class="price-container">
                        <span class="price">$${roomRate}/month</span>
                        <a href="${url}">Explore now</a>
                    </div>
                    `;
        }

        const capacityTemplate = (capacity) => {
            return `<div class="detail-icontainer capacity">
                        <i class="fas fa-user text-muted"></i>
                        <p class="text-muted">Capacity: <span>${capacity}</span></p>
                    </div>`;
        }

        data.forEach(val => {

            template+= `<div class="item workspace card border-top-left border--post border--hover">
                            <img class="card-img-top" src="${val.featured_image}" alt="">
                            <div class="card-body">
                                <div class="action-container">
                                    <div class="action-like shadow-sm">
                                        <i class="far fa-heart"></i>
                                    </div>
                                </div>

                                <h5><a href="${val?.permalink}">${val?.post_title}</a></h5>
                                ${val?.capacity ? capacityTemplate(val?.capacity) : ''} 
                                ${val?.room_rate ? roomRate(val?.room_rate, val?.permalink): ''}
                            </div>
                        </div>`;
        });

        return template;
    }

    postsTemplate(data) {
        let template = '';
    
        if (!data || data.length < 1) {
          return `<p>No items match your criteria.</p>`;
        }
    
        data.forEach(val => {
          var _val$post_content_tri;
    
          template += `<div class="item post card border-top-left border--post">
                                <img class="card-img-top" src="${val === null || val === void 0 ? void 0 : val.featured_image}" alt="">
                                <div class="card-body">
                                    <div class="author-container">
                                        <i class="fas fa-book-reader"></i>
                                        <div class="author-details">
                                            <span>
                                                <a href="http://localhost:8888/wordpress-development" title="Visit admin’s website" rel="author external">admin</a>                            </span>,
                                            <span>
                                                <small>September 09 2021</small>
                                            </span>
                                        </div>
                                    </div>
    
                                    <h5>
                                        <a href="${val === null || val === void 0 ? void 0 : val.permalink}">${val === null || val === void 0 ? void 0 : val.post_title}</a>
                                    </h5>
    
                                    <p>${(_val$post_content_tri = val === null || val === void 0 ? void 0 : val.post_content_trim) !== null && _val$post_content_tri !== void 0 ? _val$post_content_tri : val === null || val === void 0 ? void 0 : val.post_excerpt}</p>
    
                                    <a class="btn text-center" href="${val === null || val === void 0 ? void 0 : val.permalink}">Read more</a>
                                </div>
                            </div>`;
        });
        return template;
      }
}

export default SearchPage;