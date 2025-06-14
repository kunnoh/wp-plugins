import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import { apiFetch } from "@wordpress/api-fetch";
import { useState, useEffect } from "@wordpress/element";

export default function Edit() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		apiFetch({ path: '/wp/v2/posts'})
		.then((posts) => {
			setPosts(posts);
			console.log(posts);
		});
	}, []);

	if(!posts){
		return (
			<p {...useBlockProps()}>
				{__('loading...')}
			</p>
		)
	}

	let postsList = posts.map((post) => {
		return <li key={post.id}>{post.title.rendered}</li>
	})
	return (
		<div { ...useBlockProps() }>
			<div className='row'>
				<h2>Listings</h2>
				<ul>{postsList}</ul>
			</div>
		</div>
	);
}
