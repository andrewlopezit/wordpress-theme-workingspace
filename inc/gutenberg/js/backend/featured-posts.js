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
        searchPostName: {
            type: 'string',
        },
        posts: {
            type: 'array',
        },
    },
  
    edit: editComponent,
    save: () => {
      return null
    },
});

function editComponent(props) {
    const [posts, setPosts] = useState('');
    const [postCollection, setPostCollection] = useState('');
    const {attributes: {searchPostName, postIds}} = props;
    let debounceSearchTimter;
    
    const searchPostTitle = ['Workingspaces', 'Rooms', 'Posts'];

    // init posts display
    useEffect(() => {
        async function getPosts() {
            const results = await apiFetch({
                path: 'wp/v2/workingspaces?per_page=4',
                method: 'GET'
            });

            props.setAttributes({posts: results});
        }

        getPosts();
    }, []);

    function setAttributePostName(name) {
        clearInterval(debounceSearchTimter);

        debounceSearchTimter = setTimeout(() => {
            props.setAttributes({searchPostName: name});
        }, 800);
    }

    function removePostById(id) {
        if(props.attributes.posts.length <= 1 ) return;
        
        const postsClone = _.cloneDeep(props.attributes.posts);

        const currentPosts = _.filter(postsClone, postClone =>  postClone.ID !== +id);
        props.setAttributes({posts: currentPosts});
    }

    // display posts on search name
    useEffect(() => {
        if(!searchPostName) return;

        setPostCollection(null);

        async function getCollectionPostsByName() {
            
            const collections = await Promise.all([
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
            setPostCollection(collections);
        }
        
        getCollectionPostsByName();

    }, [searchPostName]);

    // display post by id
    useEffect(() => {
        async function getPostsByIds() {
            const results = await apiFetch({
                path: ''
            });
        }
    }, [postIds]);

    useEffect(() => {
        setPosts(props.attributes.posts);
    }, [props.attributes.posts])

    function displaySearchPostCollection() {
        if(!postCollection || postCollection.length < 1) {
            return (
                <div className="search-posts-container">
                    <p>Loading...</p>
                </div>
            );
        }

        return (
            <div className="search-posts-container">
                {
                    postCollection.map((posts, i) => {
                        return (
                            <div className="post-container">
                                <div className="title">{searchPostTitle[i]}</div>
                                {
                                    posts.map(post => {
                                        return (
                                            <div className="post">
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

    if (!posts ||posts.length < 1) return <p>Loading...</p>
    return [
        <InspectorControls>
            <PanelBody title={"Posts Setting"}>
                <div className="workingspace gutenberg--inspector-controls featured-posts">
                    <div class="components-base-control__field css-11vcxb9-StyledField e1puf3u1">
                        <input class="components-text-control__input" 
                        placeholder="posts, rooms, and workingspaces"
                        onChange={e => setAttributePostName(e.target.value)}/>
                    </div>
                        {searchPostName ? displaySearchPostCollection() : ''}
                    <div className="post-container">
                        {
                            posts.map(post => {
                                return (
                                    <div class="posts">
                                        <img src={post.featured_image}/>
                                        <div className="action-container">
                                            <Button id={post?.ID} className="components-button is-secondary">Replace</Button>
                                            <Button data-id={post?.ID} className="components-button is-link is-destructive" 
                                                onClick={e =>  {
                                                    removePostById(e.target.getAttribute('data-id'));
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
                posts.map(post => {
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
  