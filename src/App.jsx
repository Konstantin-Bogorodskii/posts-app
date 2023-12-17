import './styles/App.css';
import PostsList from './components/PostsList.jsx';
import PostForm from './components/PostForm.jsx';
import { useState } from 'react';

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'Пост 1', description: 'Описание посту под номером 1' },
		{ id: 2, title: 'Пост 2', description: 'Описание посту под номером 2' },
		{ id: 3, title: 'Пост 3', description: 'Описание посту под номером 3' }
	]);

	const createPost = post => {
		setPosts([...posts, post]);
	};

	const removePost = postId => {
		setPosts(posts.filter(post => post.id !== postId));
	};

	return (
		<>
			<PostForm createPost={createPost} />
			<PostsList posts={posts} removePost={removePost} title="Список постов" />
		</>
	);
}

export default App;
