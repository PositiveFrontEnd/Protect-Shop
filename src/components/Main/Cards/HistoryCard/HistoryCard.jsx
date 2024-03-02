import React from "react";
import "./HistoryCardStyles.scss";
import Button from "../../../Button/Button";
import Exit from './favorite.svg?react'

const HistoryCard = ({ price, url, name, click }) => {
  return (
    <div className="history__card__wrapper">
      <div className="history__card__image">
        <img src={url} alt="" />
        <Exit onClick={click} className="history__card__image-close" />
      </div>
      <span className="history__card__name">{name}</span>
      <span className="history__card__price">{price}</span>
      <div className="history__card__button">
        <Button black>Buy again</Button>
      </div>
    </div>
  );
};

export default HistoryCard;
