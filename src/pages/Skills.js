import classes from "./Skills.module.css";
import Coding from "../components/Skills/Coding";
import VideoEditing from "../components/Skills/VideoEditing";
import { useDispatch, useSelector } from "react-redux";
import { codingCardActions } from "../stores/codingCard-slice";
import { videoEditingActions } from "../stores/videoEditing-slice";

const Skills = () => {
	const showCodingCard = useSelector((state) => state.codingCard.showCard);
	const showVideoEditingCard = useSelector(
		(state) => state.videoEditing.showCard
	);
	const dispatch = useDispatch();
	const showCodingSkillHandler = () => {
		dispatch(codingCardActions.showCard());
	};
	const showVideoEditingSkillHandler = () => {
		dispatch(videoEditingActions.showCard());
	};

	return (
		<>
			<div className={classes.container}>
				<h1 className={classes.titleText}>Skills</h1>
			</div>
			<h2 className={classes.headerText}> Hard Skills</h2>
			<ul>
				<li className={classes.liText}>
					Coding{" "}
					<button
						onClick={showCodingSkillHandler}
						className={classes.showSkill}
					>
						Show
					</button>
				</li>
				{showCodingCard && <Coding />}

				<li className={classes.liText}>
					English
					<button
						onClick={showCodingSkillHandler}
						className={classes.showSkill}
					>
						Show
					</button>
				</li>

				<li className={classes.liText}>
					Design Thinking
					<button
						onClick={showCodingSkillHandler}
						className={classes.showSkill}
					>
						Show
					</button>
				</li>
				<li className={classes.liText}>
					Video Editing
					<button
						onClick={showVideoEditingSkillHandler}
						className={classes.showSkill}
					>
						Show
					</button>
					{showVideoEditingCard && <VideoEditing />}
				</li>
			</ul>
		</>
	);
};
export default Skills;
