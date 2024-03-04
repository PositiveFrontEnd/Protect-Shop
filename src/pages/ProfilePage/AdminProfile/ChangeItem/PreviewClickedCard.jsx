import '../PrewieClicked.scss'
import React from "react";
import { useEffect, useState } from "react";
import MobileClickedCard from "../../../../components/Main/Cards/PrimaryCard/ClickedCard/Mobile/MobileClickedCard";
import DesktopClickedCard from "../../../../components/Main/Cards/PrimaryCard/ClickedCard/Desktop/DesktopClickedCard";
import { actionFavoriteForAll } from "../../../../store/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectorIsAdmin, selectorPreviewProductInfo, selectorToken } from "../../../../store/selectors";
import AdminClickedCard from "../../../../components/Main/Cards/PrimaryCard/ClickedCard/Desktop/AdminClickedCard";
import { actionCreateNewProduct } from "../../../../store/productsSlice";

const PreviewClickedCard = ({ cards, colors, handleDeleteProduct, handleSaveChanges }) => {
  const { currentPrice, name, imageUrls, myCustomParam, _id } = cards;
  const token = useSelector(selectorToken);
  const dispatch = useDispatch();
  const newProduct = useSelector(selectorPreviewProductInfo)
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

  const isAdmin = useSelector(selectorIsAdmin)

  return (
    <>
      {isMobile ? (
        <MobileClickedCard
          currentPrice={currentPrice}
          name={name}
          imageUrls={imageUrls}
          myCustomParam={myCustomParam}
          colors={colors}
          _id={_id}
        />
      ) : (

          <AdminClickedCard
            handleSaveChanges={handleSaveChanges}
            currentPrice={currentPrice}
          name={name}
          imageUrls={imageUrls}
          myCustomParam={myCustomParam}
          colors={colors}
          handleFavorite={(event) => handleFavorite(_id, event) }
          handleDeleteProduct ={ handleDeleteProduct}
                      _id={_id} />
      )}
    </>
  );
};

export default PreviewClickedCard;
