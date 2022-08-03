import { configureStore } from "@reduxjs/toolkit";
import user from './reducers/user.slice';

export default configureStore({
    reducer: {
        user
    }
});