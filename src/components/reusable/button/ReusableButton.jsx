import classes from './ReusableButton.module.css';

const ReusableButton = props => {
	return (
		<button {...props} className={classes.button}>
			{props.children}
		</button>
	);
};

export default ReusableButton;
