<?php
// This file is generated. Do not modify it manually.
return array(
	'listings' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/listings',
		'version' => '0.1.0',
		'title' => 'Listings',
		'category' => 'widgets',
		'description' => 'Listings block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'align' => true,
			'color' => array(
				'gradients' => true,
				'background' => true,
				'text' => true,
				'link' => true
			),
			'spacing' => array(
				'margin' => true,
				'padding' => true
			),
			'typography' => array(
				'fontSize' => true,
				'textAlign' => true
			)
		),
		'textdomain' => 'listings',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
