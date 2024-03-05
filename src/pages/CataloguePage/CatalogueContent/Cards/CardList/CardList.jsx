import React from "react";
import "./CardList.scss";
import Card from "../../../../../components/Main/Cards/PrimaryCard/PrimaryCard/PrimaryCard";
import { useDispatch, useSelector } from "react-redux";
import { actionGetThreeProducts } from "../../../../../store/productsSlice";
import {
  selectorFiltersProducts,
  selectorLoadFilter,
  selectorToken,
  selectorTwelveProducts,
} from "../../../../../store/selectors";
import { useNavigate } from "react-router";
import { actionFavoriteForAll } from "../../../../../store/favoriteSlice";

const CardList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filterLoad = useSelector(selectorLoadFilter);
  const products = useSelector(selectorTwelveProducts);
  const filterProducts = useSelector(selectorFiltersProducts);
  const token = useSelector(selectorToken);

  const handleProduct = (item) => {
    dispatch(actionGetThreeProducts(item.name));
    navigate(`/catalogue/${item.categories}/${item.type}/${item._id}`);
  };
  const handleFavorite = (productId, event) => {
    event.stopPropagation();
    dispatch(actionFavoriteForAll({ productId, token }));
  };

  return (
    <>
      {!filterLoad ? (
        filterProducts.length === 0 ? (
          products.map((item) => (
            <Card
              key={item._id}
              id={item._id}
              handleFavorite={handleFavorite}
              card={item}
              handleProduct={handleProduct}
            />
          ))
        ) : (
          filterProducts.map((item) => (
            <Card
              key={item._id}
              id={item._id}
              handleFavorite={handleFavorite}
              card={item}
              handleProduct={handleProduct}
            />
          ))
        )
      ) : (
        <div className="noProducts">
          On your query not found one match, try other options!
        </div>
      )}
    </>
  );
};
export default CardList;
