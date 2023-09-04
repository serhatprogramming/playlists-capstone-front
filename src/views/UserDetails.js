import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UserDetails = () => {
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
      <ul>
        {user.playlists.map((playlist) => (
          <li key={playlist.id} className="user-details-text">
            {playlist.name}. {playlist.numOfSongs} songs. {playlist.likes}{" "}
            likes.
          </li>
        ))}
      </ul>
      <Link to={"/users"} className="user-details-link">
        Back To User List
      </Link>
    </div>
  );
};

export default UserDetails;
