import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};
export default SharedLayout;
