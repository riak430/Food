import React from "react";
import FoodControls from "../../components/buildControls";
import Food from "../../components/Food";

function FoodBuilder() {
  return (
    <div>
      <Food />
      <FoodControls />
    </div>
  );
}

export default FoodBuilder;
