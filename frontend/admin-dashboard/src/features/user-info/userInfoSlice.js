import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    name: "",
  },
  reducers: {
    getUserInfo: (state, actions) => {
      state.name = actions?.payload?.body?.name;
    },
    isUserLoggin: () => {},
  },
});

export const { getUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
