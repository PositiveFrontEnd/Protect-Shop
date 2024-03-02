import React from "react";
import Star from "../Images/star.svg?react";

const Comment = ({ firstName, lastName, comment, likes }) => {
  return (
    <div className="comments__content__item">
      <div className="item__header">
        <p className="header__text__name">
          {firstName} {lastName}
        </p>
      </div>
      <div className="item__stat">
        {[...Array(likes)].map((item, index) => (
          <Star
            key={index}
            className={likes > 1 ? "stat__Star" : "stat__Star inactive"}
          />
        ))}
      </div>
      <div className="item__main">
        <strong>Comment:</strong> {comment}
      </div>
    </div>
  );
};

export default Comment;
