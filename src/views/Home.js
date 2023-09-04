import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Playlist Application</h2>
      <p>
        Discover and create playlists for every mood and occasion. Our app
        offers an extensive music library, easy playlist customization, and
        seamless sharing with fellow music enthusiasts. Start your musical
        journey today!
      </p>
      <div>
        <button onClick={() => navigate("/playlists")}>
          Explore Playlists
        </button>
      </div>
    </div>
  );
};

export default Home;
