import classes from "./Welcome.module.css";
const Welcome = () => {
	return (
		<div className={classes.container}>
			<h1 className={classes.titleText}>Welocome to Napatra's Website</h1>
			<h2 className={classes.titleText}>This website is made with React!</h2>
		</div>
	);
};

export default Welcome;
