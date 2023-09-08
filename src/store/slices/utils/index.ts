/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const utilsSlice = createSlice({
	name: 'utils',
	initialState: {
		isDrawerOpen: false,
	},
	reducers: {
		toggleDrawer: (state) => {
			state.isDrawerOpen = !state.isDrawerOpen;
		}
	},
});

export const { toggleDrawer } = utilsSlice.actions;
export default utilsSlice.reducer;
