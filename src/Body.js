import Header from "./Header.js";
import MainContainer from "./MainContainer.js";
import { Outlet } from "react-router";
import SideBar from "./SideBar.js";
import { useSelector } from "react-redux";

const Body = () => {
  const darkmode = useSelector((store) => {
    return store.colorMode.darkMode;
  })
  return (
    <div className={(darkmode == true) ? "bg-gray-800":"bg-white"}>
        <Header />
        <div className="flex">
          <SideBar />
          <Outlet />
        </div>
      </div>
    );
}

export default Body;