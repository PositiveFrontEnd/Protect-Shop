import React from "react";
import "./FavoritesCardStyles.scss";
import Exit from './favorite.svg?react'
import { selectorToken } from "../../../../store/selectors";
import CounterForUser from './../PrimaryCard/ClickedCard/Desktop/CounterForUser';
import CounterForGuest from './../PrimaryCard/ClickedCard/Desktop/CounterForGuest';
import { useSelector } from "react-redux";
const FavorutesCard = ({ price, url, name, click, id, modalChangeAll, handleNavigate }) => {
  const token = useSelector(selectorToken)

  return (
    <div className="favorite__card__wrapper">
      <div className="favorite__card__image">
        <img src={url} alt="" onClick={handleNavigate} />
      </div>
      <span className="favorite__card__name">{name}</span>
      <span className="favorite__card__price">${price}</span>
      <div className="favorite__card__button">
        {token ? <CounterForUser _id={id} modalChangeAll={modalChangeAll} /> : <CounterForGuest _id={id} modalChangeAll={modalChangeAll} />}
      </div>
      <Exit onClick={click} className="favorite__card__image-close" />
    </div>
  );
};

export default FavorutesCard;
