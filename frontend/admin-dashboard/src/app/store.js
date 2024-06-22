import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "../features/user-info/userInfoSlice";

export const store = configureStore({
  reducer: {
    userInfoReducer,
  },
});
