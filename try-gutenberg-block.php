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
}
add_action( 'enqueue_block_editor_assets', 'try_gutenberg_block_enqueue' );


function try_gutenberg_block_assets() {
	wp_enqueue_style(
		'myguten-style',
		plugins_url( 'css/try-gutenberg-block-css.css', __FILE__ )
	);
}
add_action( 'enqueue_block_assets', 'try_gutenberg_block_assets' );
add_action( 'wp_enqueue_scripts', 'try_gutenberg_block_assets' );

