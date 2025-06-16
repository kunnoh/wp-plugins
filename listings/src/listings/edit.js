import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useState, useEffect } from "@wordpress/element";
import apiFetch from "@wordpress/api-fetch";

import './editor.scss';

export default function Edit({attributes, setAttributes}) {
    const blockProps = useBlockProps();
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		apiFetch({path: '/wp/v2/posts'})
			.then((psts) => {
				setPosts(psts);
				setAttributes({ posts: psts }); // Save the posts data to block attributes so it can be used in Save
                setIsLoading(false);
				console.log(psts);
			})
	        .catch((error) => {
                console.error('Error fetching posts:', error);
                setIsLoading(false);
            });
	}, []);

	if(isLoading){
		return (
			<div  {...blockProps}>
				<p>
					{__('Loading...', 'textdomain')}
				</p>
			</div>
		);
	};

	let postsList = posts.map((post) => {
		return <li key={post.id}>{post.title.rendered}</li>;
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
