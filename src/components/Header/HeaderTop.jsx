import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./HeaderSvg/logo.svg?react";
import PhoneIncomingW from "./HeaderSvg/phoneIncomingW.svg?react";
import Burger from "./HeaderSvg/burger.svg?react";
import PhoneW from "./HeaderSvg/phoneW.svg?react";
import SearchW from "./HeaderSvg/searchW.svg?react";
import Account from "./HeaderSvg/account.svg?react";
import Favorite from "./HeaderSvg/favorite.svg?react";
import Cart from "./HeaderSvg/cart.svg?react";
import Close from "./HeaderSvg/close.svg?react";
import Mail from "./HeaderSvg/mail.svg?react";
import PropTypes from "prop-types";
import HeaderMenu from "src/components/Header/HeaderMenu";
import ModalForm from "src/components/Modal/ModalForm";
import { useDispatch, useSelector } from "react-redux";
import {
  selectorBaskets,
  selectorFavoriteForCustomer,
  selectorGuestBasket,
  selectorGuestFavorite,
  selectorIsAdmin,
  selectorLetterAll,
  selectorToken,
} from "../../store/selectors";
import { actionGetBasket } from "src/store/basketSlice";

const savedBasketProduct =
  JSON.parse(localStorage.getItem("basketProduct")) || [];

const HeaderTop = ({ actionDropdown, modalChange, isModal }) => {
  const dispatch = useDispatch();
  const token = useSelector(selectorToken);
  const isAdmin = useSelector(selectorIsAdmin);
  const lettersFirstLoad = useSelector(selectorLetterAll);
  const newLetters = lettersFirstLoad.filter(
    (item) => item.status === "new"
  ).length;
  const favoriteForCustomer = useSelector(selectorFavoriteForCustomer);
  const guestFavorite = useSelector(selectorGuestFavorite);
  const basketProduct = useSelector(selectorBaskets);
  const basketGuest = useSelector(selectorGuestBasket);
  const basketGuestCount = Object.keys(basketGuest).length;
  const location = useLocation();

  useEffect(() => {
    if (token) dispatch(actionGetBasket(token));
  }, [token]);

  useEffect(() => {
    localStorage.setItem("basketProduct", JSON.stringify(savedBasketProduct));
  }, [basketProduct]);

  const isAccount = location.pathname.includes("account");
  const isSearch = location.pathname.includes("search");
  const isFavorites = location.pathname.includes("favorites");
  const isCart = location.pathname.includes("cart");

  return (
    <>
      <div className="header__top container">
        <div className="header__callme" onClick={modalChange}>
          <PhoneIncomingW />
          <p className="header__callme__text">Call me out</p>
        </div>
        <Burger className="header__burger" onClick={actionDropdown} />
        <Link to="/">
          <Logo />
        </Link>
        <PhoneW className="header__phone" onClick={modalChange} />
        <div className="header__nav">
          {isSearch ? (
            <Link to="/catalogue">
              <Close />
            </Link>
          ) : (
            <Link to="/search-">
              <SearchW />
            </Link>
          )}

          {isAccount ? (
            <Link to="/catalogue">
              <Close />
            </Link>
          ) : (
            <Link to="/account">
              <Account />
            </Link>
          )}

          {isFavorites ? (
            <Link to="/catalogue">
              <Close />
            </Link>
          ) : (
            <>
              <Link to="/favorites">
                <Favorite />
                {token &&
                  favoriteForCustomer &&
                  favoriteForCustomer.length !== 0 ? (
                  <span className="product__amount">
                    {favoriteForCustomer.length}
                  </span>
                ) : !token && guestFavorite && guestFavorite.length !== 0 ? (
                  <span className="product__amount">
                    {guestFavorite.length}
                  </span>
                ) : (
                  <span></span>
                )}
              </Link>
            </>
          )}

          {isAdmin ? (
            <Link to="/account/letters">
              <Mail className="mail" />
              <span className="product__amount">{newLetters}</span>
            </Link>
          ) : isCart ? (
            <Link to="/catalogue">
              <Close />
            </Link>
          ) : (
            <>
              <Link to={isAdmin ? "#" : "/cart"}>
                <Cart />
                {token &&
                  basketProduct.products &&
                  basketProduct.products.length !== 0 ? (
                  <span className="product__amount">
                    {basketProduct.products.length}
                  </span>
                ) : !token && basketGuest && basketGuestCount !== 0 ? (
                  <span className="product__amount">{basketGuestCount}</span>
                ) : (
                  <span></span>
                )}
              </Link>
            </>
          )}

          <p className="header__nav__text">+380(50) 500 00 96</p>
        </div>
      </div>
      <HeaderMenu />
      {isModal && <ModalForm isOpen={modalChange} onclick={modalChange} />}
    </>
  );
};
HeaderTop.propTypes = {
  actionDropdown: PropTypes.func,
  actionHeaderSearch: PropTypes.func,
  modalChange: PropTypes.func,
  isModal: PropTypes.bool,
};
export default HeaderTop;
