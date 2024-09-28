import { configureStore } from "@reduxjs/toolkit";
import  TodoSlicer  from "../reducer/TodoList";

export const store = configureStore({
    reducer:{
        TodoSlicer,
    }
})