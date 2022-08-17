import React from "react";

function BuildControl(props) {
  return (
    <div>
      <p>{props.title}</p>
      <button onClick={() => props.hoolNemeh(props.title)}>Нэмэх</button>
      <button onClick={() => props.hoolHasah(props.title)}>Хасах</button>
    </div>
  );
}

export default BuildControl;
