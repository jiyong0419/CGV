import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav style={{ width: "50vw" }}>
        <ul style={{ display: "flex", justifyContent: "space-between" }}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"user/login"}>Login</Link>
          </li>
          <li>
            <Link to={"user/logout"}>Logout</Link>
          </li>
          <li>
            <Link to={"user/join"}>Join</Link>
          </li>
          <li>
            <Link to={"user/mycgv"}>My CGV</Link>
          </li>
          <li>
            <Link to={"movies"}>Movies Chart</Link>
          </li>
          <li>
            <Link to={"theaters"}>Theaters</Link>
          </li>
          <li>
            <Link to={"reservation"}>reservation</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
