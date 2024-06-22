import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    userInfos: {
      phone: "",
      password: "",
    },
  },
  reducers: {
    logFunc: (state, actions) => {
      console.log("Log state: ", state);
      console.log("Log action: ", actions.payload);
    },
  },
});

export const { logFunc } = userInfoSlice.actions;
export default userInfoSlice.reducer;
