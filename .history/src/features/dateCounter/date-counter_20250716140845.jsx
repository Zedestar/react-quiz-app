import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: new Date("june 21 2027"),
};

const dateSlice = createSlice({
  name: "dateCounter",
  initialState,
  reducers: {
    incrementByStep: (state, action) => {
      state.value;
    },
  },
});
