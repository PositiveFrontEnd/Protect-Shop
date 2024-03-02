import React from "react";
import Star from "../images/star.svg?react";
import "./DesktopFeedbacks.scss";
import feedback1 from "/Images/feedback1.jpg";
import feedback2 from "/Images/feedback2.jpg";
import feedback3 from "/Images/feedback3.jpg";
import Button from "../../../Button/Button";

const DesktopFeedbacks = () => {
  return (
    <div className="feedbacks__wrapper">
      <div className="container feedbacks">
        <h2 className="feedbacks__title">feedbacks</h2>
        <div className="feedbacks__content">
          <div className="feedbacks__card">
            <div className="feedbacks__image">
              <img src={feedback1} alt="" />
            </div>
            <div className="feedbacks__stars">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p className="feedbacks__card__name">olena</p>
            <p className="feedbacks__card__description">
              Small bags are my favorite in this season. They are perfect for
              parties and weekends when you don't have to wear many things.
            </p>
          </div>
          <div className="feedbacks__card">
            <div className="feedbacks__image">
              <img src={feedback2} alt="" />
            </div>
            <div className="feedbacks__stars">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p className="feedbacks__card__name">semen</p>
            <p className="feedbacks__card__description">
              Backpack is the best for me. These bags are suitable for many
              styles, from classics to modern minimalism.
            </p>
          </div>
          <div className="feedbacks__card">
            <div className="feedbacks__image">
              <img src={feedback3} alt="" />
            </div>
            <div className="feedbacks__stars">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p className="feedbacks__card__name">anna</p>
            <p className="feedbacks__card__description">
              Handbags with large fasteners and chains it’s for me. Such bags
              can be worn both on the shoulder and at the fingertips.
            </p>
          </div>
        </div>
        <div className="feedbacks__button">
          <Button white >see more</Button>
        </div>
      </div>
    </div>
  );
};

export default DesktopFeedbacks;
