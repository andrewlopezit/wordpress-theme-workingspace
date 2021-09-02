registerBlockType("pawndation/custom-empty-card", {
    // built-in attributes
    title: "Pawndation Empty Card",
    description: "Block to generate a custom Empty Card for text only",
    icon: "format-image",
    category: "layout",
    // custom attributes
    attributes: {
      body: {
        type: "string",
        source: "html",
        selector: "p",
      },
    },
  
    edit: ({ attributes, setAttributes }) => {
      const { body } = attributes;
  
      // custom functions
      function onChangeBody(newBody) {
        setAttributes({ body: newBody });
      }
      return (
        <RichText
          key="editable"
          tagName="p"
          placeholder="Your text here..."
          value={body}
          onChange={onChangeBody}
        />
      );
    },
  
    save: () => {
        return null;  
    },
  });