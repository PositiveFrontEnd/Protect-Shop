import React from "react";
import Star from "./Images/star.svg?react";
import { selectorCard } from "../../../../../store/selectors";
import { useSelector } from "react-redux";
import "./StarsRaitingStyles.scss";

const StarsRaiting = () => {
  const currentProduct = useSelector(selectorCard);
  const likesSum = currentProduct.likes.reduce((acc, value) => acc + value, 0);
  const averageLikes = likesSum / Math.max(currentProduct.likes.length - 1, 1);
  return (
    <div className="raiing__container">
      <div className="unfilled__stars">
        {[...Array(5)].map((item, index) => (
          <Star className="star" key={index} />
        ))}
      </div>
      <div className="filled__stars">
        {[...Array(averageLikes)].map((item, index) => (
          <Star className="filled__star" key={index} />
        ))}
      </div>
    </div>
  );
};

export default StarsRaiting;
