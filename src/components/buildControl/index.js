import React from "react";

function BuildControl(props) {
  return (
    <div>
      <p>{props.title}</p>
      <button onClick={() => props.hoolNemeh(props.title)}>Нэмэх</button>
<<<<<<< HEAD
      <button onClick={() => props.hoolHasah(props.title)}>Хасах</button>
=======
      <button
        disabled={props.disabled[props.title]}
        onClick={() => props.hoolHasah(props.title)}
      >
        Хасах
      </button>
>>>>>>> d18822ffdf0247c9e34ead0beead5c39b22f0577
    </div>
  );
}

export default BuildControl;
