import React from "react";
import "./FeedbackspageStyles.scss";
import Star from "./FeedbacksImg/star.svg?react";
import PropTypes from "prop-types";
const FeedbacksComent = ({
  text,
  firstName,
  lastName,
  disadvantages,
  avatar,
  likes,
  background
}) => {
  return (
    <div className="comments__item">
      <div className="item__header">
        <div className="header__avatar__name">
          {!avatar || avatar === "" ? (
            <div className="no__avatar__wrapper avatar"
              style={{ backgroundColor: background }}
            >
              <p className="avatar__letter__feedbacks">{(firstName && firstName.charAt(0).toUpperCase()) || ''}</p>
            </div>
          ) : (
            <div className="preview__avatar avatar" >
              <img className="avatar" src={avatar && avatar} alt="avatar" />
            </div>
          )}
          <p className="header__name__user">
            {firstName} {lastName}
          </p>
        </div>

        <div className="header__stars">
          {[...Array(likes)].map((item, index) => (
            <Star
              key={index}
              className={likes > 0 ? "active__star-shops" : " star inactive"}
            />
          ))}
        </div>
      </div>
      <div className="item__content">
        <div className="content_question">
          <div className="liked__content">
            <p>
              <strong>Advantages:</strong> {text}
            </p>
          </div>
          <p>
            <strong>Disadvantages:</strong> {disadvantages}
          </p>
        </div>
      </div>
    </div>
  );
};

FeedbacksComent.propTypes = {
  text: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  productName: PropTypes.string,
  like: PropTypes.element,
  didntLike: PropTypes.element,
};
export default FeedbacksComent;
