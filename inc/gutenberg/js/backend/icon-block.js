import Icon from './icon';

import {useState, useEffect} from 'react';

import { 
    PanelBody,
    PanelRow,
    BaseControl,
    RangeControl } from '@wordpress/components';

import {
    InspectorControls,
    ColorPalette,
    BlockControls,
    AlignmentToolbar } from '@wordpress/block-editor';

import { registerBlockType } from '@wordpress/blocks';

/**
 * This blocks intendted for svg file tpye only
 */
registerBlockType("workingspaces/icons", {
    // built-in attributes
    title: "Icons",
    description: "",
    icon: "format-image",
    category: "workingspace-blocks",
    // custom attributes
    attributes: {
        slug: {
            type: 'string',
        },

        size: {
            type: 'number',
        },

        color: {
            type: 'string',
        },
        
        align: {
            type: 'string'
        }
    },

    edit: editComponent,
    save: () => {
        return null;
    },
});

function editComponent (props) {
    const [icon, setIcon] = useState(props?.attributes ?? '');

    const iconListProp = [
        { slug: 'mission' },
        { slug: 'group' },
        { slug: 'work-station' },
        { slug: 'pin' },
        { slug: 'flag' },
        { slug: 'support' },
        { slug: 'medal' },
    ];

    useEffect(() =>{
        if(props?.attributes?.slug) return;

        setIcon({slug: 'mission', color: '#000', size: 50, align: 'left'});
    },[]);

    useEffect(() =>{
        props.setAttributes(icon);
    },[icon]);

    if(!props?.attributes?.slug) return(<p>Loading...</p>);

    return [
        <BlockControls>
            <AlignmentToolbar
            value={props?.attributes?.align}
            onChange={ ( value ) => setIcon({...props?.attributes, align: value}) }/>
        </BlockControls>,
        <InspectorControls>
            <PanelBody title="Icons" initialOpen={true}>
                <PanelRow className="workingspace gutenberg--inspector-controls icons-list">
                    {
                        iconListProp.map(prop =>{
                            return (
                                <div className="icon-container">
                                    {
                                        <Icon onClick={value => setIcon({...props?.attributes, slug: value}) } data={prop}/>
                                    }
                                </div>
                            );
                        })
                    }
                </PanelRow>
            </PanelBody>
            <PanelBody title="Color" initialOpen={false}>
                <PanelRow>
                    <BaseControl label="Icon color">
                        <ColorPalette
                        value={props?.attributes?.color}
                        onChange={ ( value ) => setIcon({...props?.attributes, color: value}) }
                        />
                    </BaseControl>
                </PanelRow>
            </PanelBody>
            <PanelBody title="Size" initialOpen={false}>
                <PanelRow>
                    <RangeControl
                    label="Icon size in pixels"
                    value={ props?.attributes?.size }
                    onChange={ ( value ) => setIcon({...props?.attributes, size: value}) }
                    min={ 50 }
                    max={ 300 }/>
                </PanelRow>
            </PanelBody>
        </InspectorControls>,
        <Icon data={props?.attributes}/>
    ];
}

