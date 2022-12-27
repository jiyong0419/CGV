import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet />
    </div>
  );
};

export default Root;
