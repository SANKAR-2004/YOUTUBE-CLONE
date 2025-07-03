import { createSlice } from "@reduxjs/toolkit";

const DarkModeSlice = createSlice({
    name: "modes",
    initialState: {
       darkMode:false 
    },
    reducers: {
        changeMode: (state) => {
            state.darkMode = !state.darkMode;
        }
    }
})

export const { changeMode } = DarkModeSlice.actions;
export default DarkModeSlice.reducer;