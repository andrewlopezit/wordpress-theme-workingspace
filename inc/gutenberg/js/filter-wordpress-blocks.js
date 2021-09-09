const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls, InspectorAdvancedControls } = wp.blockEditor;
const {
  PanelBody,
  PanelRow,
  BaseControl,
  Button,
  TextHighlight,
  ToggleControl
} = wp.components;

const { useState, useEffect } = React;

const { Fragment } = wp.element;

const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;

const BORDER_BOTTOM_TEXT_ALLOWED_BLOCKS = [
    'core/heading'
]

wp.domReady(() => {
/**
 * ATTRIBUTES
 * 
 * TEXT BORDER
 */
 wp.hooks.addFilter(
  "blocks.registerBlockType",
  "workingspace/textBorderAttribute",
  (settings) => {
    if (BORDER_BOTTOM_TEXT_ALLOWED_BLOCKS.includes(settings.name)) {
      settings.attributes = {
        ...settings.attributes,
        highlightedText: {
          type: "string",
        },
      };
    }
    return settings;
  }
);

// COLUMNS
wp.hooks.addFilter(
  "blocks.registerBlockType",
  "workingspace/columnsContainerAttributes",
  (settings) => {
    if (settings.name === 'core/columns') {
      settings.attributes = {
        ...settings.attributes,
        isFullWidth: {
          type: "boolean",
          default: false
        },
      };
    }
    return settings;
  }
);

/**
 * BLOCKS
 * 
 * TEXT BORDER
 */
  wp.hooks.addFilter(
      "editor.BlockEdit",
      "workingspace/textBorderBlocks",
      wp.compose.createHigherOrderComponent(

        (BlockEdit) => (props) => {
          if (BORDER_BOTTOM_TEXT_ALLOWED_BLOCKS.includes(props.name)) {

          const [highlightedText, setHighlightedText] = useState(props?.attributes?.highlightedText);
          const [headingContent, setHeadingContent] = useState(props?.attributes?.content.replace(/<\/?[^>]+(>|$)/g, ""));

          useEffect(() => {
            const content = headingContent.replace(highlightedText, `<mark>${highlightedText}</mark>`);

            props.setAttributes({...props, content: content ,highlightedText: highlightedText});
          }, [highlightedText]);

          useEffect(() => {
            setHeadingContent(props?.attributes?.content.replace(/<\/?[^>]+(>|$)/g, ""))
          }, [props.attributes?.content]);
          
          return (
              <Fragment>
                <BlockEdit {...props} />
                <InspectorControls>
                  <PanelBody title="Border" initialOpen={false}>
                      <PanelRow className="workingspace gutenberg--inspector-controls heading-border">
                          <BaseControl label="Text Border Bottom" help="highlight the text to add border">
                              <div className="container">
                                  <h2
                                  onMouseUp={() => {
                                      if (window.getSelection) {
                                          const text = window.getSelection().toString();
                                          setHighlightedText(text);
                                      } else if (document.selection) {
                                          const text = document.selection.createRange().text;
                                          setHighlightedText(text);
                                      }
                                  }}>
                                      <TextHighlight
                                      text={headingContent}
                                      highlight={props?.attributes?.highlightedText}
                                      />
                                  </h2>
                              </div>
                          </BaseControl>
                      </PanelRow>
                  </PanelBody>
                </InspectorControls>
              </Fragment>
            );
          }
          return <BlockEdit {...props} />;
        },
        "workingspaceHeadingBodrderBlocks"
      )
  );

// COLUMNS CONTAINER
wp.hooks.addFilter(
  "editor.BlockEdit",
  "workingspace/columnsContainer",
  wp.compose.createHigherOrderComponent(
    (BlockEdit) => (props) => {
      if (props.name === 'core/columns') {
        return (
          <Fragment>
            <BlockEdit {...props}/>
            <InspectorAdvancedControls>
                <PanelRow>
                  <ToggleControl
                    label="Full width"
                    checked={ props?.attributes?.isFullWidth }
                    onChange={ () => {props.setAttributes({isFullWidth: !props.attributes.isFullWidth})} }
                  />
                </PanelRow>  
            </InspectorAdvancedControls>
          </Fragment>
        )
      }
      return <BlockEdit {...props} />;
    },
    "workingspacecClumnsContainer"
  )
);

/**
 * FRONT END BLOCKS
 * 
 * FILTER BLOCKS CLASSNAME
 */

 wp.hooks.addFilter(
  "blocks.getSaveContent.extraProps",
  "workingspace/columnsContainerSave",
  (props, block, attributes) => {
    if (block.name === 'core/columns') {
      if (attributes.isFullWidth) {
        props.className = props.className+' full-width';
      }
    }
    return props;
  }
);
});