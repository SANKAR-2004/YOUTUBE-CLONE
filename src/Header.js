import { useDispatch } from "react-redux";
import { toggleNavbar } from "../Redux Store/SideBarSlice";
import SideBar from "./SideBar.js";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router";
import { changeMode } from "../Redux Store/DarkModeSlice.js";
import SearchBar from "./SearchBar.js";


const Header = () => {
  const darkmode = useSelector((store) => {
    return store.colorMode.darkMode;
  });
  const navigate = useNavigate();
 
  //const urlKeyword = searchParams.get("k");
 
  /*
  {
    i:["iphone","iphone 12","iphone status"]
    vij:["vijay","vijay movies","vijay songs"]
  }
  */

    const dispatch = useDispatch();
    function handleClick() {
        dispatch(toggleNavbar());
   }
   
 
  //UseEffect for url and textbox sync
  


    return (
      <div
        className={` sticky top-0 z-10 ${
          darkmode == true
            ? "bg-gray-800 border-b-2 border-white/30"
            : "bg-white"
        }`}
      >
        <div className="flex justify-between w-screen shadow-lg md:shadow-2xl ">
          <div className="flex p-2.5 shadow-2xl items-center">
            <img
              className="w-10 h-8 cursor-pointer mx-2"
              alt="Navigation Bar"
              onClick={handleClick}
              src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png"
            />
            <img
              className="w-24 hidden md:block"
              alt="Youtube-Logo"
              src="https://m.media-amazon.com/images/I/51ErMCb4szL.jpg"
            />
          </div>

          <div className="hidden md:flex items-center">
            <SearchBar device={"desktop"} />
          </div>
          <div className="flex items-center p-3 m-3">
            <span
              className="text-2xl mr-4 cursor-pointer"
              onClick={() => {
                dispatch(changeMode());
              }}
            >
              {darkmode == true ? "🌙" : "☀️"}
            </span>
            <img
              alt="Notification"
              className="w-7 cursor-pointer mx-3 "
              src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png"
            />
            <img
              alt="person-icon"
              className="w-7 cursor-pointer mx-3"
              src="https://static.vecteezy.com/system/resources/thumbnails/028/569/170/small_2x/single-man-icon-people-icon-user-profile-symbol-person-symbol-businessman-stock-vector.jpg"
            />
          </div>
        </div>

        {/* This if Only Used For Mobile */}
        <div className="md:hidden my-2">
          <SearchBar device={"mobile"} />
        </div>
        
      </div>
    );
}

export default Header;