import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../reducers/loginReducer";

const store = configureStore({
  reducer: {
    loggedUser: loginReducer,
  },
});

export default store;
