import apiFetch from "@wordpress/api-fetch";
import { useEffect } from "react";

const { registerBlockType } = wp.blocks;
const __ = wp.i18n.__;
registerBlockType("workingspaces/latest-posts", {
    // built-in attributes
    title: "Latest posts",
    description: "Display latest posts",
    icon: "format-aside",
    category: "workingspace-blocks",
    // custom attributes
    attributes: {
        latestPosts: {
            type: 'array'
        }
    },
    edit: editComponent,
    save: () => {
      return null;
    },
});

function editComponent(props) {

    async function getLatestPosts() {
        const latestPosts = await apiFetch({
            path: 'wp/v2/posts?per_page=4',
            method: 'GET'
        });

        props.setAttributes({latestPosts: latestPosts});
    }
    getLatestPosts();

    if(!props?.attributes?.latestPosts) return <p>Loading...</p>

    return (
        <div className="workingspace gutenberg--latest-posts">
            <div className="post-container">
                {
                    props?.attributes?.latestPosts.map(post => {
                        return (
                            <div className="post">
                                <img src={post?.featured_image}/>
                                <span>{post?.post_title}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
  