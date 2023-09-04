import { useEffect } from "react";
import Notification from "./components/Notification";
import Footer from "./components/Footer";

import Home from "./views/Home";
import About from "./views/About";
import Menu from "./components/Menu";
import Users from "./views/Users";
import LoginView from "./views/LoginView";
import PlaylistsView from "./views/PlaylistsView";
import PlaylistFormView from "./views/PlaylistFormView";

import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { localStorageUser } from "./reducers/loginReducer";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.loggedUser);
  const notification = useSelector((state) => state.notification);

  useEffect(() => {
    dispatch(localStorageUser());
  }, []);

  return (
    <Router>
      {notification && <Notification />}
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/create"
          element={loggedUser ? <PlaylistFormView /> : <Home />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={!loggedUser ? <LoginView /> : <Home />} />
        <Route
          path="/playlists"
          element={loggedUser ? <PlaylistsView /> : <LoginView />}
        />
        <Route path="/users" element={<Users />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
