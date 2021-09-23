import { api, loading } from './index';
import  moment from 'moment/moment';

class Posts {
    constructor() {
        this.$post = $('.post-list#posts');

        if(!this.$post.length) return;

        this.$postFilterContainer = this.$post.find('.post-list.post-list--filters');
        this.$postContainer = this.$post.find('.inner-container.posts');
        
        this.$btnViewMore = this.$post.siblings('.action-container.post.view-more');
        this.postFilter;

        //local variable
        this.siteUrl = translation_array.site_url;

        this.initPostFilter();
        this.events();
    }
    
    initPostFilter() {
       const $el = this.$postFilterContainer.find('.is-active');
       const filter = {
           cat_name : $el.data('cat-name') === 'all' ? '' : $el.data('cat-name'),
           paged : 1
       }

       this.postFilter = filter;
    }

    events() {
        this.$postFilterContainer.on('click', 'a', e => {
            e.preventDefault();
            const $el = $(e.currentTarget);

            $el.siblings().removeClass('is-active');
            $el.addClass('is-active');
            
            this.setSiteUrl($el.attr('href'));

            this.postFilter = {
                cat_name: $el.data('cat-name') === 'all' ? '' : $el.data('cat-name'),
                paged: 1
            }

            this.$postContainer.children().remove();
            const load = loading(this.$postContainer).start();

            api(this.siteUrl).getPostsByFilter(this.postFilter).then(result => {
                const { data } = result;
                load.end();
                this.$postContainer.append(this.postsTemplate(data));

            }).catch(() => {
                load.end();
            });
        });

        this.$btnViewMore.on('click', e => {
            if(!this.$postFilterContainer.length) return;

            e.preventDefault();

            this.postFilter.paged++;

            const load = loading(this.$postContainer).start();

            api(this.siteUrl).getPostsByFilter(this.postFilter).then(result => {
                const { data } = result;
                load.end();

                if(data.length < 1) {
                    this.$btnViewMore.hide();
                    return;
                }
                
                this.$postContainer.append(this.postsTemplate(data));

            }).catch(() => {
                load.end();
            });
        });
    }

    setSiteUrl(params) {
        const url = window.location.href.split('?');
        window.history.pushState("", "", url[0]+params);
        return;
    }

    postsTemplate(data) {
        let template = '';

        if(!data || data.length < 1) {
            return `<p>No items match your criteria.</p>`;
        }

        data.forEach(val => {
            template+=`<div class="item post card border-top-left border--post">
                            <img class="card-img-top" src="${val?.featured_image}" alt="">
                            <div class="card-body">
                                <div class="author-container">
                                    <i class="fas fa-book-reader"></i>
                                    <div class="author-details">
                                        <span>
                                            <a href="${val?.author?.user_url}" title="Visit admin’s website" rel="author external">${val?.author?.display_name}</a>
                                        <span>
                                            <small>${moment(val?.post_date_gmt).format('MMMM DD YYYY')}</small>
                                        </span>
                                    </div>
                                </div>

                                <h5>
                                    <a href="${val?.permalink}">${val?.post_title}</a>
                                </h5>

                                <p>${val?.post_content_trim ?? val?.post_excerpt}</p>

                                <a class="btn text-center" href="${val?.permalink}">Read more</a>
                            </div>
                        </div>`;
        });

        return template;
    }
}

export default Posts;