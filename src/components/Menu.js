import { logoutUser } from "../reducers/loginReducer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Menu = () => {
  const loggedUser = useSelector((state) => state.loggedUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="menu">
      <div className="menu-left">
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/about">About</Link>
          </li>
          {loggedUser && (
            <>
              <li className="menu-item">
                <Link to="/playlists">Playlists</Link>
              </li>
              <li className="menu-item">
                <Link to={"/users"}>Users</Link>
              </li>
              <li className="menu-item">
                <Link to={"/create"}>Add Playlist</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="menu-right">
        {loggedUser ? (
          <>
            <span className="user-greeting">Howdy, {loggedUser.username}!</span>
            <button onClick={handleLogout} className="logout-button">
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login" className="menu-item">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Menu;
