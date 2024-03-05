import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectorFavoriteForCustomer,
  selectorGuestFavorite,
  selectorToken,
} from "../../../store/selectors";
import {
  actionGetFavorite,
  actionDeleteFavoriteOneProduct,
  actionDeleteFavoriteForGuest,
} from "../../../store/favoriteSlice.js";
import { useEffect, useState } from "react";
import FavorutesCard from "../Cards/FavoritesCard/FavotiresCard.jsx";
import {
  actionAddBasketOneProduct,
  actionAddToBasketForGuest,
} from "../../../store/basketSlice.js";
import { ContextFunctions } from "src/context/context";
import ModalAddToBasket from "./../../Modal/ModalAddToBasket";
import {
  actionGetOneProduct,
  actionGetProducts,
  actionGetThreeProducts,
} from "../../../store/productsSlice.js";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectorToken);
  const guestFavorite = useSelector(selectorGuestFavorite);
  const navigate = useNavigate();
  const addBasket = async (id) => {
    if (token) {
      dispatch(actionAddBasketOneProduct({ product: [id], token }));
    } else if (!token) {
      dispatch(actionAddToBasketForGuest(id));
    }
  };
  const [favU, setFavorite] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(actionGetFavorite(token));
        if (response && response.products) {
          setFavorite(response.products);
        } else {
          console.log("Favorites не обрано");
        }
      } catch {
        console.error("error");
      }
    };
    fetchData();
  }, [dispatch, token]);

  const [favG, setFavG] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productPromises = guestFavorite.map(async (item) => {
          const data = await dispatch(actionGetOneProduct(item));
          return data;
        });
        const products = await Promise.all(productPromises);
        setFavG(products);
      } catch (error) {
        console.error("Error fetching favorite products:", error);
      }
    };

    fetchData();
  }, [dispatch, guestFavorite]);

  const handleNavigate = (item) => {
    dispatch(actionGetOneProduct(item._id));
    dispatch(actionGetThreeProducts(item.name));
    navigate(`/catalogue/${item.categories}/${item.type}/${item._id}`);
  };
  const { isModalAll, modalChangeAll } = useContext(ContextFunctions);
  const favorite = token ? favU : favG;
  const favorites = favorite.map((item, index) => (
    <FavorutesCard
      modalChangeAll={modalChangeAll}
      handleNavigate={() => handleNavigate(item)}
      id={item._id}
      key={index}
      url={item.imageUrls[0]}
      name={item.brand}
      price={item.currentPrice}
      click={() => handleDeleteFavorite(item._id, token)}
      addBasket={() => addBasket(item._id)}
    />
  ));
  let handleDeleteFavorite;
  if (token) {
    handleDeleteFavorite = (id, token) => {
      dispatch(actionDeleteFavoriteOneProduct({ id, token }));
      const deleted = favorite.filter((item) => item._id !== id);
      setFavorite(deleted);
    };
  } else if (!token) {
    handleDeleteFavorite = (id) => {
      dispatch(actionDeleteFavoriteForGuest(id));
    };
  }
  useEffect(() => {
    if (isModalAll) {
      const timeoutId = setTimeout(() => {
        modalChangeAll();
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [isModalAll, modalChangeAll]);
  return (
    <>
      <div className="container">
        <div className="favorites__wrapper ">
          {favorites.length > 0 ? (
            favorites
          ) : (
            <h4 className="favorit__list__empty">The Favorites list is empty</h4>
          )}
        </div>
        {isModalAll && <ModalAddToBasket isOpen={() => modalChangeAll()} />}

      </div>
    </>
  );
};
export default Favorites;
