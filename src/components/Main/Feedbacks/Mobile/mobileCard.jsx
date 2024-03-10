import React from "react";
import Star from "../images/star.svg?react";
import UserAvatar from "../../../UserAvatar/UserAvatar"
const MobileFeedbackCard = ({ avatar, name, comment, likes, background }) => {
  return (
    <>
      <UserAvatar firstName={name} avatarUrl={avatar} background={background} mobile={true} />
      <div className="card__stars">
        {[...Array(likes)].map((item, index) => (
          <Star
            key={index}
            className={likes > 0 ? "active__star-shops" : " star inactive"}
          />
        ))}
      </div>

      <p className="card__name">{name}</p>
      <p className="card__description">{comment}</p>
    </>
  );
};

export default MobileFeedbackCard;
