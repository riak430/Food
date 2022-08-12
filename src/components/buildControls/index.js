import React from "react";
import BuildControl from "../buildControl";

function FoodControls(props) {
  return (
    <div>
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
    </div>
  );
}

export default FoodControls;
