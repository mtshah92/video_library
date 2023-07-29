import { useNavigate } from "react-router";
import { NavBar } from "../../components/navbar/navbar";
import { categories } from "../../db/categories";
import "./home.css";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <NavBar />
      <div className="home">
        <h2>Categories</h2>
        <div className="category-list">
          {categories.map((item) => {
            const { _id, thumbnail, src, category } = item;
            return (
              <div
                key={_id}
                className="category-item"
                onClick={() => navigate(`/category/${category}`)}
              >
                <img src={thumbnail} className="category-thumbnail" />
                <p className="category-name">{category}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
