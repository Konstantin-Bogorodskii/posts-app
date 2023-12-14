import React from 'react';
import PostItem from './PostItem.jsx';

const PostsList = ({ posts, title }) => {
	return (
		<>
			<h2 className='posts_title'>{title}</h2>
			{posts.map(post => {
				return <PostItem key={post.id} post={post} />;
			})}
		</>
	);
};

export default PostsList;