import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Functions/CounterSlice"
//store every other individual slice(which inturn holds the funtions that are required for performing the operation)

export const store=configureStore({
    reducer:{
        counter:counterReducer,
    }
})


