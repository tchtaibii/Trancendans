import Login from './components/Login/Login';
import './App.scss';
import Home from './components/Home/Home';
import { RecoilRoot } from 'recoil';
// import { Provider } from 'react-redux'
// import { configureStore } from '@reduxjs/toolkit';
// import profileSlice from './StateManager/Profile'

// const store = configureStore({
//   reducer: {
//     profile: profileSlice,
//   }
// })


var isLogin:boolean = true;

function App() {
  return (
    <div className="App">
      {!isLogin &&  <Login />}
      {
        isLogin &&
        // <Provider store={store}>
        <RecoilRoot>
          <Home/>
        </RecoilRoot>
        // </Provider>
      }
    </div>
  );
}

export default App;
