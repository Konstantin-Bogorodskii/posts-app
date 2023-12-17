const PostItem = ({ post, postIndex, removePost }) => {
	return (
		<div className="post">
			<div className="post_content">
				<h3>
					{postIndex}. {post.title}
				</h3>
				<p>{post.description}</p>
			</div>
			<div className="post_buttons">
				<button onClick={() => removePost(post.id)}>Удалить</button>
			</div>
		</div>
	);
};

export default PostItem;
