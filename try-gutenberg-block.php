<?php
/*
Plugin Name: try-gutenberg-block
*/

function try_gutenberg_block_enqueue() {
	wp_enqueue_script(
		'try-gutenberg-block-script',
		plugins_url( 'js/block/try-gutenberg-block-main.js', __FILE__ ),
		array( 'wp-blocks' )
	);
	wp_enqueue_script(
		'fs-icon',
		'https://use.fontawesome.com/releases/v5.10.0/js/all.js'
	);
	wp_add_inline_script(
		'fs-icon',
		'FontAwesomeConfig = { searchPseudoElements: true };',
		'before'
	);
}
add_action( 'enqueue_block_editor_assets', 'try_gutenberg_block_enqueue' );


function try_gutenberg_block_assets() {
	wp_enqueue_style(
		'myguten-style',
		plugins_url( 'css/try-gutenberg-block-css.css', __FILE__ )
	);
}
add_action( 'enqueue_block_assets', 'try_gutenberg_block_assets' );