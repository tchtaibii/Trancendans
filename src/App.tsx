import Login from './components/Login/Login';
import './App.scss';
import Home from './components/Home/Home';
import { RecoilRoot } from 'recoil';
import { useDispatch , useSelector } from 'react-redux';
import { getUsers } from './features/usersSlice'
import { getNotification } from './features/notificationsSlice'
import { useEffect } from 'react'
import { AppDispatch } from './store/store'

var isLogin: boolean = true;

function App() {
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getNotification());
  }, []);
  return (
    <div className="App">
      {!isLogin && <Login />}
      {
        isLogin &&
          <RecoilRoot>
            <Home />
          </RecoilRoot>
      }
    </div>
  );
}

export default App;
