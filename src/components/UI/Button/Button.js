import React from "react";

import classes from "./Button.module.css";

const Button = props => (
  <button
    type={props.type}
    className={[classes.Button, classes[props.btnType]].join(" ")}
    onClick={props.clicked}
    disabled={props.disabled}>
    {props.children}
  </button>
);

export default Button;
