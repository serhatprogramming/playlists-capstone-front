const Playlist = ({ playlist, handleLike, username, handleRemove }) => {
  const addLike = () => {
    handleLike(playlist.id, playlist.likes + 1);
  };

  const removePlaylist = () => {
    if (window.confirm(`Remove Playlist ${playlist.name}?`)) {
      handleRemove(playlist.id);
    }
  };

  return (
    <div>
      <div>
        <strong>
          {playlist.name} by {playlist.creator}
        </strong>
      </div>
      <div>{playlist.numOfSongs} songs</div>
      <div className="playlist-likes">
        {playlist.likes} likes{" "}
        <button onClick={addLike} className="like-button">
          Like
        </button>
      </div>
      <div className="playlist-owner">
        Added by <em data-testid="username-id">{playlist.user.username}</em>{" "}
        {playlist.user.username === username && (
          <button onClick={removePlaylist} className="remove-button">
            Remove the playlist
          </button>
        )}
      </div>
    </div>
  );
};

export default Playlist;
