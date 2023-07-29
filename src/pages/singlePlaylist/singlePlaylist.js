import { useNavigate, useParams } from "react-router";
import { NavBar } from "../../components/navbar/navbar";
import { useContext } from "react";
import { VideoContext } from "../../context/videoContext";

export const SinglePlaylist = () => {
  const { playlistName } = useParams();
  const { state, dispatch } = useContext(VideoContext);
  const navigate = useNavigate();
  const filrerData = state.video.filter((item) =>
    item.playlist?.includes(playlistName)
  );
  const {
    _id,
    title,
    views,
    thumbnail,
    category,
    creator,
    watchLater,
    src,
    chips,
  } = filrerData[0];

  return (
    <div className="single-playlist-page home-page">
      <NavBar />
      <div className="">
        /<h2>{playlistName}</h2>
        <div>
          <div className="selected-category-video category-item">
            <div className="thumbnail">
              <img src={thumbnail} alt={title} />
            </div>
            <div
              onClick={() => dispatch({ type: "watch_later", payload: _id })}
              className="watch-later-icon"
            >
              {watchLater ? (
                <i class="bi bi-clock"></i>
              ) : (
                <i class="bi bi-clock-fill"></i>
              )}
            </div>
            <div
              key={_id}
              className="video-detail"
              onClick={() => navigate(`/video/${_id}`)}
            >
              <img src={thumbnail} className="creator-img" alt={title} />
              <div className="abt-vid">
                <p>{title}</p>
                <p>{category}</p>
                <p>
                  {views} views|{creator}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
