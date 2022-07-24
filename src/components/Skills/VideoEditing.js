import classes from "./VideoEditing.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { videoEditingActions } from "../../stores/videoEditing-slice";
import { VideoEditingData } from "../data/VideoEditingData";
import Card from "../UI/Card";
const VideoEditing = (props) => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.videoEditing.data);
	console.log(data);

	const nextHandler = () => {
		dispatch(videoEditingActions.changeCard({ action: "next" }));
	};
	const prevHandler = () => {
		dispatch(videoEditingActions.changeCard({ action: "prev" }));
	};

	useEffect(() => {
		dispatch(
			videoEditingActions.changeData({
				data: { ...VideoEditingData[data.index] },
			})
		);
	}, [dispatch, data.index]);

	return (
		<Card class={data.cardClass}>
			<div className={classes.cardTitle}>
				<h2>{data.name}</h2>
			</div>

			<div className={classes.detailBox}>
				<img
					src={data.imgSource}
					height='100px'
					width='auto'
					alt='sad'
					className={classes.center}
				/>
				<div className={classes.description}>
					<ul>
						<li>Learned: {data.learned}</li>
						<li>{data.place}</li>
						<li>Confidence Level: {data.confidence}/5</li>
						<li>
							<a
								href='https://www.youtube.com/channel/UCrgDXFPQZseJvjlWq5KP3DA'
								style={{ color: "white" }}
							>
								Video Projects: Youtube links
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className={classes.container}>
				<button onClick={prevHandler}> Prev </button>
				<button onClick={nextHandler}> Next </button>
			</div>
		</Card>
	);
};

export default VideoEditing;
