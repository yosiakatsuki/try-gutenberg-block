const {registerBlockType} = wp.blocks;

const blockStyle = {
    backgroundColor: '#900',
    color: '#fff',
    padding: '20px',
};

registerBlockType('try-gutenberg/ex-01', {
    title: 'Example: Basic (esnext)',
    icon: 'universal-access-alt',
    category: 'layout',
    edit() {
        return <div style={blockStyle}>Hello World, step 1 (from the editor).</div>;
    },
    save() {
        return <div style={blockStyle}>Hello World, step 1 (from the frontend).</div>;
    },
});