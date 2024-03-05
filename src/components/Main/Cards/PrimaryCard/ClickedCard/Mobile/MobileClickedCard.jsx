import React, { useState } from "react";
import "./MobileClickedCardStyle.scss";
import "../Desktop/DesktopClickedCardStyle.scss";
import Star from "../Images/star.svg?react";
import Favorite from "../Images/favorite.svg?react";
import Locker from "../Images/locker.svg?react";
import Checkmark from "../Images/checkmark.svg?react";
import ClickedCardDropDown from "../ClickedCardDropDown/ClickedCardDropDown";
import {
  actionAddBasketOneProduct,
  actionDecreaseProduct,
} from "../../../../../../store/basketSlice";
import {
  selectorToken,
  selectorBaskets,
  selectorCard,
  selectorProductComments,
} from "../../../../../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import ModalAddToBasket from "../../../../../Modal/ModalAddToBasket";
import ModalAddedCart from "../../../../../Modal/ModalAddedCart";
import { useContext } from "react";
import { ContextFunctions } from "../../../../../../context/context";
import { useEffect } from "react";
import CounterForUser from "../Desktop/CounterForUser";
import CounterForGuest from "../Desktop/CounterForGuest";
import Heart from "../../../../Heart/Heart";
import { actionGetOneProduct } from "../../../../../../store/productsSlice";
import Color from "../color.jsx";
import { useNavigate } from "react-router-dom";
import Comments from "../Comments/Comments.jsx";
const MobileClickedCard = ({
  currentPrice,
  name,
  imageUrls,
  myCustomParam,
  _id,
  handleFavorite,
  colors,
  likes,
  color,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentProduct = useSelector(selectorCard);
  const [startIndex, setIndex] = useState(0);
  const [activeSwitch, setActiveSwitch] = useState("info");
  const handleSwitchClick = (type) => {
    setActiveSwitch(type);
  };
  const token = useSelector(selectorToken);

  //modal thanks
  const { isModalAll, modalChangeAll, modalChangeAddBasket, isModalAddBasket } =
    useContext(ContextFunctions);
  useEffect(() => {
    if (isModalAll) {
      const timeoutId = setTimeout(() => {
        modalChangeAll();
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [isModalAll, modalChangeAll]);
  //modal add to order
  const addBasket = async () => {
    modalChangeAddBasket();
    navigate("/cart/placing_an_order/contact_information");
    dispatch(actionAddBasketOneProduct({ product: [_id], token }));
  };
  const commentsLength = useSelector(selectorProductComments).length;
  const contineShoping = () => {
    navigate("/catalogue");
    modalChangeAddBasket();
  };
  return (
    <section>
      <div className="mobile__card">
        <p className="mobile__card__title">{name}</p>
        <div className="mobile__card__images">
          <div className="mobile__card__images-main">
            <img className="main" src={imageUrls[`${startIndex}`]} alt="" />
          </div>
          <div className="mobile__card__images-additional">
            {imageUrls.map((item, index) => (
              <img key={index} onClick={() => setIndex(index)} src={item} />
            ))}
          </div>
        </div>
        <div className="mobile__card__toggler">
          <p
            className={`mobile__card__switch ${activeSwitch === "info" ? "active" : ""
              }`}
            onClick={() => handleSwitchClick("info")}
            type="info"
          >
            info
          </p>
          <p
            className={`mobile__card__switch ${activeSwitch === "comments" ? "active" : ""
              }`}
            onClick={() => handleSwitchClick("comments")}
            type="comments"
          >
            comments (<strong>{commentsLength}</strong>)
          </p>
        </div>
        <div
          className={
            activeSwitch == "info"
              ? "mobile__card__description active"
              : "mobile__card__description"
          }
        >
          <div
            className="mobile__card__feedbacks"
            onClick={() => handleSwitchClick("comments")}
          >
            <div className="mobile__card__stars">
              {[...Array(5)].map((item, index) => (
                <Star className="star" key={index} />
              ))}
            </div>
            <div className="mobile__card__comments">
              <span>{likes.length - 1} feedbacks</span>
            </div>
          </div>
          <p className="mobile__card__price">$ {currentPrice}</p>
          <div className="mobile__card__colors">
            {colors.map((item, index) => (
              <Color
                className={
                  currentProduct._id === item._id
                    ? "color__button selected"
                    : "color__button"
                }
                onClick={() => {
                  dispatch(actionGetOneProduct(item._id));
                  navigate(
                    `/catalogue/${item.categories}/${item.type}/${item._id}`
                  );
                }}
                key={index}
                item={item}
              />
            ))}
          </div>
          <div className="mobile__card__buttons">
            <div className="mobile__card__buttons-primary">
              {token ? (
                <CounterForUser _id={_id} modalChangeAll={modalChangeAll} />
              ) : (
                <CounterForGuest _id={_id} modalChangeAll={modalChangeAll} />
              )}
              <Heart
                handleFavorite={(event) => handleFavorite(event)}
                className="favorite"
                id={_id}
              />
            </div>

            <div className="mobile__card__buttons-secondary">
              <button onClick={modalChangeAddBasket}>
                Buy right now
                <Checkmark className="checkmark" />
              </button>
            </div>
          </div>
          <div className="mobile__card__description">
            <ClickedCardDropDown
              title={"Description"}
              myCustomParam={myCustomParam}
            />
            <ClickedCardDropDown title={"Guarantee"} />
            <ClickedCardDropDown title={"Delivery"} />
            <ClickedCardDropDown title={"Look in our Shops"} />
          </div>
        </div>
        <div
          className={
            activeSwitch == "comments"
              ? "card__comments active"
              : "card__comments"
          }
        >
          <Comments id={_id} name={name} color={color} />
        </div>
      </div>
      {isModalAll && <ModalAddToBasket isOpen={() => modalChangeAll()} />}
      {isModalAddBasket && (
        <ModalAddedCart
          price={currentPrice}
          onclick={() => modalChangeAddBasket()}
          isOpen={() => modalChangeAddBasket()}
          firstClick={() => addBasket()}
          secondaryClick={() => contineShoping()}
        />
      )}
    </section>
  );
};

export default MobileClickedCard;
