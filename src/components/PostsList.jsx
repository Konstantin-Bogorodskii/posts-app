import React from 'react';
import PostItem from './PostItem.jsx';

const PostsList = ({ posts, title, removePost }) => {
	return (
		<>
			<h2 className="posts_title">{title}</h2>
			{posts.length ? (
				posts.map((post, postIndex) => {
					return (
						<PostItem
							post={post}
							removePost={removePost}
							postIndex={postIndex + 1}
							key={post.id}
						/>
					);
				})
			) : (
				<h1 style={{ textAlign: 'center' }}>Список постов пуст!</h1>
			)}
		</>
	);
};

export default PostsList;
