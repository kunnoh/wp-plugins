<?php
// This file is generated. Do not modify it manually.
return array(
	'contact-us' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/contact-us',
		'version' => '0.1.0',
		'title' => 'Contact Us',
		'category' => 'widgets',
		'description' => 'Contact Us block scaffolded with Create Block tool.',
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
		'textdomain' => 'contact-us',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'phone' => array(
				'type' => 'string',
				'default' => '0722000111'
			),
			'email' => array(
				'type' => 'string',
				'default' => 'info@example.com'
			)
		)
	)
);
