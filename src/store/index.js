import { configureStore } from "@reduxjs/toolkit";
import logged from './reducers/logged.slice';

export default configureStore({
    reducer: {
        logged
    }
});