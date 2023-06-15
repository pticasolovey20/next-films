import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	width: typeof window !== "undefined" ? window.innerWidth : 0,
};

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setWidthAction(state, action) {
			state.width = action.payload;
		},
	},
});

export const { setWidthAction } = appSlice.actions;
export default appSlice.reducer;
