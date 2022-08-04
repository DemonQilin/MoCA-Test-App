import { configureStore } from "@reduxjs/toolkit";
import user from './reducers/user.slice';
import loader from './reducers/loader.slice';

export default configureStore({
    reducer: {
        user,
        loader
    }
});