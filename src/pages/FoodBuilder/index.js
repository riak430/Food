import React, { Component } from "react";
import FoodControls from "../../components/buildControls";
import Food from "../../components/Food";

const food_price = {
  tsuiwan: 12000,
  nogoo: 10000,
  bansh: 5500,
  huushuur: 1500,
};

class FoodBuilder extends Component {
  // constructor(props){
  //   super(props)
  // }
  state = {
    foods: {
      tsuiwan: 0,
      nogoo: 0,
      bansh: 0,
      huushuur: 0,
    },
    totalPrice: 0,
  };
  hoolNemeh = (type) => {
    const newFood = { ...this.state.foods };
    newFood[type]++;
    this.setState({ foods: newFood });
    const newPrice = this.state.totalPrice + food_price[type];
    this.setState({ totalPrice: newPrice });
  };
  hoolHasah = (type) => {
    if (this.state.foods[type] !== 0) {
      const newFood = { ...this.state.foods };
      newFood[type]--;
      this.setState({ foods: newFood });
      const newPrice = this.state.totalPrice - food_price[type];
      this.setState({ totalPrice: newPrice });
    }
  };
  render() {
    const disabledBtn = { ...this.state.foods };
    // spead operator
    for (let key in disabledBtn) {
      disabledBtn[key] = disabledBtn[key] <= 0;
    }
    return (
      <div>
        <Food foods={this.state.foods} />
        <FoodControls
          price={this.state.totalPrice}
          hoolNemeh={this.hoolNemeh}
          hoolHasah={this.hoolHasah}
          disabled={disabledBtn}
        />
      </div>
    );
  }
}

export default FoodBuilder;
