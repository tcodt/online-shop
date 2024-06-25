import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: "",
  name: "",
  phone: "",
  isLoggin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      if (action.payload?.role === "ADMIN") {
        state.name = action.payload?.name;
        state.isLoggin = true;
        state.role = "ADMIN";
        return;
      }
      if (action.payload?.role === "AUTHOR") {
        state.name = action.payload?.name;
        state.isLoggin = true;
        state.role = "AUTHOR";
        return;
      }
    },
    registerUser: () => {},
    logoutUser: (state) => {
      state.isLoggin = false;
      state.name = "";
      state.phone = "";
      state.role = "";
    },
  },
});

export const { loginUser, registerUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
