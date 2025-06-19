import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import Edit from './edit';
import metadata from './block.json';

const Icon = ("");

registerBlockType( metadata, {
	edit: Edit,
	save: () => null,
	icon: 'desktop',
});
