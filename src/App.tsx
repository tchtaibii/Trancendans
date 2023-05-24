import Login from './components/Login/Login';
import './App.scss';
import Home from './components/Home/Home';
import { useDispatch , useSelector } from 'react-redux';
import { getUsers } from './features/usersSlice'
import { getNotification } from './features/notificationsSlice'
import { useEffect } from 'react'
import { AppDispatch } from './store/store'
import Particle from './tools/ParticalComponent';

var isLogin: boolean = true;

function App() {
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getNotification());
  }, []);
  return (
    <div className="App">
      <Particle/>
      {!isLogin && <Login />}
      {
        isLogin && <Home />
      }
    </div>
  );
}

export default App;
