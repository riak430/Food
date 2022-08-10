import React from "react";

function BuildControl(props) {
  return (
    <div>
      <p>{props.title}</p>
      <button onClick={props.hoolNemeh}>Нэмэх</button>
      <button>Хасах</button>
    </div>
  );
}

export default BuildControl;
