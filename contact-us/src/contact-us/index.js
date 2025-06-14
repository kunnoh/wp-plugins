import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';

const Icon = (
    <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
    >
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V7h15v12zM9 10H7v2h2v-2zm0 4H7v2h2v-2zm4-4h-2v2h2v-2zm4 0h-2v2h2v-2zm-4 4h-2v2h2v-2zm4 0h-2v2h2v-2z"></path>
    </svg>
);

registerBlockType( metadata.name, {
	edit: Edit,
	icon: Icon,
	attributes: {
		phone: {
			type: 'string',
			default: '+254704282835'
		},
		email:{
			type: "string",
			default: "info@mbakapower.energy"
		}
	},
	save: ({ attributes }) => {
		const { phone, email } = attributes;
		return (
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
					</div>
				</div>
			</div>
		);
	},
} );
