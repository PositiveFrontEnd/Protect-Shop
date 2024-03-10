import React, { useState } from "react";
import "./MobileClickedCardStyle.scss";
import "../Desktop/DesktopClickedCardStyle.scss";
import Star from "../../../Images/star.svg?react";
import Checkmark from "../Images/checkmark.svg?react";
import ClickedCardDropDown from "../ClickedCardDropDown/ClickedCardDropDown";
import {
  actionAddBasketOneProduct,
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
import { actionDeleteProduct, actionPreviewProductData } from "../../../../../../store/productsSlice";
import Color from "../color.jsx";
import { useNavigate } from "react-router-dom";
import Button from "../../../../../Button/Button.jsx";
import ModalDeleteProduct from "../../../../../Modal/ModalDeleteProduct.jsx";
const AdminClickedCardMobile = ({
  currentPrice,
  name,
  imageUrls,
  myCustomParam,
  _id,
  handleFavorite,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentProduct = useSelector(selectorCard);
  const isAdmin = useSelector(selectorIsAdmin)
  const [startIndex, setIndex] = useState(0);
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
  const contineShoping = () => {
    navigate("/catalogue");
    modalChangeAddBasket();
  };

  const [deleteProductModal, setDeleteProductModal] = useState(false)

  const handleChangeCard = () => {
    dispatch(actionPreviewProductData(currentProduct))
    navigate('/account/changeproductgalery-')
  }
  const handleDeleteProductModal = () => { setDeleteProductModal(!deleteProductModal) }
  const handleDeleteProduct = () => dispatch(actionDeleteProduct({ _id, token }))



  return (
    <section>
      <div className="mobile__card">
        <p className="mobile__card__title">{name}</p>
        <div className="mobile__card__images">
          <div className="mobile__card__images-main">
            <img
              className="main"
              src={imageUrls[`${startIndex}`]}
              alt=""
            />
          </div>
          <div className="mobile__card__images-additional">
            {imageUrls.map((item, index) => (
              <img key={index} onClick={() => setIndex(index)} src={item} />
            ))}
          </div>
        </div>
        <div
        >
          <div
            className="mobile__card__feedbacks"
          >
            <div className="mobile__card__stars">
              <div>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
            <div className="mobile__card__comments">
              <p className="desktop__card__comments">1775 feedback</p>
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
                key={index}
                item={item}
              />
            ))}
          </div>
          <div className="mobile__card__buttons">
            <div className="mobile__card__buttons-primary">
              {token ? (isAdmin ? (<Button black click={() => handleChangeCard()} >Change Product</Button>) : (
                <CounterForUser _id={_id} modalChangeAll={modalChangeAll} />
              )) : (
                <CounterForGuest _id={_id} modalChangeAll={modalChangeAll} />
              )}
              <Heart
                handleFavorite={(event) => handleFavorite(event)}
                className="favorite"
                id={_id}
              />
            </div>

            <div className="mobile__card__buttons-secondary">
              {isAdmin ? <Button white click={() => handleDeleteProductModal()}>
                Delete Product
              </Button> :
                <button onClick={modalChangeAddBasket}>
                  Buy right now
                  <Checkmark className="checkmark" />
                </button>
              }
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
      {deleteProductModal && <ModalDeleteProduct
        firstClick={() => handleDeleteProductModal()}
        secondaryClick={() => handleDeleteProduct()}
        onclick={() => handleDeleteProductModal()}
      />}
    </section>
  );
};

export default AdminClickedCardMobile;
