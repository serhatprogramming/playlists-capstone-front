import { createSlice } from "@reduxjs/toolkit";
import playlistService from "../services/playlistService";

const initialState = [];

const playlistSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    getPlaylists: (state, action) => {
      return action.payload;
    },
    setPlaylists: (state, action) => {
      return action.payload;
    },
    createPlaylist: (state, action) => {
      state.push(action.payload);
    },
    likePlaylist: (state, action) => {
      return [...state].map((playlist) =>
        playlist.id === action.payload.id
          ? { ...playlist, likes: action.payload.likes }
          : playlist
      );
    },
    deletePlaylist: (state, action) => {
      return [...state].filter((playlist) => playlist.id !== action.payload);
    },
  },
});

export const {
  getPlaylists,
  setPlaylists,
  createPlaylist,
  likePlaylist,
  deletePlaylist,
} = playlistSlice.actions;

export default playlistSlice.reducer;

export const fetchPlaylists = () => {
  return async (dispatch) => {
    const playlists = await playlistService.getPlaylists();
    dispatch(setPlaylists(playlists));
  };
};

export const likePlaylistAction = (id, likes) => {
  return async (dispatch) => {
    await playlistService.updatePlaylist(id, { likes });
    dispatch(likePlaylist({ id, likes }));
  };
};

export const deletePlaylistAction = (id, user) => {
  return async (dispatch) => {
    try {
      playlistService.setAuthorization(user.token);
      await playlistService.removePlaylist(id);
      console.log("Delete successfull");
      dispatch(deletePlaylist(id));
    } catch (error) {
      console.log("Error deleting playlist");
    }
  };
};

export const createPlaylistAction = ({
  name,
  creator,
  numOfSongs,
  likes,
  user,
}) => {
  return async (dispatch) => {
    try {
      playlistService.setAuthorization(user.token);
      const playlist = await playlistService.addNewPlaylist({
        name,
        creator,
        numOfSongs,
        likes,
      });
      playlist.user = user;
      console.log("playlist: ", playlist);
      dispatch(createPlaylist(playlist));
      console.log("new playlist: ", playlist);
    } catch (error) {
      console.log("Error creating playlist");
    }
  };
};
