import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user-slice/user-slice";

export const store = configureStore({
  reducer: {
    userReducer,
  },
});
