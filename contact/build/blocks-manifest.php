<?php
// This file is generated. Do not modify it manually.
return array(
	'contact' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/contact',
		'version' => '0.1.0',
		'title' => 'Contact',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Contact section with schema markup, contact form, and business information.',
		'keywords' => array(
			'contact',
			'form',
			'business'
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'textdomain' => 'contact',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'companyName' => array(
				'type' => 'string',
				'default' => 'Your Company Name'
			),
			'address' => array(
				'type' => 'object',
				'default' => array(
					'street' => '123 Business Street',
					'city' => 'Your City',
					'state' => 'State',
					'zipCode' => '12345',
					'country' => 'Country'
				)
			),
			'phone' => array(
				'type' => 'string',
				'default' => '+1 (234) 567-890'
			),
			'email' => array(
				'type' => 'string',
				'default' => 'info@yourcompany.com'
			),
			'businessHours' => array(
				'type' => 'object',
				'default' => array(
					'weekdays' => 'Monday - Friday: 9:00 AM - 5:00 PM',
					'saturday' => 'Saturday: 10:00 AM - 2:00 PM',
					'sunday' => 'Sunday: Closed'
				)
			),
			'socialLinks' => array(
				'type' => 'object',
				'default' => array(
					'facebook' => '',
					'twitter' => '',
					'linkedin' => '',
					'instagram' => ''
				)
			),
			'showMap' => array(
				'type' => 'boolean',
				'default' => true
			),
			'mapEmbedCode' => array(
				'type' => 'string',
				'default' => ''
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#333333'
			)
		)
	)
);
