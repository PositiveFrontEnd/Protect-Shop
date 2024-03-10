import React from "react";
import "./ShopingCardStyle.scss";
import Trash from "./img/trashbin.svg?react"
import Hat from "./img/trashbinHat.svg?react"
import Heart from "../../Heart/Heart";
const ShopingCard = ({ img, title, price, deletCard, cartQuantity, clickMin, clickPlus, handleNavigate, handleFavorite, id }) => {

  return (
    <div className="shopping__card__wrapper shopping__card__wrapper-order__page">
      <div className="shopping__card__image shopping__card__image-order__page" onClick={handleNavigate} >
        <img src={img} alt="" />
      </div>
      <div className="shopping__card__info">
        <Heart
          handleFavorite={(event) => handleFavorite(event)}
          id={id}
          className='basket__heart' />
        <span className="shopping__card__info-name">{title}</span>
        <span className="shopping__card__info-price">{price} $</span>
        <div className="schopping__card__counter">
          <button onClick={clickMin} type="button" className="schopping__card__counter-min">-</button>
          <span>{cartQuantity}</span>
          <button className="schopping__card__counter-min" type="button" onClick={clickPlus}>+</button>
        </div>
        <div className="shopping__card__info-icon-order__page">
          <div onClick={deletCard} className="shopping__card__info-icon ">
            <Hat />
            <Trash />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopingCard;