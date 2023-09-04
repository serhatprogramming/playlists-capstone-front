import Section from "./Section";
import Playlist from "./Playlist";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  likePlaylistAction,
  deletePlaylistAction,
  fetchPlaylists,
} from "../reducers/playlistReducer";
import { logoutUser } from "../reducers/loginReducer";

const Playlists = () => {
  useEffect(() => {
    dispatch(fetchPlaylists());
  }, []);

  const playlists = useSelector((state) => state.playlists);
  const loggedUser = useSelector((state) => state.loggedUser);
  const dispatch = useDispatch();

  const handleLike = (id, likes) => {
    dispatch(likePlaylistAction(id, likes));
  };

  const handleRemove = async (id) => {
    dispatch(deletePlaylistAction(id, loggedUser));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <h2>Playlist Application</h2>
      <em>Howdy, {loggedUser.username}! </em>
      <button onClick={handleLogout}>Log Out</button>
      <h3>Playlists</h3>
      {playlists.map((playlist) => (
        <Section
          componentTitle={playlist.name + " by " + playlist.creator}
          key={playlist.id}
        >
          <Playlist
            playlist={playlist}
            handleLike={handleLike}
            handleRemove={handleRemove}
            username={loggedUser.username}
          />
        </Section>
      ))}
    </>
  );
};

export default Playlists;
