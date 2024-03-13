import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
        videoData: [],
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
        storeVideoData: (state, action) => {
            state.videoData.push(action.payload);
        }
    }
})

export const {toggleMenu, closeMenu, storeVideoData} = appSlice.actions;

export default appSlice.reducer;
