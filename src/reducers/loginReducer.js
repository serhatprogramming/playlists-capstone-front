import { createSlice } from "@reduxjs/toolkit";
import loginService from "../services/loginService";
import playlistService from "../services/playlistService";

const initialState = null;

const loginSlice = createSlice({
  name: "loggedUser",
  initialState,
  reducers: {
    login: (state, action) => {
      return action.payload;
    },
    logout: (state, action) => {
      return null;
    },
  },
});

const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;

export const loginUser = (credentials) => {
  return async (dispatch) => {
    try {
      const user = await loginService.initiateLogin(credentials);
      dispatch(login(user));
      window.localStorage.setItem("userData", JSON.stringify(user));
      playlistService.setAuthorization(user.token);
      console.log("login successful");
    } catch (error) {
      console.log("Wrong Credentials");
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    window.localStorage.removeItem("userData");
    dispatch(logout());
  };
};

export const localStorageUser = () => {
  return async (dispatch) => {
    const loggedUserJSON = window.localStorage.getItem("userData");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      dispatch(login(user));
    }
  };
};
