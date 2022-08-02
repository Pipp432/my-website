import classes from "./MainHeader.module.css";
import { NavLink } from "react-router-dom";

const MainHeader = () => {
	return (
		<div className={classes.mainHeader}>
			<h1 className={classes.symbol}>NN</h1>
			<div className={classes.fullName}>Napatra Navanugraha</div>

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
