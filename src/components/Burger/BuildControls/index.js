import React from "react";

import classes from "./style.css";
import BuildControl from "./BuildControl";

const buildControls = props => {
  let controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }
  ];
    
  if (props.ingredients) {
    let controlKeys = Object.keys(props.ingredients)
    controls = controlKeys.map(elem => {
      return { label: elem, type: elem };
    });
  }

  console.log(props.ingredients, controls, 'In controlssss');

  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
          ingredients={props.ingredients}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;