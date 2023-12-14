const PostItem = ({ post }) => {
	return (
		<div className='post'>
			<div className='post_content'>
				<h3>{post.title}</h3>
				<p>{post.description}</p>
			</div>
			<div className='post_buttons'>
				<button>Удалить</button>
			</div>
		</div>
	);
};

export default PostItem;