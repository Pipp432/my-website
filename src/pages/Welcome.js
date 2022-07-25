import classes from "./Welcome.module.css";
const Welcome = () => {
	return (
		<div className={classes.container}>
			<h1 className={classes.titleText}>
				I'm Front-end Developer, <br />
				Napatra N.
			</h1>
			<h2 className={classes.titleText}>Current Status: Undergratued</h2>
		</div>
	);
};

export default Welcome;
