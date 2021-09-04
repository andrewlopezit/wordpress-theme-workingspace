import apiFetch from "@wordpress/api-fetch";
import {useState, useEffect} from "react";
import _ from 'lodash';

const { registerBlockType } = wp.blocks;
const __ = wp.i18n.__;

const { PanelBody, Button } = wp.components;
const { InspectorControls } = wp.blockEditor;


registerBlockType("workingspaces/featured-posts", {
    // built-in attributes
    title: "Featured Posts",
    description: "Display  posts",
    icon: "format-image",
    category: "workingspace-blocks",
    // custom attributes
    attributes: {
        featuredPosts: {
            type: 'array',
        },
    },
  
    edit: editComponent,
    save: () => {
      return null
    },
});

function editComponent(props) {
    const [featuredPosts, setFeaturedPosts] = useState('');
    const [postCollection, setPostCollection] = useState('');
    const [searchPostName, setSearchPostName] = useState('');
    const [isDisplaySearchPost, setIsDisplaySearchPost] = useState('');
    const [isLoadingSearchPost, setIsLoadingSearchPost] = useState('');
    const [selectedReplaceIndex, setSelectedReplaceIndex] = useState(undefined);

    let debounceSearchTimter;
    
    const searchPostTitle = ['Workingspaces', 'Rooms', 'Posts'];

    // init posts display
    useEffect(() => {
        if(!featuredPosts) return;

        async function getPosts() {
            const results = await apiFetch({
                path: 'wp/v2/workingspaces?per_page=4',
                method: 'GET'
            });

            props.setAttributes({featuredPosts: results});
        }

        getPosts();
    }, []);

    function setAttributePostName(name) {
        clearInterval(debounceSearchTimter);
        setIsLoadingSearchPost(true);
        setIsDisplaySearchPost(false);

        debounceSearchTimter = setTimeout(() => {
            setSearchPostName(name);
        }, 800);
    }

    function addFeaturedPost(post) {
        setIsDisplaySearchPost(false);

        if(props.attributes.featuredPosts.length >= 4 && selectedReplaceIndex === undefined) return;

        const postsClone = _.cloneDeep(props.attributes.featuredPosts);

        if(selectedReplaceIndex !== undefined) {
            postsClone[selectedReplaceIndex] = post;
        }else {
            postsClone.push(post);
        }

        props.setAttributes({featuredPosts: postsClone});
        props.setAttributes({searchPostName: null});
        setSelectedReplaceIndex(undefined);
    }

    function removeFeaturedPost(id) {
        if(props.attributes.featuredPosts.length <= 1 ) return;

        const postsClone = _.cloneDeep(props.attributes.featuredPosts);

        const currentPosts = _.filter(postsClone, postClone =>  postClone.ID !== +id);
        props.setAttributes({featuredPosts: currentPosts});
    }

    // display posts on search name
    useEffect(() => {
        if(!searchPostName) {
            setIsLoadingSearchPost(false);
            setIsDisplaySearchPost(false);
            return;
        }

        async function getCollectionPostsByName() {
            
            const results = await Promise.all([
                apiFetch({
                    path: `wp/v2/workingspaces?search=${searchPostName}`,
                    method: 'GET'
                }),
                apiFetch({
                    path: `wp/v2/rooms?search=${searchPostName}`,
                    method: 'GET'
                }),
                apiFetch({
                    path: `wp/v2/posts?search=${searchPostName}`,
                    method: 'GET'
                })
            ]);

            const collectionPost =  [];
            
            const lookup = _.keyBy(props.attributes.featuredPosts, post => { return post.ID;});

            results.forEach(result => {
                const filteredPosts = _.filter(result, result => lookup[result.ID]  === undefined);
                collectionPost.push(filteredPosts);
            });

            setPostCollection(collectionPost);
            setIsLoadingSearchPost(false);
            setIsDisplaySearchPost(true);
        }
        
        getCollectionPostsByName();

    }, [searchPostName]);

    useEffect(() => {
        setFeaturedPosts(props.attributes.featuredPosts);
    }, [props.attributes.featuredPosts])

    function displaySearchPostCollection() {
        if(isLoadingSearchPost) {
            return (
                <div className='search-posts-container '>
                    <p>Loading...</p>
                </div>
            );
        }

        if(isDisplaySearchPost && postCollection) {
            return (
                <div className='search-posts-container'>
                    {   
                        postCollection.map((posts, i) => {
                            return (
                                <div className="post-container">
                                    <div className="title">{searchPostTitle[i]}</div>
                                    {
                                        posts.map((post, postIndex) => {
                                            return (
                                                <div data-index={i} data-id={post.ID} className="post" 
                                                    onClick={() => addFeaturedPost(postCollection[i][postIndex])}>
                                                    <img src={post?.featured_image}/>
                                                    <span>{post?.post_title}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            );
        }

        if(isDisplaySearchPost && !postCollection) {
            return (
                <div className='search-posts-container'>
                    <p>No posts to load</p>
                </div>
            );
        }
    }

    if (!featuredPosts ||featuredPosts.length < 1) return <p>Loading...</p>
    return [
        <InspectorControls>
            <PanelBody title={"Posts Setting"}>
                <div className="workingspace gutenberg--inspector-controls featured-posts">
                    <div class="components-base-control__field css-11vcxb9-StyledField e1puf3u1">
                        <input class="components-text-control__input" 
                        placeholder="posts, rooms, and workingspaces"
                        onChange={e => setAttributePostName(e.target.value)}/>
                    </div>
                        {(isLoadingSearchPost || isDisplaySearchPost) ? displaySearchPostCollection() : ''}
                    <div className="post-container">
                        {
                            featuredPosts.map((post, i) => {
                                return (
                                    <div class="posts">
                                        <img src={post.featured_image}/>
                                        <div className="action-container">
                                            <Button className="components-button is-secondary"
                                                onClick={e => { 
                                                    setIsDisplaySearchPost(true); 
                                                    setSelectedReplaceIndex(i);}}>Replace</Button>
                                            <Button data-id={post?.ID} className="components-button is-link is-destructive" 
                                                onClick={e =>  {
                                                    removeFeaturedPost(e.target.getAttribute('data-id'));
                                                }}>
                                                Remove
                                            </Button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </PanelBody>
        </InspectorControls>,
        <div class="workingspace gutenberg--featured-posts">
        {
                featuredPosts.map(post => {
                    return (
                        <div class="item featured">
                            <img src={post?.featured_image}/>
                            <div class="overlay">
                                <div class="detail-container">
                                    <h6>{__(post?.post_title)}</h6>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    ];
}
  