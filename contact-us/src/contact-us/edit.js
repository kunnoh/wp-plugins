import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { Panel, PanelBody, TextControl } from '@wordpress/components';

import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps();
	const { phone, email } = attributes;

	return (
		<div {...blockProps}>
			<InspectorControls key="setting">
				<Panel>
					<PanelBody title='contacts info' initialOpen={true}>
						<TextControl
							label={__('Phone Number')}
							value={phone}
							onChange={(val) => setAttributes({ phone: val })}
							help={__('Enter the phone number with country code', 'textdomain')}
						/>
						<TextControl
							label={__('Email Address')}
							value={email}
							onChange={(val) => setAttributes({ email: val })}
							help={__('Enter the email address', 'textdomain')}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div className='row'>
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
					{/* </div> */}
				</div>
			</div>
		</div>
	);
}
