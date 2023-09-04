import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../reducers/usersReducer";

const UserDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const users = useSelector((state) => state.users);
  const id = useParams().id;
  const user = users.find((user) => user.id === id);

  return (
    <div className="user-details-container">
      <h3 className="user-details-title">{user.name}</h3>
      <div className="user-details-text">Username: {user.username}</div>
      <div className="user-details-text">
        Number of Playlists: {user.playlists.length}
      </div>
      <h3 className="user-details-title">Playlists</h3>
      <table className="user-details-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Songs</th>
            <th>Likes</th>
          </tr>
        </thead>
        <tbody>
          {user.playlists.map((playlist) => (
            <tr key={playlist.id}>
              <td>{playlist.name}</td>
              <td>{playlist.numOfSongs}</td>
              <td>{playlist.likes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={"/users"} className="user-details-link">
        Back To User List
      </Link>
    </div>
  );
};

export default UserDetails;
