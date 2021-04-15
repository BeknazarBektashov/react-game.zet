import React from "react";
import classes from "./Button.module.css";

function Button(props) {
  return <button type="submit" className={classes.Button}>{props.children}</button>;
}

export default Button;
