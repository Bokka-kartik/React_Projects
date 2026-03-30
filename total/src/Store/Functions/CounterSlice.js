import { createSlice } from "@reduxjs/toolkit";

//actually funtionality done by the slice is done here 
const process = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment:(state)=>{state.value+=1},
    decrement:(state)=>{state.value-=1}
  },
});

export const {increment,decrement}=process.actions;

export default process.reducer;


