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
<<<<<<< HEAD
      <h1>niit vne: {props.price}</h1>
      {hool}
      <button disabled={props.price <= 0}>Zahialah</button>
=======
      <h1>Нийт үнэ:{props.price}</h1>
      <BuildControl
        title="tsuiwan"
        hoolNemeh={props.hoolNemeh}
        hoolHasah={props.hoolHasah}
        disabled={props.disabled}
      />
      <BuildControl
        title="nogoo"
        hoolNemeh={props.hoolNemeh}
        hoolHasah={props.hoolHasah}
        disabled={props.disabled}
      />
      <BuildControl
        title="bansh"
        hoolNemeh={props.hoolNemeh}
        hoolHasah={props.hoolHasah}
        disabled={props.disabled}
      />
      <BuildControl
        title="huushuur"
        hoolNemeh={props.hoolNemeh}
        hoolHasah={props.hoolHasah}
        disabled={props.disabled}
      />
>>>>>>> d18822ffdf0247c9e34ead0beead5c39b22f0577
    </div>
  );
}

export default FoodControls;
