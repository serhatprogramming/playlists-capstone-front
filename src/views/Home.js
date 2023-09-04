import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="home-content">
        <h2 className="home-title">Playlist Application</h2>
        <p className="home-description">
          Discover and create playlists for every mood and occasion. Our app
          offers an extensive music library, easy playlist customization, and
          seamless sharing with fellow music enthusiasts. Start your musical
          journey today!
        </p>
        <div>
          <button
            onClick={() => navigate("/playlists")}
            className="explore-button"
          >
            Explore Playlists
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
