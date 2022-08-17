import React, { Component } from "react";
import FoodControls from "../../components/buildControls";
import Food from "../../components/Food";
import Order from "../../components/Order";

const food_price = {
<<<<<<< HEAD
  tsuiwan: 10000,
  nogoo: 10000,
  bansh: 9000,
  huushuur: 3000,
  pizza: 20000,
  salad: 4000,
};
=======
  tsuiwan: 12000,
  nogoo: 10000,
  bansh: 5500,
  huushuur: 1500,
};

>>>>>>> d18822ffdf0247c9e34ead0beead5c39b22f0577
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
<<<<<<< HEAD
    console.log("=======> " + type);
=======
>>>>>>> d18822ffdf0247c9e34ead0beead5c39b22f0577
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
<<<<<<< HEAD
    // spread operator
=======
    // spead operator
>>>>>>> d18822ffdf0247c9e34ead0beead5c39b22f0577
    for (let key in disabledBtn) {
      disabledBtn[key] = disabledBtn[key] <= 0;
    }
    return (
      <div>
        <Order foods={this.state.foods} vne={food_price} />
        <Food foods={this.state.foods} />
        <FoodControls
<<<<<<< HEAD
          foods={this.state.foods}
          price={this.state.totalPrice}
          hoolNemeh={this.hoolNemeh}
          hoolHasah={this.hoolHasah}
          disabled={this.disabledBtn}
=======
          price={this.state.totalPrice}
          hoolNemeh={this.hoolNemeh}
          hoolHasah={this.hoolHasah}
          disabled={disabledBtn}
>>>>>>> d18822ffdf0247c9e34ead0beead5c39b22f0577
        />
      </div>
    );
  }
}

export default FoodBuilder;
