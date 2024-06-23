import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth-slice/auth-slice";

export const store = configureStore({
  reducer: {
    authReducer,
  },
});
