import { configureStore } from "@reduxjs/toolkit";
import userDatailsSlice from "../features/userDatailsSlice";

export const store = configureStore({
    reducer:{
        app:userDatailsSlice,
    }
})