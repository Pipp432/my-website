import classes from "./Welcome.module.css";
import pfp from "../Images/Pipp.jpg";
const Welcome = () => {
	return (
		<div className={classes.container}>
			<h1 className={classes.titleText}>
				I'm Front-end Developer, <br />
				Napatra N.
			</h1>
			<h2 className={classes.titleText}>Current Status: Undergratued</h2>
			<img src={pfp} alt='Yo' className={classes.pfp} height='250px' />
		</div>
	);
};

export default Welcome;
