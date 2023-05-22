import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../features/usersSlice"
import notificationReducer from "../features/notificationsSlice"

const store = configureStore({
    reducer:{
        users: userReducer,
        notification: notificationReducer
    },
})
export default  store;
export type AppDispatch = typeof store.dispatch