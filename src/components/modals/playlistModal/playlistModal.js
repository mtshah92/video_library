import { useContext, useState } from "react";
import { VideoContext } from "../../../context/videoContext";
import "./playlistModal.css";

export const PlaylistModal = ({ item }) => {
  const {
    playlistModal,
    setPlaylistModal,
    newPlaylist,
    setNewPlaylist,
    dispatch,
  } = useContext(VideoContext);

  return (
    playlistModal && (
      <div className="playlistModal">
        <h3>Create New Playlist</h3>
        <div onClick={() => setPlaylistModal(false)}>
          <i class="bi bi-x-circle"></i>
        </div>
        <input
          placeholder="New Playlist"
          onChange={(e) => setNewPlaylist(e.target.value)}
        />
        <div>
          <button
            onClick={() =>
              dispatch({ type: "new_playlist", payload: newPlaylist })
            }
          >
            Submit
          </button>
        </div>
      </div>
    )
  );
};
