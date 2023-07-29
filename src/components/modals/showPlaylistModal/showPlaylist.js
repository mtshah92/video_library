import { useContext } from "react";
import { VideoContext } from "../../../context/videoContext";
import "./showPlaylist.css";

export const ShowPlaylistModal = ({ data }) => {
  const { state, dispatch, newPlaylist, setNewPlaylist, showPlaylist } =
    useContext(VideoContext);
  // console.log(data);
  return (
    showPlaylist && (
      <div className="video-page-show-playlist">
        <div className="create-playlist">
          <input
            placeholder="Enter Tite of Playlist"
            onChange={(e) => setNewPlaylist(e.target.value)}
          />
          <div>
            <button
              onClick={() =>
                dispatch({
                  type: "new_playlist",
                  payload: data,
                  name: newPlaylist,
                })
              }
              className="btn-create-playlist"
            >
              Create New Playlist
            </button>
          </div>
        </div>
        <hr />

        {state.playlist?.map((item) => (
          <div className="playlist-data">
            {" "}
            <p
              className="playlist-item"
              onClick={() =>
                dispatch({ type: "add_playlist", payload: data, name: item })
              }
            >
              {item}
            </p>
            <i
              class="bi bi-x"
              onClick={() =>
                dispatch({ type: "delete_playlist", payload: item })
              }
            ></i>
          </div>
        ))}
      </div>
    )
  );
};
