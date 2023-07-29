import { useNavigate } from "react-router";
import "./navbar.css";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar">
        <div className="navbar-item" onClick={() => navigate("/")}>
          <i class="bi bi-house-door"></i>Home
        </div>
        <div className="navbar-item" onClick={() => navigate("/explore")}>
          <i class="bi bi-compass-fill"></i> Explore
        </div>
        <div className="navbar-item" onClick={() => navigate("/playlists")}>
          <i class="bi bi-music-note-list"></i> Playlists
        </div>
        <div className="navbar-item" onClick={() => navigate("/watchLater")}>
          <i class="bi bi-clock-fill"></i> Watch Later
        </div>
      </div>
    </div>
  );
};
