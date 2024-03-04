import React, { useEffect, useState } from "react";
import FavoriteButton from "../../Images/favorite.svg?react";
import Icon from "../../Images/star.svg?react";
import "./PrimaryCardStyle.scss";
import Heart from "../../../Heart/Heart";
import { useDispatch } from "react-redux";
import { actionGetThreeColors } from "../../../../../store/productsSlice";
import Color from "../ClickedCard/color";
const PrimaryCard = ({ card, handleProduct, handleFavorite, id }) => {
  const [newCard, setNewCard] = useState(card);
  const {
    brand,
    currentPrice,
    name,
    previousPrice,
    size,
    status,
    imageUrls,
    likes,
  } = newCard;
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState(newCard._id);
  const handleColorClick = (colorId) => {
    setSelectedColor(colorId);
  };
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

  }, [dispatch, name]);
  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength - 3) + "...";
    }
    return str;
  };
  const truncatedName = truncateString(name, 30);

  return (
    <div className="primary__card">
      <Heart
        handleFavorite={(event) =>{ handleFavorite(newCard._id, event)}}

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
            {[...Array(5)].map((item, index) => (
              <Icon className="star" key={index} />
            ))}
          </div>
          <p className="card__comments">{likes.length - 1} feedbacks</p>
        </div>
        <div className="card__name">
          <p
            onClick={() => handleProduct(newCard)}
            className={
              name.length < 30 ? "card__name-major" : "card__name-major lower"
            }
          >
            {/* {window.innerWidth <= 768 ?  : name} */}
            {truncatedName}
          </p>

          <p className="card__name-minor">{brand}</p>
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
                    handleColorClick(item._id);
                  }
                }}
                className={
                  selectedColor === item._id
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
