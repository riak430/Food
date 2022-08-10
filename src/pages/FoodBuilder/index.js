import React, { Component } from "react";
import FoodControls from "../../components/buildControls";
import Food from "../../components/Food";

class FoodBuilder extends Component {
  // constructor(props){
  //   super(props)
  // }
  state = {
    foods: {
      tuiwan: 0,
      nogoo: 0,
      bansh: 0,
      huushuur: 0,
    },
  };
  hoolNemeh = (type) => {
    console.log("=====" + type);
    const newFood = { ...this.state.foods };
    newFood[type]++;
    this.setState({ foods: newFood });
  };
  render() {
    return (
      <div>
        <Food foods={this.state.foods} />
        <FoodControls hoolNemeh={this.hoolNemeh} />
      </div>
    );
  }
}

export default FoodBuilder;
