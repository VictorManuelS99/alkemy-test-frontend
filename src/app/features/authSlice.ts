import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type AuthState = {
  token: string;
  isLoggedIn: boolean;
};

const initialState: AuthState = {
  token: localStorage.getItem("token") || "",
  isLoggedIn: !!localStorage.getItem("token"),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<{ token: string }>) => ({
      token: action.payload.token,
      isLoggedIn: true,
    }),
    logout: () => ({ token: "", isLoggedIn: false }),
  },
});

export const { loginUser, logout } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
