import React, { useState } from "react";
import "./MobileClickedCardStyle.scss";
import "../Desktop/DesktopClickedCardStyle.scss";
import Star from "../../../Images/star.svg?react";
import Checkmark from "../Images/checkmark.svg?react";
import ClickedCardDropDown from "../ClickedCardDropDown/ClickedCardDropDown";
import {
  actionAddBasketOneProduct
} from "../../../../../../store/basketSlice";
import {
  selectorToken,
  selectorCard,
  selectorProductComments,
  selectorThreeProducts,
  selectorIsAdmin,
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
import {
  actionDeleteProduct,
  actionGetOneProduct,
  actionPreviewProductData,
} from "../../../../../../store/productsSlice";
import Color from "../color.jsx";
import { useNavigate } from "react-router-dom";
import Comments from "../Comments/Comments.jsx";
import StarsRaiting from "../StarsRaiting.jsx";
import Button from "../../../../../Button/Button.jsx";
import ModalDeleteProduct from "../../../../../Modal/ModalDeleteProduct.jsx";
import ClickedCardDropDownGuarantees from "../ClickedCardDropDown/Guarantee/Guarantees.jsx";
import ClickedCardDropDownDelivery from "../ClickedCardDropDown/Delivery/Delivery.jsx";
import ClickedCardDropDownShops from "../ClickedCardDropDown/Shops/ShopsDrop.jsx";
const MobileClickedCard = ({
  currentPrice,
  name,
  myCustomParam,
  _id,
  handleFavorite,
  color,
  delivery,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentProduct = useSelector(selectorCard);
  const isAdmin = useSelector(selectorIsAdmin);
  const [startIndex, setIndex] = useState(0);
  const [activeSwitch, setActiveSwitch] = useState("info");
  const handleSwitchClick = (type) => {
    setActiveSwitch(type);
  };
  const token = useSelector(selectorToken);

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

  const addBasket = async () => {
    modalChangeAddBasket();
    navigate("/cart/placing_an_order/contact_information");
    dispatch(actionAddBasketOneProduct({ product: [_id], token }));
  };
  const colors = useSelector(selectorThreeProducts);
  const commentsLength = useSelector(selectorProductComments).length;
  const contineShoping = () => {
    navigate("/catalogue");
    modalChangeAddBasket();
  };

  const likesSum = currentProduct.likes.reduce((acc, value) => acc + value, 0);
  const averageLikes = likesSum / Math.max(currentProduct.likes.length - 1, 1);

  const [deleteProductModal, setDeleteProductModal] = useState(false);

  const handleChangeCard = () => {
    dispatch(actionPreviewProductData(currentProduct));
    navigate("/account/changeproductgalery-");
  };
  const handleDeleteProductModal = () => {
    setDeleteProductModal(!deleteProductModal);
  };
  const handleDeleteProduct = () =>
    dispatch(actionDeleteProduct({ _id, token }));

  return (
    <section>
      <div className="mobile__card">
        <p className="mobile__card__title">{name}</p>
        <div className="mobile__card__images">
          <div className="mobile__card__images-main">
            <img
              className="main"
              src={currentProduct.imageUrls[`${startIndex}`]}
              alt=""
            />
          </div>
          <div className="mobile__card__images-additional">
            {currentProduct.imageUrls.map((item, index) => (
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
              {averageLikes === 0 ? (
                [...Array(5)].map((item, index) => (
                  <Star className="default__star" key={index} />
                ))
              ) : (
                <StarsRaiting />
              )}
            </div>
            <div className="mobile__card__comments">
              <span>{commentsLength} feedbacks</span>
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
                isAdmin ? (
                  <Button black click={() => handleChangeCard()}>
                    Change Product
                  </Button>
                ) : (
                  <CounterForUser _id={_id} modalChangeAll={modalChangeAll} />
                )
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
              {isAdmin ? (
                <Button white click={() => handleDeleteProductModal()}>
                  Delete Product
                </Button>
              ) : (
                <button onClick={modalChangeAddBasket}>
                  Buy right now
                  <Checkmark className="checkmark" />
                </button>
              )}
            </div>
          </div>
          <div className="mobile__card__drop">
            <ClickedCardDropDown
              title={"Description"}
              myCustomParam={myCustomParam}
            />
            <ClickedCardDropDownGuarantees title={"Guarantee"} />
            <ClickedCardDropDownDelivery
              title={"Delivery"}
              delivery={delivery}
            />
            <ClickedCardDropDownShops title={"Look in our Shops"} />
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
      {deleteProductModal && (
        <ModalDeleteProduct
          firstClick={() => handleDeleteProductModal()}
          secondaryClick={() => handleDeleteProduct()}
          onclick={() => handleDeleteProductModal()}
        />
      )}
    </section>
  );
};

export default MobileClickedCard;
