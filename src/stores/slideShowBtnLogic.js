function reducers(data) {
	return {
		changeData(state, actions) {
			state.data.name = actions.payload.data.name;
			state.data.learned = actions.payload.data.learned;
			state.data.place = actions.payload.data.place;
			state.data.confidence = actions.payload.data.confidence;
			state.data.cardClass = actions.payload.data.cardClass;
			state.data.imgSource = actions.payload.data.imgSource;
		},
		changeCard(state, actions) {
			if (actions.payload.action === "next") {
				if (state.data.index === data.length - 1) return;
				state.data.index++;
			}
			if (actions.payload.action === "prev") {
				if (state.data.index === 0) return;
				state.data.index--;
			}
		},
		showCard(state) {
			state.showCard = !state.showCard;
		},
	};
}
export default reducers;
