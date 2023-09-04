import { logoutUser } from "../reducers/loginReducer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Menu = () => {
  const loggedUser = useSelector((state) => state.loggedUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const menuStyle = {
    display: "flex",
    justifyContent: "left",
    padding: "10px",
    gap: "10px",
  };

  return (
    <div style={menuStyle}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {loggedUser && <Link to="/playlists">Playlists</Link>}

      {loggedUser ? (
        <>
          <Link to="/users">Users</Link>
          <Link to="/create">Add Playlist</Link>
          <em>Howdy, {loggedUser.username}! </em>
          <button onClick={handleLogout}>Log Out</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Menu;
