import { useEffect } from "react";
import Notification from "./components/Notification";
import LoginForm from "./components/LoginForm";
import PlaylistForm from "./components/PlaylistForm";
import Playlists from "./components/Playlists";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { localStorageUser } from "./reducers/loginReducer";

const App = () => {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.loggedUser);
  const notification = useSelector((state) => state.notification);

  useEffect(() => {
    dispatch(localStorageUser());
  }, []);

  return (
    <div>
      {notification && <Notification />}
      {loggedUser ? <Playlists /> : <LoginForm />}
      {loggedUser && <PlaylistForm />}
    </div>
  );
};

export default App;
