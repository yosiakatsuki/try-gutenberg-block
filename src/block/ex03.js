const {registerBlockType} = wp.blocks;
const {RichText} = wp.editor;

registerBlockType('try-gutenberg/ex-03', {
    title: 'Example: Editable (esnext)',
    icon: 'universal-access-alt',
    category: 'layout',
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'div',
        },
    },
    edit: (props) => {
        console.log(props);
        const {attributes: {content}, setAttributes} = props;
        const onChangeContent = (newContent) => {
            setAttributes({content: newContent});
        };
        return (
            <RichText
                tagName="div"
                className="tg-ex-03"
                onChange={onChangeContent}
                value={content}
            />
        );
    },
    save: (props) => {
        return <RichText.Content tagName="div" value={props.attributes.content}/>;
    },
});