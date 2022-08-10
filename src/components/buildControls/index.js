import React from "react";
import BuildControl from "../buildControl";

function FoodControls(props) {
  return (
    <div>
      <BuildControl title="tsuiwan" hoolNemeh={props.hoolNemeh} />
      <BuildControl title="nogoo" hoolNemeh={props.hoolNemeh} />
      <BuildControl title="bansh" hoolNemeh={props.hoolNemeh} />
      <BuildControl title="huushuur" hoolNemeh={props.hoolNemeh} />
    </div>
  );
}

export default FoodControls;
