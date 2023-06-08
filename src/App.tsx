import Login from './components/Login/Login';
import './App.scss';
import Home from './components/Home/Home';
import { useDispatch } from 'react-redux';
import { getUsers } from './features/usersSlice'
import { getNotification } from './features/notificationsSlice'
import { useEffect, useRef } from 'react'
import { AppDispatch } from './store/store'
import Particle from './tools/ParticalComponent';
import { getMessage } from './features/messageSlice';
var isLogin: boolean = true;

function App() {
	const dispatch: AppDispatch = useDispatch()

	useEffect(() => {
		const fetchData = async () => {
			await dispatch(getUsers());
			await dispatch(getNotification());
			await dispatch(getMessage());
		};

		fetchData();
	}, []);
	return (
		<div className="App">
			<Particle />
			{!isLogin && <Login />}
			{
				isLogin && <Home />
			}
		</div>
	);
}

export default App;