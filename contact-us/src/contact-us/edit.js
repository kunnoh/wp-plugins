import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	// const blockProps = useBlockProps({

	// });
	const {
		phone,
		email
	} = attributes;
	return (
		<div className='row'>
			<div>
				<h2>Contact Us</h2>
				<div className="row address">
					<a title="mbakapower phone number" href="tel:{phone}">
						Phone: {phone}
					</a>
					<a title="mbakapower email address" href="mailto:{email}">
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
	);
}
