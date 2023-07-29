import { useContext } from "react";
import { NavBar } from "../../components/navbar/navbar";
import { VideoContext } from "../../context/videoContext";
import { useNavigate } from "react-router";
import "./watchLater.css";

export const WatchLater = () => {
  const { state, dispatch } = useContext(VideoContext);
  const filterData = state.video.filter((item) => item.watchLater);
  const navigate = useNavigate();

  return (
    <div className="watch-later-page home-page">
      <NavBar />
      <div className="watch-later-context">
        <h2>Watch Later</h2>
        <div className="watch-later-videos">
          {filterData.map((item) => {
            const {
              _id,
              title,
              views,
              thumbnail,
              category,
              creator,
              watchLater,
            } = item;
            return (
              <div className="selected-category-video category-item">
                <div className="thumbnail">
                  <img src={thumbnail} alt={title} />
                </div>
                <div
                  onClick={() =>
                    dispatch({ type: "watch_later", payload: _id })
                  }
                  className="watch-later-icon"
                >
                  {watchLater ? (
                    <i class="bi bi-clock-fill"></i>
                  ) : (
                    <i class="bi bi-clock"></i>
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
            );
          })}
        </div>
      </div>
    </div>
  );
};
