import { Outlet, Link } from "react-router-dom";

const Mycgv = () => {
  return (
    <div>
      <h1>My CGV</h1>
      <ul>
        <li>
          <Link to={"reserve-check"}>reserve-check</Link>
        </li>
        <li>
          <Link to={"edit-myinfo"}>edit-myinfo</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default Mycgv;
