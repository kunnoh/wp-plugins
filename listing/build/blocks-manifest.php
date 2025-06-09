<?php
// This file is generated. Do not modify it manually.
return array(
	'listing' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/listing',
		'version' => '0.1.0',
		'title' => 'Listing',
		'category' => 'widgets',
		'description' => 'Dynamic columns for listing',
		'example' => array(
			
		),
		'supports' => array(
			'color' => array(
				'background' => false,
				'text' => true
			),
			'html' => false,
			'typography' => array(
				'fontSize' => true
			)
		),
		'textdomain' => 'listing',
		'editorScript' => 'file:./index.js',
		'render' => 'file:./render.php',
		'attributes' => array(
			'itemsPerPage' => array(
				'type' => 'number',
				'default' => 8
			),
			'orderBy' => array(
				'type' => 'string',
				'default' => 'date'
			),
			'order' => array(
				'type' => 'string',
				'default' => 'desc'
			)
		)
	)
);
