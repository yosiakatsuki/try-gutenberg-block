const {registerBlockType} = wp.blocks;

registerBlockType('myguten/test-block', {
    title: 'Basic Example',
    icon: 'smiley',
    category: 'layout',
    edit: () => <div>テストぶろっくだよ!edit</div>,
    save: () => <div>テストぶろっくだよ!save</div>,
});