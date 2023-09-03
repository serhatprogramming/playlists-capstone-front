import { useState, useEffect } from "react";
import Playlist from "./components/Playlist";
import Notification from "./components/Notification";
import Section from "./components/Section";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";

import {
  localStorageUser,
  loginUser,
  logoutUser,
} from "./reducers/loginReducer";

import {
  fetchPlaylists,
  likePlaylistAction,
  deletePlaylistAction,
  createPlaylistAction,
} from "./reducers/playlistReducer";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState(null);
  const [playlistName, setPlaylistName] = useState("");
  const [creator, setCreator] = useState("");
  const [numOfSongs, setNumOfSongs] = useState("");
  const [likes, setLikes] = useState("");

  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.loggedUser);
  const playlists = useSelector((state) => state.playlists);

  useEffect(() => {
    dispatch(fetchPlaylists());
  }, []);

  useEffect(() => {
    dispatch(localStorageUser());
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    dispatch(loginUser({ username, password }));
    setUsername("");
    setPassword("");
  };

  const notify = ({ message, type }) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 10000);
  };

  const userLoginForm = () => (
    <form onSubmit={handleLogin}>
      <h3>Log in to playlist application</h3>
      <div>
        username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  );

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const displayPlaylists = () => (
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

  const addPlaylistForm = () => (
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

  const handleLike = (id, likes) => {
    dispatch(likePlaylistAction(id, likes));
  };

  const handleRemove = async (id) => {
    dispatch(deletePlaylistAction(id, loggedUser));
  };

  return (
    <div>
      {notification && <Notification notification={notification} />}
      {loggedUser ? displayPlaylists() : userLoginForm()}
      {loggedUser && addPlaylistForm()}
    </div>
  );
};

export default App;
