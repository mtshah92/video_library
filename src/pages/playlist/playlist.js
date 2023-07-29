import { useContext } from "react";
import { NavBar } from "../../components/navbar/navbar";
import { VideoContext } from "../../context/videoContext";
import { useNavigate } from "react-router";
import "./playlist.css";
import { PlaylistModal } from "../../components/modals/playlistModal/playlistModal";
export const Playlist = () => {
  const { state, playlistModal, setPlaylistModal } = useContext(VideoContext);
  const navigate = useNavigate();
  return (
    <div className="playlist-page home-page">
      <NavBar />
      <div className="playlist-content">
        <h3>Playlists</h3>
        <div className="list-playlist selected-category-list category-list">
          {state.playlist.map((item) => (
            <div
              className="category-item"
              onClick={() => navigate(`/playlists/${item}`)}
            >
              <img
                width="300"
                height="175"
                src="https://picsum.photos/200/300"
              />
              <h3>{item}</h3>
            </div>
          ))}
        </div>
        {playlistModal && <PlaylistModal />}
        <div onClick={() => setPlaylistModal(true)}>
          <i class="bi bi-plus-circle"></i>
        </div>
      </div>
    </div>
  );
};
