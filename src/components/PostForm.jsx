import ReusableInput from './reusable/input/ReusableInput.jsx';
import ReusableButton from './reusable/button/ReusableButton.jsx';
import { useState } from 'react';
import { v4 as getUUID } from 'uuid';

const PostForm = ({ createPost }) => {
	const [post, setPost] = useState({ title: '', description: '' });
	const handleCreatePost = e => {
		e.preventDefault();

		if (!post.title || !post.description) return;

		const id = getUUID();
		createPost({ id, ...post });

		setPost({ title: '', description: '' });
	};

	const handleChange = e => {
		e.stopPropagation();

		const value = e.target.value;
		const name = e.target.name;

		setPost({
			...post,
			[name]: value
		});
	};

	const isButtonDisabled = (() => {
		return !post.title || !post.description;
	})();

	return (
		<form>
			<ReusableInput
				value={post.title}
				onChange={handleChange}
				type="text"
				name="title"
				placeholder="Введите название"
			/>
			<ReusableInput
				value={post.description}
				onChange={handleChange}
				type="text"
				name="description"
				placeholder="Введите описание"
			/>
			<ReusableButton disabled={isButtonDisabled} onClick={handleCreatePost}>
				Создать пост
			</ReusableButton>
		</form>
	);
};

export default PostForm;
