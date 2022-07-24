import classes from "./Coding.module.css";
import { CodingData } from "../data/CodingData";
import Card from "../UI/Card";
import { useDispatch, useSelector } from "react-redux";
import { codingCardActions } from "../../stores/codingCard-slice";
import { useEffect } from "react";

const Coding = (props) => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.codingCard.data);

	const nextHandler = () => {
		dispatch(codingCardActions.changeCard({ action: "next" }));
	};
	const prevHandler = () => {
		dispatch(codingCardActions.changeCard({ action: "prev" }));
	};

	useEffect(() => {
		dispatch(
			codingCardActions.changeData({ data: { ...CodingData[data.index] } })
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

export default Coding;
