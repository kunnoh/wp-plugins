import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';

const Save = () => null;

registerBlockType( metadata.name, {
	edit: Edit,
	save: Save,
} );
