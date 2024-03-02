import React, { useState } from "react";
import "./DesktopClickedCardStyle.scss";
import Favorite from "../Images/favorite.svg?react";
import Star from "../Images/star.svg?react";
import Locker from "../Images/locker.svg?react";
import Checkmark from "../Images/checkmark.svg?react";
import ClickedCardDropDown from "../ClickedCardDropDown/ClickedCardDropDown";
import Button from "../../../../../Button/Button";
import {
  actionAddBasketOneProduct,
  actionDecreaseProduct,
} from "../../../../../../store/basketSlice";
import {
  selectorToken,
  selectorBaskets,
  selectorGuestBasket,
  selectorCard,
} from "../../../../../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import ModalAddToBasket from "../../../../../Modal/ModalAddToBasket";
import ModalAddedCart from "../../../../../Modal/ModalAddedCart";
import { useContext } from "react";
import { ContextFunctions } from "../../../../../../context/context";
import { useEffect } from "react";
import CounterForUser from "./CounterForUser";
import CounterForGuest from "./CounterForGuest";
import Heart from "../../../../Heart/Heart";
import Color from "../color.jsx";
import { useNavigate } from "react-router-dom";
import { actionGetOneProduct } from "../../../../../../store/productsSlice.js";
import ModalProduct from "../../../../../Modal/ModalDeleteProduct.jsx";

const AdminClickedCard = ({
  currentPrice,
  name,
  imageUrls,
  myCustomParam,
  _id,
  colors,
  handleFavorite,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentProduct = useSelector(selectorCard);
  const [startIndex, setIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(currentProduct._id);
  useEffect(() => {
    setSelectedColor(currentProduct._id);
  }, [currentProduct]);
  const handleColorClick = (colorId) => {
    setSelectedColor(colorId);
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

  const contineShoping = () => {
    navigate("/catalogue");
    modalChangeAddBasket();
  };
  return (
    <section>
      <div className="desktop__card">
        <div className="desktop__card__images">
          <div className="desktop__images-additional">
            {imageUrls.map((item, index) => (
              <img key={index} onClick={() => setIndex(index)} src={item} />
            ))}
          </div>
          <div className="desktop__images-main">
            <img className="main" src={imageUrls[`${startIndex}`]} alt="" />
          </div>
        </div>
        <div className="desktop__card__description">
          <div className="desktop__card__title">
            <p className="desktop__card__name">{name}</p>

            {/* <Heart
              handleFavorite={(event) => handleFavorite(event)}
              className="fav__icon"
              id={_id}
            /> */}
          </div>
          <div className="desktop__card__feedbacks">
            <div>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p className="desktop__card__comments">1775 feedback</p>
          </div>
          <p className="desktop__card__price">$ {currentPrice}</p>
          <div className="desktop__card__colors">
            {colors.map((item, index) => (
              <Color
                className={
                  selectedColor === item._id
                    ? "card__color selected"
                    : "card__color"
                }
                onClick={() => {
                  dispatch(actionGetOneProduct(item._id));
                  handleColorClick(item._id);
                  navigate(
                    `/catalogue/${item.categories}/${item.type}/${item._id}/${item.color}`
                  );
                }}
                key={index}
                item={item}
              />
            ))}
          </div>
          <div className="desktop__card__buttons">
            <Button click={() => modalChangeAddBasket()} white className="desktop__card__buttons-first">
            Change data
          </Button>
            <Button
              click={modalChangeAddBasket}
              black
              className="desktop__card__buttons-second"
            >
              Delete product
            </Button>
          </div>
          <ClickedCardDropDown
            title={"Description"}
            myCustomParam={myCustomParam}
          />
          <ClickedCardDropDown title={"Guarantee"} />
          <ClickedCardDropDown title={"Delivery"} />
          <ClickedCardDropDown title={"Look in our Shops"} />
        </div>
      </div>
      {isModalAll && <ModalProduct isOpen={() => modalChangeAll()} />}
      {isModalAddBasket && (
        <ModalProduct
          price={currentPrice}
          onclick={() => modalChangeAddBasket()}
          isOpen={() => modalChangeAddBasket()}
          firstClick={() =>  modalChangeAddBasket()}
          // secondaryClick={() => modalChangeAddBasket()}
        />
      )}
    </section>
  );
};

export default AdminClickedCard;
