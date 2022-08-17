import React, { Component } from "react";
import FoodControls from "../../components/buildControls";
import Food from "../../components/Food";
import Order from "../../components/Order";

const food_price = {
  tsuiwan: 10000,
  nogoo: 10000,
  bansh: 9000,
  huushuur: 3000,
  pizza: 20000,
  salad: 4000,
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
      pizza: 0,
      salad: 0,
    },
    totalPrice: 0,
  };
  hoolNemeh = (type) => {
    console.log("=======> " + type);
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
    // spread operator
    for (let key in disabledBtn) {
      disabledBtn[key] = disabledBtn[key] <= 0;
    }
    return (
      <div>
        <Order foods={this.state.foods} vne={food_price} />
        <Food foods={this.state.foods} />
        <FoodControls
          foods={this.state.foods}
          price={this.state.totalPrice}
          hoolNemeh={this.hoolNemeh}
          hoolHasah={this.hoolHasah}
          disabled={this.disabledBtn}
        />
      </div>
    );
  }
}

export default FoodBuilder;
