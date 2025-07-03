import { useSelector } from "react-redux";
import AppStore from "../Redux Store/store";
import { Link } from "react-router";

const SideBar = () => {
    const Store = useSelector((AppStore) => AppStore.sidebar.showSidebar);
    const darkmode = useSelector((store) => {
      return store.colorMode.darkMode;
    });
   

    return (
      Store && (
        <div
          className={` h-full fixed z-50 px-5 py-2 w-48 ${
            darkmode ? "bg-gray-700 text-white" : "bg-gray-50"
          }`}
        >
          <ul className="">
            <Link className="cursor-default" to={"/"}>
              <li
                className={`cursor-default my-3 px-2 py-1 hover:bg-gray-200 ${
                  darkmode && "hover:text-black"
                } `}
              >
                🏡Home
              </li>
            </Link>
            <li
              className={`cursor-default my-3 px-2 py-1 hover:bg-gray-200 ${
                darkmode && "hover:text-black"
              } `}
            >
              🔥Trending
            </li>
            <li
              className={`cursor-default my-3 px-2 py-1 hover:bg-gray-200 ${
                darkmode && "hover:text-black"
              } `}
            >
              ▶️Subscriptions
            </li>
          </ul>
          <h1 className="font-bold pb-1.5 border-b-2 border-gray-300">
            Library
          </h1>
          <ul className="py-1">
            <li
              className={`cursor-default my-3 px-2 py-1 hover:bg-gray-200 ${
                darkmode && "hover:text-black"
              } `}
            >
              ⌚History
            </li>
            <li
              className={`cursor-default my-3 px-2 py-1 hover:bg-gray-200 ${
                darkmode && "hover:text-black"
              } `}
            >
              ⏲️Watch Later
            </li>
            <li
              className={`cursor-default my-3 px-2 py-1 hover:bg-gray-200 ${
                darkmode && "hover:text-black"
              } `}
            >
              👍Liked Videos
            </li>
            <li
              className={`cursor-default my-3 px-2 py-1 hover:bg-gray-200 ${
                darkmode && "hover:text-black"
              } `}
            >
              📌Cartoons
            </li>
          </ul>
          <h1 className="font-bold pb-1.5 border-b-2 border-gray-300">
            Subscriptions
          </h1>
          <ul className="py-1">
            <li
              className={`cursor-default my-3 px-2 py-1 hover:bg-gray-200 ${
                darkmode && "hover:text-black"
              } `}
            >
              Akshay Saini
            </li>
            <li
              className={`cursor-default my-3 px-2 py-1 hover:bg-gray-200 ${
                darkmode && "hover:text-black"
              } `}
            >
              Guna Shek
            </li>
            <li
              className={`cursor-default my-3 px-2 py-1 hover:bg-gray-200 ${
                darkmode && "hover:text-black"
              } `}
            >
              Nero knowledge
            </li>
          </ul>
        </div>
      )
    );
}

export default SideBar;