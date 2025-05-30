<?php
/**
 * Plugin Name:       Listing
 * Description:       Dynamic columns for listing block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Kunnoh
 * Author URI         https://kunnoh.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       listing
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! defined( 'LISTING_VERSION' ) ) {
        /**
         * Plugin version.
         *
         * @since 0.1.0
         */
        define( 'LISTING_VERSION', '0.1.0' );
}

// Plugin Folder Path.
if ( ! defined( 'LISTING_PLUGIN_DIR' ) ) {
        define( 'LISTING_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
}

// Plugin Folder URL.
if ( ! defined( 'LISTING_PLUGIN_URL' ) ) {
        define( 'LISTING_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
}

// Plugin Root File.
if ( ! defined( 'LISTING_PLUGIN_FILE' ) ) {
        define( 'LISTING_PLUGIN_FILE', __FILE__ );
}

function create_block_listing_block_init() {
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
		return;
	}

	if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
		wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
	}

	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach ( array_keys( $manifest_data ) as $block_type ) {
		register_block_type( __DIR__ . "/build/{$block_type}" );
	}
}
add_action( 'init', 'create_block_listing_block_init' );
