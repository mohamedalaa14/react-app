
import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/PostSlice"
const Store =configureStore({
    reducer:{
        post:postReducer
    }
})
export default Store