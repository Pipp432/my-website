import classes from "./MainHeader.module.css";
import { NavLink } from "react-router-dom";

const MainHeader = () => {
	return (
		<div className={classes.mainHeader}>
			<h1>NN</h1>

			<NavLink className={classes.selection} to='/welcome'>
				Welcome
			</NavLink>
			<NavLink className={classes.selection} to='/basic-info'>
				Basic Information
			</NavLink>
			<NavLink className={classes.selection} to='/skills'>
				Skills
			</NavLink>
			<NavLink className={classes.selection} to='/achievements'>
				Achievements
			</NavLink>
		</div>
	);
};
export default MainHeader;
