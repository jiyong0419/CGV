import { Link, Outlet } from "react-router-dom";
const Theaters = () => {
  return (
    <div>
      <h1>Theaters</h1>
      <ul>
        <li>
          <Link to={"theaterCode"}>Theater</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Theaters;
