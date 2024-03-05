import React from "react";
import { useEffect, useState } from "react";
import MobileClickedCard from "./Mobile/MobileClickedCard";
import DesktopClickedCard from "./Desktop/DesktopClickedCard";
import { actionFavoriteForAll } from "../../../../../store/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectorCard, selectorToken } from "../../../../../store/selectors";

const ClickedCard = () => {
  const currentProduct = useSelector(selectorCard);
  const {
    name,
    currentPrice,
    imageUrls,
    myCustomParam,
    likes,
    _id,
    color,
    delivery,
  } = currentProduct;
  const token = useSelector(selectorToken);
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );
  const handleMediaQuery = (event) => {
    setIsMobile(event.matches);
  };
  useEffect(() => {
    const mediaQueryList = window.matchMedia("(max-width: 768px)");
    mediaQueryList.addListener(handleMediaQuery);
    return () => {
      mediaQueryList.removeListener(handleMediaQuery);
    };
  }, []);
  const handleFavorite = (productId, event) => {
    event.stopPropagation();
    dispatch(actionFavoriteForAll({ productId, token }));
  };

  return (
    <>
      {isMobile ? (
        <MobileClickedCard
          currentPrice={currentPrice}
          name={name}
          imageUrls={imageUrls}
          myCustomParam={myCustomParam}
          handleFavorite={(event) => handleFavorite(_id, event)}
          _id={_id}
          likes={likes}
          color={color}
          delivery={delivery}
        />
      ) : (
        <DesktopClickedCard
          currentPrice={currentPrice}
          name={name}
          imageUrls={imageUrls}
          myCustomParam={myCustomParam}
          handleFavorite={(event) => handleFavorite(_id, event)}
          _id={_id}
          likes={likes}
          color={color}
          delivery={delivery}
        />
      )}
    </>
  );
};

export default ClickedCard;
