import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Users = () => {
  const users = useSelector((state) => state.users);

  if (users.length === 0) {
    return null;
  }

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
