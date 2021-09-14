import Icon from './icon';

import {useState, useEffect} from 'react';

import { 
    PanelBody,
    PanelRow,
    BaseControl,
    RangeControl} from '@wordpress/components';

import {
    InspectorControls,
    ColorPalette
} from '@wordpress/block-editor';

import { registerBlockType } from '@wordpress/blocks';

registerBlockType("workingspace/icons", {
    // built-in attributes
    title: "Icons",
    description: "",
    icon: "format-image",
    category: "workingspace-blocks",
    // custom attributes
    attributes: {
        slug: {
            type: 'string',
            default: 'mission'
        },

        size: {
            type: 'number',
            default: 50
        },

        color: {
            type: 'string',
            default: '#000'
        }
    },

    edit: editComponent,
    save: () => {
      return null;
    },
});

function editComponent (props) {
    const [icon, setIcon] = useState(props?.attributes);
    
    const iconListProp = [
        { slug: 'mission' }
    ];

    useEffect(() =>{
        props.setAttributes({...icon});
    },[icon]);

    return [
        <InspectorControls>
            <PanelBody title="Icons" initialOpen={true}>
                {
                    iconListProp.map(prop =>{
                        return (
                            <div className="icon-container">
                                {
                                    <Icon {...prop}/>
                                }
                            </div>
                        );
                    })
                }
            </PanelBody>
            <PanelBody title="Color" initialOpen={false}>
                <PanelRow>
                    <BaseControl label="Icon color">
                        <ColorPalette
                        value={icon.color}
                        onChange={ ( value ) => setIcon({...props?.attributes, color: value}) }
                        />
                    </BaseControl>
                </PanelRow>
            </PanelBody>
            <PanelBody title="Size" initialOpen={false}>
                <PanelRow>
                    <RangeControl
                    label="Icon size in pixels"
                    value={ icon.size }
                    onChange={ ( value ) => setIcon({...props?.attributes, size: value}) }
                    min={ 50 }
                    max={ 300 }/>
                </PanelRow>
            </PanelBody>
        </InspectorControls>,
        <Icon {...props?.attributes}/>
    ];
}

