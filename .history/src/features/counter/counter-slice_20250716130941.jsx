import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};


const counterSlice = createSlice({
    name: "counter",
    state : initialState,
    reducers : {
        increment: (state) = {
            state.value += 1,
        }
    }
})