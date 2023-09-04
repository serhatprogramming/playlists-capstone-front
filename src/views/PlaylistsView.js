import Section from "../components/Section";
import Playlist from "../components/Playlist";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  likePlaylistAction,
  deletePlaylistAction,
  fetchPlaylists,
} from "../reducers/playlistReducer";

const PlaylistsView = () => {
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

  return (
    <>
      <h2>Playlists</h2>
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

export default PlaylistsView;
