import { configureStore } from "@reduxjs/toolkit";

import codingCardSlice from "./codingCard-slice";
import VideoEditingSlice from "./videoEditing-slice";

const store = configureStore({
	reducer: {
		codingCard: codingCardSlice.reducer,
		videoEditing: VideoEditingSlice.reducer,
	},
});
export default store;
