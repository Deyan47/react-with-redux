import { createSlice, configureStore } from "@reduxjs/toolkit";

const initalAuthState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initalAuthState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
