import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

export default function Edit({attributes, setAttributes}) {
	const { itemsPerPage, orderBy, order } = attributes;

	// Fetch items
	const { items, isLoading } = useSelect(
		(select) => {
			const { getEntityRecords, hasFinishedResolution } = select('core');
			const query = {
				per_page: itemsPerPage,
				orderby: orderBy,
				order: order,
				status: 'publish'
			};

			const records = getEntityRecords();
			const loading = !hasFinishedResolution('getEntityRecords', [
				'',
				'project',
				query
			]);

			return {
				items: records || [],
				isLoading: loading
			};
		},
		[itemsPerPage, orderBy, order]
	);

	return (
		<div { ...useBlockProps() }>
			<p>Welcome to my site</p>
		</div>
	);
}
