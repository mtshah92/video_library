import { useNavigate, useParams } from "react-router";
import { NavBar } from "../../components/navbar/navbar";
import { videos } from "../../db/videos";
import "./category.css";
import { useContext } from "react";
import { VideoContext } from "../../context/videoContext";

export const Category = () => {
  const { state, dispatch } = useContext(VideoContext);
  const { categoryName } = useParams();
  const selectedCategory = state?.video?.filter(
    ({ category }) => category === categoryName
  );
  const navigate = useNavigate();
  return (
    <div className="category-page home-page">
      <NavBar />
      <div className="category-video">
        <h2>{categoryName}</h2>
        <div className="selected-category-list category-list">
          {selectedCategory.map((item) => {
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
            );
          })}
        </div>
      </div>
    </div>
  );
};
