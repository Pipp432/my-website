import { createSlice } from "@reduxjs/toolkit";
import classes from "../components/UI/Card.module.css";
import { CodingData } from "../components/data/CodingData";
import reducers from "./slideShowBtnLogic";
const codingCardSlice = createSlice({
	name: "codingCard",
	initialState: {
		data: {
			name: "React",
			learned: "2022",
			place: "Udemy Course: React - The Complete Guide",
			confidence: "4",
			cardClass: classes.react,
			index: 0,
			imgSource:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
		},
		showCard: false,
	},
	reducers: {
		...reducers(CodingData),
	},
});

export const codingCardActions = codingCardSlice.actions;
export default codingCardSlice;
