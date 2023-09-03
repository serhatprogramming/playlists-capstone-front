import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../reducers/loginReducer";
import playlistReducer from "../reducers/playlistReducer";
import notificationReducer from "../reducers/notificationReducer";

const store = configureStore({
  reducer: {
    loggedUser: loginReducer,
    playlists: playlistReducer,
    notification: notificationReducer,
  },
});

export default store;
