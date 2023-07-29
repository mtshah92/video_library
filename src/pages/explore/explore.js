import { useContext, useState } from "react";
import { NavBar } from "../../components/navbar/navbar";
import { VideoContext } from "../../context/videoContext";
import { useNavigate } from "react-router";

import "./explore.css";

export const Explore = () => {
  const { state, dispatch } = useContext(VideoContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredData = state.video.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filteredData);
  return (
    <div className="explore-page">
      <NavBar />
      <div className="explore-content ">
        <h2>Explore</h2>
        <div className="search">
          <input
            placeholder="Search Video By Title"
            className="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
          <i class="bi bi-search"></i>
        </div>
        <div className="all-videos">
          {filteredData.length == 0 ? (
            <h3>No such Video Found</h3>
          ) : (
            filteredData.map((item) => {
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
            })
          )}
        </div>
      </div>
    </div>
  );
};
