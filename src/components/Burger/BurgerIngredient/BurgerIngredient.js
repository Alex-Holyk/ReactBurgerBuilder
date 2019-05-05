import React from "react";

import classes from "./BurgerIngredient.module.css";

const BurgerIngredient = props => {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom}>1</div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}>2</div>
          <div className={classes.Seeds2}>3</div>
        </div>
      );
      break;
    case "meat":
      ingredient = <div className={classes.Meat}>4</div>;
      break;
    case "cheese":
      ingredient = <div className={classes.Cheese}>5</div>;
      break;
    case "salad":
      ingredient = <div className={classes.Salad}>6</div>;
      break;
    case "bacon":
      ingredient = <div className={classes.Bacon}>7</div>;
      break;
    default:
      ingredient = null;
      break;
  }

  return ingredient;
};

export default BurgerIngredient;
