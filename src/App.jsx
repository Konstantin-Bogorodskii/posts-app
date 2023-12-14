import './styles/App.css';
import PostsList from './components/PostsList.jsx';

function App() {
	const posts = [
		{ id: 1, title: 'Пост 1', description: 'Описание посту под номером 1' },
		{ id: 2, title: 'Пост 2', description: 'Описание посту под номером 2' },
		{ id: 3, title: 'Пост 3', description: 'Описание посту под номером 3' }
	];
	
	return (
		<PostsList posts={posts} title='Список постов' />
	);
}

export default App;
