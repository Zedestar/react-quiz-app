import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import dateCounter from "../features/dateCounter/date-counter";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    dateCounter: dateCounter,
  },
});

export default store;
