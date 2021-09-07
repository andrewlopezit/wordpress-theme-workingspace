import apiFetch from '@wordpress/api-fetch';
import {useState, useEffect} from 'react';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import {Panel,
        PanelBody,
        PanelRow,
        TextControl,
        BaseControl } from '@wordpress/components';
import {
    InspectorControls,
    ColorPalette
} from '@wordpress/block-editor';

registerBlockType("workingspaces/latest-posts", {
    // built-in attributes
    title: "Latest posts",
    description: "Display latest posts",
    icon: "format-aside",
    category: "workingspace-blocks",
    // custom attributes
    attributes: {
        header: {
            title: {
                type :'string',
            },

            color: {
                type: 'string'
            },

            backgroundColor: {
                type: 'string'
            }
        },
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
    const title = props?.attributes?.header?.title ?? 'Recent Posts: ';
    const [postTitle, setPostTitle] = useState(title);
    
    useEffect(() => {
        if( props?.attributes?.latestPosts !== undefined) return;

        async function getLatestPosts() {
            const results = await apiFetch({
                path: 'wp/v2/posts?per_page=4',
                method: 'GET'
            });
    
            props.setAttributes({latestPosts: results});
        }
        getLatestPosts();

    }, []);

    useEffect(() => {
        props?.setAttributes({header: {title: postTitle}});
    }, postTitle)

    if(!props?.attributes?.latestPosts) return <p>Loading...</p>

    const titleStyle = {
        color: props?.attributes?.header?.color,
        backgroundColor: props?.attributes?.header?.backgroundColor
    }

    return [
        <InspectorControls>
            <Panel>
                <PanelBody title="Header">
                    <PanelRow>
                    <BaseControl id="header-color" label="Text Color">
                        <ColorPalette
                            id="header-color"
                            label="Color"
                            onChange={color => props.setAttributes({
                                header: {
                                    title: props?.attributes?.header?.title,
                                    color: color,
                                    backgroundColor: props?.attributes?.header?.backgroundColor
                                }
                            })}
                                />
                    </BaseControl>
                        
                    </PanelRow>
                    <PanelRow>
                        <BaseControl id="header-background-color" label="Background Color">
                            <ColorPalette
                                id="header-background-color"
                                onChange={color => props.setAttributes({
                                    header: {
                                        title: props?.attributes?.header?.title,
                                        color: props?.attributes?.header?.color,
                                        backgroundColor: color
                                    }
                                })}
                                    />
                        </BaseControl>
                    </PanelRow>
                </PanelBody>
            </Panel>
        </InspectorControls>,
        <div className="workingspace gutenberg--latest-posts">
        <TextControl className="title"
            value={postTitle} 
            style={titleStyle}
            onChange={ nextValue => {setPostTitle(__(nextValue))}}/>

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
    ];
}