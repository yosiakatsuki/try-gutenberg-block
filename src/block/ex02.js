const {registerBlockType} = wp.blocks;

registerBlockType('try-gutenberg/ex-02', {
    title: 'Example: Stylesheets',
    icon: 'universal-access-alt',
    category: 'layout',
    edit({className}) {
        return <p className={className}>Hello World, step 2 (from the editor, in green).</p>;
    },

    save() {
        return <p>Hello World, step 2 (from the frontend, in red).</p>;
    }
});