import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
    name: 'loader',
    initialState: true,
    reducers: {
        setLoader: (state, action) => action.payload,
    }
});

export const { setLoader } = loaderSlice.actions;

export default loaderSlice.reducer;