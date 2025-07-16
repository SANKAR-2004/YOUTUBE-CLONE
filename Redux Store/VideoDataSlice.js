// for home page filtering
import { createSlice } from "@reduxjs/toolkit";

const VideoDataSlice = createSlice({
    name: "videoData",
    initialState: {
        videos: [],
    },
    reducers: {
        addData: (state,action) => {
            state.videos = action.payload;
        }
    }
})

export const { addData } = VideoDataSlice.actions;
export default VideoDataSlice.reducer;