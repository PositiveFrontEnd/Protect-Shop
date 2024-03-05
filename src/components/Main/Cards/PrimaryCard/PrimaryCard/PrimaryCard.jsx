import React, { useEffect, useState } from "react";
import Icon from "../../Images/star.svg?react";
import "./PrimaryCardStyle.scss";
import Heart from "../../../Heart/Heart";
import { useDispatch } from "react-redux";
import { actionGetThreeColors } from "../../../../../store/productsSlice";
import Color from "../ClickedCard/color";
import PrimaryStarsRaiting from "./PrimaryRaiting/PrimaryRaiting";

const PrimaryCard = ({ card, handleProduct, handleFavorite, id }) => {
  const [newCard, setNewCard] = useState(card);
  const { brand, currentPrice, name, previousPrice, size, status, imageUrls } =
    newCard;
  const [colors, setColors] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dispatch(actionGetThreeColors(name));
        setColors(data);
      } catch (error) {
        console.error("Сталася помилка під час отримання кольорів:", error);
      }
    };
    fetchData();
  }, [name]);
  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength - 3) + "...";
    }
    return str;
  };
  const truncatedName = truncateString(name, 30);
  const truncatedBrand = truncateString(brand, 15);
  const likesSum = newCard.likes.reduce((acc, value) => acc + value, 0);
  const averageLikes = likesSum / Math.max(newCard.likes.length - 1, 1);
  return (
    <div className="primary__card">
      <Heart
        handleFavorite={(event) => {
          handleFavorite(newCard._id, event);
        }}
        className="card__favorites"
        id={newCard._id}
      />
      <div className="card__image">
        <div className="card__image__box-front">
          <img
            onClick={() => handleProduct(newCard)}
            className="card__image-main"
            src={imageUrls[0]}
          />
        </div>
        <div className="card__image__box-back">
          <img
            onClick={() => handleProduct(newCard)}
            className="card__image-main"
            src={imageUrls[2]}
          />
        </div>
        <p className="card__image__text">{status}</p>
      </div>
      <div className="card__description">
        <div className="card__feedbacks">
          <div className="card__stars">
            {averageLikes === 0 ? (
              [...Array(5)].map((item, index) => (
                <Icon className="default__star" key={index} />
              ))
            ) : (
              <PrimaryStarsRaiting averageLikes={averageLikes} />
            )}
          </div>
        </div>
        <div className="card__name">
          <p
            onClick={() => handleProduct(newCard)}
            className={
              name.length < 30 ? "card__name-major" : "card__name-major lower"
            }
          >
            {truncatedName}
          </p>

          <p className="card__name-minor">
            {window.innerWidth > 768 ? brand : truncatedBrand}
          </p>
        </div>
        <div className="card__price">
          {previousPrice === 0 ? (
            <p className="card__price-old"></p>
          ) : (
            <p className="card__price-old-new">${previousPrice}</p>
          )}
          <p className="card__price-new">${currentPrice}</p>
        </div>
        <div className="card__additionals">
          <div className="card__colors">
            {colors.map((item, index) => (
              <Color
                key={index}
                item={item}
                onClick={() => {
                  {
                    setNewCard(item);
                  }
                }}
                className={
                  newCard._id === item._id
                    ? "card__colors-color active"
                    : " card__colors-color "
                }
              />
            ))}
          </div>
          <p className="card__sizes">{size}</p>
        </div>
      </div>
    </div>
  );
};

export default PrimaryCard;
