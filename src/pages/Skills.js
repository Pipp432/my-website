import classes from "./Skills.module.css";
const Skills = () => {
	return (
		<>
			<div className={classes.container}>
				<h1 className={classes.titleText}>Skills</h1>
			</div>
			<h2 className={classes.headerText}> Hard Skills</h2>
			<ul>
				<li>Coding</li>
				<li>English</li>
				<li>Design Thinking</li>
				<li>Writing</li>
			</ul>
		</>
	);
};
export default Skills;
