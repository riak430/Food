import React from "react";

function Order(props) {
  const hoolnuud = [];
  Object.entries(props.foods).map((el) => {
    hoolnuud.push(
      <p>
        {el[0]}: {el[1]}
        <span> {props.vne[el[0]]}</span>
      </p>
    );
  });
  return (
    <div>
      <h2>Modal</h2>
      {hoolnuud}
    </div>
  );
}

export default Order;
