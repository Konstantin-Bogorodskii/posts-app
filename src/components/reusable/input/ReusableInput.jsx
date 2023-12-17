import classes from './ReusableInput.module.css';

const ReusableInput = props => {
	return <input {...props} className={classes.input} />;
};

export default ReusableInput;
