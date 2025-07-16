import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: new Date("june 21 2027"),
};

const dateSlice = createSlice({
  name: "dateCounter",
  initialState,
  reducers: {
    incrementByStep: (state, action) => {
      const currentDate = state.value.getDate()
      
      += action.payload;
    },
    decrementByStep: (state, action) => {
      state.value.getDate -= action.payload;
    },
  },
});

export const { incrementByStep, decrementByStep } = dateSlice.actions;
export default dateSlice.reducer;
