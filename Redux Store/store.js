import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice from "./SideBarSlice";
import SearchSlice from "./SearchSlice";
import ChatSlice from "./ChatSlice";
import DarkModeSlice from "./DarkModeSlice";
 

const AppStore = configureStore({
    reducer: {
        sidebar: SideBarSlice,
        search: SearchSlice,
        LiveChat: ChatSlice,
        colorMode: DarkModeSlice,
 }
});

export default AppStore;