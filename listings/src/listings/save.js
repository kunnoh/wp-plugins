import { __ } from '@wordpress/i18n';
import { useBlockProps } from "@wordpress/block-editor";

export default function Save({attributes, setAttributes}){
    const blockProps = useBlockProps.save();
    const { posts = [] } = attributes;

    if (!posts || posts.length === 0) {
        return (
            <div {...blockProps}>
                <p>{__('No posts found.', 'textdomain')}</p>
            </div>
        );
    }

    let postsList = posts.map((post) => {
		return <li key={post.id}>{post.title.rendered}</li>
	});
	
    return (
        <div {...blockProps}>
            <div className='row'>
                <h2>{__('Listings', 'textdomain')}</h2>
                <ul>{postsList}</ul>
            </div>
        </div>
    );
}