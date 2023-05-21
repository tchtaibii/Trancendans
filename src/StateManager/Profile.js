// import { createSlice } from "@reduxjs/toolkit";
// // import { user } from './StateM'
// export const profileSlice = createSlice({
//     name: 'profile',
//     initialState: {
//         value: {
//             login: "tchtaibi",
//             level: 6.9,
//             lastGame: 'won',
//             avatar: "https://cdn.intra.42.fr/users/d00282f766753d56196928b23a2f9b00/tchtaibi.jpg",
//             points: 11660,
//         }
//     },
//     reducers: {
//         profile : (state, action) => {
//             state.value = action.payload;
//         },
//     }
// });
// export default profileSlice.reducer;

const createStore = require('redux').createStore;
const applyMiddleware = require('redux').applyMiddleware;
const axios = require('axios');
const thunk = require('redux-thunk');

const initialState = {
  loading: false,
  users: [],
  error: ''
};

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUserFailed = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_USERS_SUCCESS: {
      return {
        loading: false,
        users: action.payload,
        error: '',
      };
    }
    case FETCH_USERS_FAILED: {
      return {
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

const FetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUserFailed(error));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(FetchUsers());
