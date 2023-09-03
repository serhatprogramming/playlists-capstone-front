import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../reducers/loginReducer";
import playlistReducer from "../reducers/playlistReducer";

const store = configureStore({
  reducer: {
    loggedUser: loginReducer,
    playlists: playlistReducer,
  },
});

export default store;
