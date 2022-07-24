import { createSlice } from "@reduxjs/toolkit";
import cardClasses from "../components/UI/Card.module.css";
import { VideoEditingData } from "../components/data/VideoEditingData";
import reducers from "./slideShowBtnLogic";

const videoEditingSlice = createSlice({
	name: "videoEditing",
	initialState: {
		data: {
			name: "Premiere Pro",
			learned: "2022",
			place: "Self Study",
			confidence: "4.5",
			cardClass: cardClasses.premierePro,
			index: 0,
			imgSource: "https://cyberspace.world/wp-content/uploads/2020/10/pr.png",
		},
		showCard: false,
	},
	reducers: { ...reducers(VideoEditingData) },
});

export const videoEditingActions = videoEditingSlice.actions;
export default videoEditingSlice;
