import { useState } from "react";
import { createPlaylistAction } from "../reducers/playlistReducer";
import { useSelector, useDispatch } from "react-redux";

const PlaylistFormView = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [creator, setCreator] = useState("");
  const [numOfSongs, setNumOfSongs] = useState("");
  const [likes, setLikes] = useState("");

  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.loggedUser);

  const handleAddPlaylist = async (event) => {
    event.preventDefault();
    dispatch(
      createPlaylistAction({
        name: playlistName,
        creator,
        numOfSongs: numOfSongs === "" || numOfSongs < 0 ? 0 : numOfSongs,
        likes: likes === "" || likes < 0 ? 0 : likes,
        user: loggedUser,
      })
    );
    setPlaylistName("");
    setCreator("");
    setNumOfSongs("");
    setLikes("");
  };

  return (
    <form onSubmit={handleAddPlaylist}>
      <h3>Add Playlists</h3>
      <div>
        Playlist Name:
        <input
          type="text"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          data-testid="playlist-name"
        />
      </div>
      <div>
        Creator:
        <input
          type="text"
          value={creator}
          onChange={(e) => setCreator(e.target.value)}
          data-testid="creator"
        />
      </div>
      <div>
        Number of Songs:
        <input
          type="number"
          value={numOfSongs}
          onChange={(e) => setNumOfSongs(e.target.value)}
          data-testid="songs"
        />
      </div>
      <div>
        Likes:
        <input
          type="number"
          value={likes}
          onChange={(e) => setLikes(e.target.value)}
          data-testid="likes"
        />
      </div>
      <button data-testid="add-playlist-button" type="submit">
        Add Playlist
      </button>
    </form>
  );
};

export default PlaylistFormView;
