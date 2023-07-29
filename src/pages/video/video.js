import { useNavigate, useParams } from "react-router";
import { NavBar } from "../../components/navbar/navbar";
import { useContext } from "react";
import { VideoContext } from "../../context/videoContext";
import { ShowPlaylistModal } from "../../components/modals/showPlaylistModal/showPlaylist";
import "./video.css";

export const Video = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const { state, dispatch, setShowPlaylistModal, showPlaylist } =
    useContext(VideoContext);
  const showVideo = state?.video?.filter((item) => item._id == videoId);
  const otherVideos = state?.video?.filter((item) => item._id !== videoId);
  // console.log(showVideo);
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
  } = showVideo[0];

  return (
    <div className="video-page">
      <NavBar />
      <div className="video-content">
        <iframe src={src} key={_id} className="show-video" />
        <div className="video-info">
          <div className="video-info-part">
            <img src={thumbnail} alt={title} className="creator-img" />
            <p>{title}</p>
          </div>
          <div className="video-actions">
            <div
              onClick={() => dispatch({ type: "watch_later", payload: _id })}
              className="action-watch-later"
            >
              {watchLater ? (
                <i class="bi bi-clock"></i>
              ) : (
                <i class="bi bi-clock-fill"></i>
              )}
            </div>
            <div
              className="action-playlist"
              onClick={() => setShowPlaylistModal(!showPlaylist)}
            >
              <i class="bi bi-music-note-list"></i>
            </div>
            <div className="action-notes">
              <i class="bi bi-card-text"></i>
            </div>
          </div>
        </div>
        <ShowPlaylistModal data={_id} />
        {/* <setShowPlaylistModal item={showVideo[0]} /> */}
        <div className="my-notes">
          <hr />
          <h3>My Notes</h3>
        </div>
      </div>
      <div className="more-videos">
        <h3>More Videos</h3>
        {otherVideos.map((item) => {
          const { _id, title, views, thumbnail, category, creator } = item;

          return (
            <div className="selected-category-video category-item">
              <div className="thumbnail">
                <img src={thumbnail} alt={title} />
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
          );
        })}
      </div>
    </div>
  );
};
