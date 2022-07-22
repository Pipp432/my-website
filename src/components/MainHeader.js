import classes from "./MainHeader.module.css";
import { NavLink } from "react-router-dom";

const MainHeader = () => {
	return (
		<div className={classes.mainHeader}>
			<NavLink className={classes.selection} to='/welcome'>
				Welcome
			</NavLink>
			<NavLink className={classes.selection} to='/basicInfo'>
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
