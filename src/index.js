import React from "react";
import ReactDom from "react-dom/client";
import Body from "./Body";
import './index.css';
import { Provider } from "react-redux";
import AppStore from "../Redux Store/store";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import WatchPage from "./WatchPage"; 
import VideoContainer from "./VideoContainer";
import MainContainer from "./MainContainer";
import SearchPage from "./SearchPage";

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Body />,
        children: [
            {
                path: "/watch",
                element:<WatchPage/>
            },
            {
                path: "/",
                element:<MainContainer/>
            },
            {
                path: "/search",
                element:<SearchPage/>
            }
        ]
    }
]);
console.log("Check the API limit Google Console");


const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<Provider store={AppStore}>
            <RouterProvider router={AppRouter} />
            </Provider>);