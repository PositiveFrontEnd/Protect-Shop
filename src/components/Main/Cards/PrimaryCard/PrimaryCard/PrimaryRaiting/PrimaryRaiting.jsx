import React from "react";
import Star from "../../../Images/star.svg?react";
import "./primaryraitingstyles.scss";

const PrimaryStarsRaiting = ({ averageLikes }) => {
  return (
    <div className="primary__raiing__container">
      <div className="primary__unfilled__stars">
        {[...Array(5)].map((item, index) => (
          <Star className="default__star" key={index} />
        ))}
      </div>
      <div className="primary__filled__stars">
        {[...Array(Math.round(averageLikes))].map((item, index) => (
          <Star className="active__star" key={index} />
        ))}
      </div>
    </div>
  );
};

export default PrimaryStarsRaiting;
