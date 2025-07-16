import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice from "./SideBarSlice";
import SearchSlice from "./SearchSlice";
import ChatSlice from "./ChatSlice";
import DarkModeSlice from "./DarkModeSlice";
import VideoDataSlice from "./VideoDataSlice";
 

const AppStore = configureStore({
    reducer: {
        sidebar: SideBarSlice,
        search: SearchSlice,
        LiveChat: ChatSlice,
        colorMode: DarkModeSlice,
        videos:VideoDataSlice
 }
});

export default AppStore;