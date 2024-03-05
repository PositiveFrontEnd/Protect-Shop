import React, { useState } from "react";
import "./DesktopClickedCardStyle.scss";
import Star from "../../../Images/star.svg?react";
import Checkmark from "../Images/checkmark.svg?react";
import ClickedCardDropDown from "../ClickedCardDropDown/ClickedCardDropDown";
import Button from "../../../../../Button/Button";
import {
  actionAddBasketOneProduct,
  actionAddToBasketForGuest,
  actionDecreaseProduct,
} from "../../../../../../store/basketSlice";
import {
  selectorToken,
  selectorBaskets,
  selectorGuestBasket,
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
import CounterForUser from "./CounterForUser";
import CounterForGuest from "./CounterForGuest";
import Heart from "../../../../Heart/Heart";
import Color from "../color.jsx";
import { useNavigate } from "react-router-dom";
import { actionChangeProduct, actionDeleteProduct, actionGetOneProduct, actionPreviewProductData } from "../../../../../../store/productsSlice.js";
import Comments from "../Comments/Comments.jsx";
import StarsRaiting from "../StarsRaiting.jsx";
import ModalDeleteProduct from "../../../../../Modal/ModalDeleteProduct.jsx";

const DesktopClickedCard = ({
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
  const isAdmin = useSelector(selectorIsAdmin)
  console.log(isAdmin)
  const [startIndex, setIndex] = useState(0);
  const [activeSwitch, setActiveSwitch] = useState("info");
  const handleSwitchClick = (type) => {
    setActiveSwitch(type);
  };
  const colors = useSelector(selectorThreeProducts);
  const commentsLength = useSelector(selectorProductComments).length;
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

  const handleAddToBasketForGuest = () => {
    modalChangeAddBasket();
    navigate("/cart/placing_an_order/contact_information");
    dispatch(actionAddToBasketForGuest(_id))
  }
  const contineShoping = () => {
    navigate("/catalogue");
    modalChangeAddBasket();
    
  };

  const likesSum = currentProduct.likes.reduce((acc, value) => acc + value, 0);
  const averageLikes = likesSum / Math.max(currentProduct.likes.length - 1, 1);

  const [deleteProductModal, setDeleteProductModal] = useState(false)

  const handleDeleteProductModal = () => { setDeleteProductModal(!deleteProductModal) }
  const handleDeleteProduct = () => dispatch(actionDeleteProduct({ _id, token }))

  const handleChangeCard = () => {
    dispatch(actionPreviewProductData(currentProduct))
    navigate('/account/changeproductgalery')
  }
  return (
    <section>
      <div className="desktop__card">
        <div className="desktop__card__images">
          <div className="desktop__images-additional">
            {currentProduct.imageUrls.map((item, index) => (
              <img key={index} onClick={() => setIndex(index)} src={item} />
            ))}
          </div>
          <div className="desktop__images-main">
            <img
              className="main"
              src={currentProduct.imageUrls[`${startIndex}`]}
              alt=""
            />
          </div>
        </div>
        <div className="desktop__card__toggler">
          <p
            className={`desktop__card__switch ${
              activeSwitch === "info" ? "active" : ""
            }`}
            onClick={() => handleSwitchClick("info")}
            type="info"
          >
            info
          </p>
          <p
            className={`desktop__card__switch ${
              activeSwitch === "comments" ? "active" : ""
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
              ? "desktop__card__description active"
              : "desktop__card__description"
          }
        >
          <div className="desktop__card__title">
            <p className="desktop__card__name">{name}</p>

            <Heart
              handleFavorite={(event) => handleFavorite(event)}
              className="fav__icon"
              id={_id}
            />
          </div>
          <div className="desktop__card__feedbacks">
            <div onClick={() => handleSwitchClick("comments")}>
              {averageLikes === 0 ? (
                [...Array(5)].map((item, index) => (
                  <Star className="default__star" key={index} />
                ))
              ) : (
                <StarsRaiting />
              )}
            </div>
            <p
              className="desktop__card__comments"
              onClick={() => handleSwitchClick("comments")}
            >
              {commentsLength} feedbacks
            </p>
          </div>
          <p className="desktop__card__price">$ {currentPrice}</p>
          <div className="desktop__card__colors">
            {colors.map((item, index) => (
              <Color
                className={
                  currentProduct._id === item._id
                    ? "card__color selected"
                    : "card__color"
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
          <div className="desktop__card__buttons">
            {token ? (isAdmin ? (<Button black click={() =>handleChangeCard()} >Change Product</Button>) :(
              <CounterForUser _id={_id} modalChangeAll={modalChangeAll} />
            )) : (
              <CounterForGuest _id={_id} modalChangeAll={modalChangeAll} />
            )}
            {isAdmin ? <Button white click={() => handleDeleteProductModal()}>
              Delete Product
            </Button>
              :
            <Button
              click={modalChangeAddBasket}
              black
              className="desktop__card__buttons-second"
            >
              Buy right now
              <Checkmark className="Checkmark" />
            </Button>
            }
          </div>
          <ClickedCardDropDown
            title={"Description"}
            myCustomParam={myCustomParam}
          />
          <ClickedCardDropDown title={"Guarantee"} />
          <ClickedCardDropDown title={"Delivery"} />
          <ClickedCardDropDown title={"Look in our Shops"} />
        </div>
        <div
          className={
            activeSwitch == "comments"
              ? "card__comments active"
              : "card__comments"
          }
        >
          {activeSwitch == "comments" && (
            <Comments id={_id} name={name} color={color} />
          )}
        </div>
      </div>
      {isModalAll && <ModalAddToBasket isOpen={() => modalChangeAll()} />}
      {isModalAddBasket && (
        <ModalAddedCart
          price={currentPrice}
          onclick={() => modalChangeAddBasket()}
          isOpen={() => modalChangeAddBasket()}
          firstClick={() => token ? addBasket() : handleAddToBasketForGuest()}
          secondaryClick={() => contineShoping()}
        />
      )}
      {deleteProductModal && <ModalDeleteProduct
        firstClick={() => handleDeleteProductModal()}
        secondaryClick={() => handleDeleteProduct()}
        onclick={() =>handleDeleteProductModal()}
      />}
    </section>
  );
};

export default DesktopClickedCard;
