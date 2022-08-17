import React from "react";
import Orts from "../Orts";
import style from "./style.module.css";

const Food = (props) => {
  const items = Object.entries(props.foods);
  const content = [];
  items.map((el) => {
    content.push(<Orts key={el[0]} name={el[0]} number={el[1]} />);
  });

  return <div className={style.foodContainer}>{content}</div>;
};

export default Food;
