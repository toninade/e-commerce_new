import Currency_fun from "./currency";
// import "./cardtwo.css";
import { memo } from "react";

const CardTwo = memo(({ img, title, des, price }) => {
  return (
    <div className="cardtwo d-flex align-items-center ">
      <img src={img} alt={title} loading="lazy" fetchPriority="auto" />
      <div className="text-cont">
        <h6>{title}</h6>
        <p>{des}</p>
        <p>{Currency_fun(price)}</p>
      </div>
    </div>
  );
});

export default CardTwo;
