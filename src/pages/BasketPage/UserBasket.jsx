import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionGetBasket,
  actionDeleteBasketOneProduct,
  actionDecreaseProduct,
  actionAddBasketOneProduct,
} from "../../store/basketSlice";
import { selectorBaskets, selectorToken } from "../../store/selectors";
import ShopingCard from "../../components/Main/Cards/ShopingCard/ShopingCard";
import {
  actionGetOneProduct,
  actionGetThreeProducts,
} from "../../store/productsSlice";
import { useNavigate } from "react-router-dom";
import { actionFavoriteForAll } from "../../store/favoriteSlice";
const UserBasket = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectorToken);
  const basketProduct = useSelector(selectorBaskets);
  const navigate = useNavigate();
  console.log(basketProduct);
  useEffect(() => {
    dispatch(actionGetBasket(token));
  }, []);

  const deleteBasketCart = async (id) => {
    dispatch(actionDeleteBasketOneProduct({ id: [id], token }));
  };

  const plusBasketCart = async (id) => {
    dispatch(actionAddBasketOneProduct({ product: [id], token }));
  };

  const minBasketCart = async (id) => {
    dispatch(actionDecreaseProduct({ id: [id], token }));
  };
  const handleNavigate = (item) => {
    dispatch(actionGetOneProduct(item._id));
    dispatch(actionGetThreeProducts(item.name));
    navigate(`/catalogue/${item.categories}/${item.type}/${item._id}`);
  };
  const handleFavorite = (productId, event) => {
    event.stopPropagation();
    dispatch(actionFavoriteForAll({ productId, token }));
  };

  return (
    <>
      {basketProduct.products.map(({ cartQuantity, product }, index) => (
        <ShopingCard
          handleNavigate={() => handleNavigate(product)}
          key={index}
          img={product.imageUrls[0]}
          title={product.type}
          price={product.currentPrice}
          cartQuantity={cartQuantity}
          deletCard={() => deleteBasketCart(product._id)}
          clickPlus={() => plusBasketCart(product._id)}
          clickMin={() => minBasketCart(product._id)}
          id={product._id}
          handleFavorite={(event) => handleFavorite(product._id, event)}
        />
      ))}
    </>
  );
};

export default UserBasket;
