import { Link, Outlet } from "react-router-dom";

const Movies = () => {
  return (
    <div>
      <h1>Movies Chart</h1>
      <ul>
        <li>
          <Link to="detail-view/movieId">Movies detail view</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Movies;
