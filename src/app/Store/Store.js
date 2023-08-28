
import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/PostSlice";
import theme from "./features/themeSlice";

const Store =configureStore({
    reducer:{
        post:postReducer,
        theme,
    }
})
export default Store