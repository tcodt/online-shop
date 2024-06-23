import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoggedIn: false,
    userInfo: null,
    userProducts: [],
    userToken: null,
  },
  reducers: {
    loginUser: (state, actions) => {
      state.user = actions.payload.body.name;
      state.userInfo = actions.payload.body;
      state.userProducts = actions.payload.product;
      state.userToken = actions.payload.token;
    },
    registerUser: () => {},
    logoutUser: () => {},
  },
});

export const { loginUser, registerUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
