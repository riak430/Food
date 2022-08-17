import React from "react";
import BuildControl from "../buildControl";

function FoodControls(props) {
  const hool = [];
  const test = Object.entries(props.foods);
  test.map((el) => {
    hool.push(
      <BuildControl
        key={el}
        title={el[0]}
        hoolNemeh={props.hoolNemeh}
        hoolHasah={props.hoolHasah}
        disabled={props.disabled}
      />
    );
  });
  return (
    <div>
      <h1>niit vne: {props.price}</h1>
      {hool}
      <button disabled={props.price <= 0}>Zahialah</button>
    </div>
  );
}

export default FoodControls;
