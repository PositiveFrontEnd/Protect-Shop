import React from "react";
import Star from "../images/star.svg?react";
import UserAvatar from "../../../UserAvatar/UserAvatar"
const DesktopFeedbackCard = ({ avatar, name, comment, likes, background }) => {

  return (
    <div className="feedbacks__card">

      <UserAvatar firstName={name} avatarUrl={avatar} background={background} />
      <div className={"feedbacks__stars"}>
        {[...Array(likes)].map((item, index) => (
          <Star
            key={index}
            className={likes > 0 ? "active__star-shops" : " star inactive"}
          />
        ))}
      </div>
      <p className="feedbacks__card__name">{name}</p>
      <p className="feedbacks__card__description">{comment}</p>
    </div>
  );
};

export default DesktopFeedbackCard;
