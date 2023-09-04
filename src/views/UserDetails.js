import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UserDetails = () => {
  const users = useSelector((state) => state.users);
  const id = useParams().id;
  const user = users.find((user) => user.id === id);

  return (
    <div>
      <h3>{user.name}</h3>
      <div>Username: {user.username}</div>
      <div>Number of Playlists: {user.playlists.length}</div>
      <h3>Playlists</h3>
      <ul>
        {user.playlists.map((playlist) => (
          <li key={playlist.id}>
            {playlist.name}. {playlist.numOfSongs} songs. {playlist.likes}{" "}
            likes.
          </li>
        ))}
      </ul>
      <Link to={"/users"}>Back To User List</Link>
    </div>
  );
};

export default UserDetails;
