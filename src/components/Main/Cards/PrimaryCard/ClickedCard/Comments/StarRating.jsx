import React from "react";
import { useState } from "react";
import Star from "../../../Images/star.svg?react";
import "./starrating.scss";

const Rating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const handleRatingChange = (currentRating) => {
    setRating(currentRating);
    if (onRatingChange) {
      onRatingChange(currentRating);
    }
  };

  return (
    <div className="rating__wrapper">
      <div className="rating">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label key={star}>
              <input
                key={star}
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => handleRatingChange(currentRating)}
              />
              <Star
                key={star}
                className={
                  currentRating <= (hover || rating)
                    ? "active__star active__star-comment"
                    : "default__star active__star-comment"
                }
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
      {rating > 0 ? <p>your rating is: {rating}</p> : <p>your rating is: 0</p>}
    </div>
  );
};

export default Rating;
