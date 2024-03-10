import React, { useState } from "react";
import "./DesktopClickedCardStyle.scss";
import Star from "../../../Images/star.svg?react";
import ClickedCardDropDown from "../ClickedCardDropDown/ClickedCardDropDown";
import Button from "../../../../../Button/Button";

import {
  selectorToken
} from "../../../../../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { ContextFunctions } from "../../../../../../context/context";
import Heart from "../../../../Heart/Heart";
import { useNavigate } from "react-router-dom";
import {
  actionDeleteProduct,
} from "../../../../../../store/productsSlice.js";
import ModalProduct from "../../../../../Modal/ModalDeleteProduct.jsx";
import cross from '/Images/cross.png'
const AdminClickedCard = ({
  currentPrice,
  name,
  imageUrls,
  myCustomParam,
  _id,
  handleFavorite,
  handleSaveChanges,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectorToken);
  const [startIndex, setIndex] = useState(0);

  const { isModalAll, modalChangeAll, modalChangeAddBasket, isModalAddBasket } =
    useContext(ContextFunctions);

  const handleChangeCard = () => {
    navigate("/account/changeproductgalery-");
  };
  const id = _id;
  const handleDeleteProductModal = () => {
    modalChangeAddBasket();
  };
  const handleDeleteProduct = () =>
    dispatch(actionDeleteProduct({ id, token }));

  return (
    <section>
      <div className="desktop__card__admin">
        <div className="desktop__card__images">
          <div className="desktop__images-additional">
            {imageUrls &&
              imageUrls.map((item, index) => (
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

            <Heart
              handleFavorite={(event) => handleFavorite(event)}
              className="fav__icon"
              id={_id}
            />
            <img
              src={cross}
              height="30px"
              title="delete product"
              className="cross__icon"
              onClick={handleDeleteProductModal}
            />
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
            <div
              className="card__color selected "
              style={{
                backgroundColor: "red",
                border: "1px solid #afa7a7",
                opacity: "0.6",
                cursor: "pointer",
                width: "24px",
                height: "24px",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "yellow",
                border: "1px solid #afa7a7",
                opacity: "0.6",
                cursor: "pointer",
                width: "24px",
                height: "24px",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "orange",
                border: "1px solid #afa7a7",
                opacity: "0.6",
                cursor: "pointer",
                width: "24px",
                height: "24px",
              }}
            ></div>
          </div>
          <div className="desktop__card__buttons">
            <Button
              click={() => handleChangeCard()}
              white
              className="desktop__card__buttons-first"
            >
              Change data
            </Button>
            <Button
              click={handleSaveChanges}
              black
              className="desktop__card__buttons-second"
            >
              Save
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
          firstClick={() => modalChangeAddBasket()}
          secondaryClick={() => handleDeleteProduct()}
        />
      )}
    </section>
  );
};

export default AdminClickedCard;
