import React from "react";
import { useEffect, useState } from "react";
import MobileClickedCard from "./Mobile/MobileClickedCard";
import DesktopClickedCard from "./Desktop/DesktopClickedCard";
import { actionFavoriteForAll } from "../../../../../store/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectorToken } from "../../../../../store/selectors";

const ClickedCard = ({ cards, colors }) => {
  const { currentPrice, name, imageUrls, myCustomParam, _id, likes, color } =
    cards;
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
          colors={colors}
          handleFavorite={(event) => handleFavorite(_id, event)}
          _id={_id}
          likes={likes}
          color={color}
        />
      )  : (
        <DesktopClickedCard
          currentPrice={currentPrice}
          name={name}
          imageUrls={imageUrls}
          myCustomParam={myCustomParam}
          colors={colors}
          handleFavorite={(event) => handleFavorite(_id, event)}
          _id={_id}
          likes={likes}
          color={color}
        />
      )}
    </>
  );
};

export default ClickedCard;
