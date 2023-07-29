import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./pages/home/home";
import { Category } from "./pages/category/category";
import { Video } from "./pages/video/video";
import { Explore } from "./pages/explore/explore";
import { WatchLater } from "./pages/watchLater/watchLater";
import { Playlist } from "./pages/playlist/playlist";
import { SinglePlaylist } from "./pages/singlePlaylist/singlePlaylist";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/video/:videoId" element={<Video />} />
        <Route path="/playlists/:playlistName" element={<SinglePlaylist />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/watchLater" element={<WatchLater />} />
        <Route path="/playlists" element={<Playlist />} />
      </Routes>
    </div>
  );
}

export default App;
