import { createSlice } from "@reduxjs/toolkit"

const SideBarSlice = createSlice({
        name: 'toggle',
        initialState: {
            showSidebar:false,
        },
        reducers: {
            toggleNavbar: (state) => {
                state.showSidebar = !state.showSidebar;
            }
        }
    })

export const { toggleNavbar } = SideBarSlice.actions;
export default SideBarSlice.reducer;