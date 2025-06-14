import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import { PanelBody, TextControl } from '@wordpress/components';

export default function Edit({attributes, setAttributes}) {
	// const blockProps = useBlockProps({});
	const {
		phone,
		email
	} = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Contact Settings', 'textdomain')}>
					<TextControl
						label={__('Phone Number', 'textdomain')}
						value={phone}
						onChange={(value) => setAttributes({ phone: value })}
						help={__('Enter the phone number with country code', 'textdomain')}
					/>
					<TextControl
						label={__('Email Address', 'textdomain')}
						value={email}
						onChange={(value) => setAttributes({ email: value })}
						help={__('Enter the email address', 'textdomain')}
					/>
				</PanelBody>
			</InspectorControls>
			<div className='row'>
				<div>
					<h2>Contact Us</h2>
					<div className="row address">
						<a title="mbakapower phone number" href={`tel:${phone}`}>
							Phone: {phone}
						</a>
						<a title="mbakapower email address" href={`mailto:${email}`}>
							Email: {email}
						</a>
						{/* <div className='socials'> */}
							{/* IG */}
							{/* <img alt='instagram' src='./assets/images/facebook.png'/> */}
							{/* FB */}
							{/* <img alt='facebook' src='./assets/images/instagram.png'/> */}
					</div>
				</div>
			</div>
		</>
	);
}
