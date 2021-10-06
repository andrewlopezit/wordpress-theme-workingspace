
import {useState, useEffect} from 'react';

import { 
    Flex,
    Button, 
    FlexBlock, 
    TextControl} from '@wordpress/components';

import {
    MediaUpload,
    MediaUploadCheck } from '@wordpress/block-editor';

import { registerBlockType } from '@wordpress/blocks';

const ALLOWED_MEDIA_TYPES = ["image"];
const { assets_dir } = translation_array;

registerBlockType("workingspaces/headshot", {
    // built-in attributes
    title: "Headshots",
    description: "",
    icon: "format-image",
    category: "workingspace-blocks",
    // custom attributes
    attributes: {
        id: {
            type: 'number'
        },

        src: {
            type: 'string',
            default: `${assets_dir}/icons/user.svg`
        },

        name: {
            type: 'string',
            default: ''
        },

        position: {
            type: 'string',
            default: ''
        },

    },

    edit: editComponent,
    save: () => {
        return null;
    },
});

function editComponent (props) {

    return [
        <Flex className="workingspace gutenberg--headshots">
            <FlexBlock>
                <MediaUploadCheck>
                    <MediaUpload
                    allowedTypes={ALLOWED_MEDIA_TYPES}
                    onSelect={value => props.setAttributes({...props?.attributes, id: value.id, src: value?.sizes.medium.url})}
                    type="image"
                    render={({ open }) => (
                        <Button
                        className="headshot-container"
                        style={{backgroundImage: `url(${props?.attributes?.src})`}}
                        onClick={open}
                        ></Button>
                    )}
                    />
            </MediaUploadCheck>
            <TextControl
                placeholder="John Doe"
                value={props?.attributes?.name}
                onChange={value => props.setAttributes({...props?.attributes, name: value})}
            />
            <TextControl
                value={props?.attributes?.position}
                onChange={value => props.setAttributes({...props?.attributes, position: value})}
                placeholder="Position"
            />
            </FlexBlock>
        </Flex>
    ]
}

