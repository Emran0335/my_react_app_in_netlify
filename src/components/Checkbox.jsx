import classes from "../styles/Checkbox.module.css";

const Checkbox = ({ className, text, ...rest }) => {
  return (
    <label className={className}>
      <input type="checkbox" {...rest} />
      <span className={classes.span}>{text}</span>
    </label>
  );
};

export default Checkbox;
