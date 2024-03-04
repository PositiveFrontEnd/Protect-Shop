import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
// import { selectorCard, selectorThreeProducts } from "../../store/selectors";
// import "./PrewieClicked.scss";
import "./ProductCard.scss";
import { useParams } from "react-router-dom";
// import { actionGetOneProduct } from "../../store/productsSlice";
import ClickedCard from "../../../components/Main/Cards/PrimaryCard/ClickedCard/ClickedCard";
import AlsoLike from "../../../components/Main/AlsoLike/AlskoLike";
import Blog from "../../../components/Main/Blog/Blog";
import AlsoBuy from "../../../components/Main/AlsoBuy/AlsoBuy";
import Instagram from "../../../components/Main/Instagram/Instagram";
import { actionChangeProduct, actionCreateNewProduct, actionGetOneProduct } from "../../../store/productsSlice";
import { selectorCard, selectorPreviewProductInfo, selectorThreeProducts, selectorToken } from "../../../store/selectors";
import PreviewClickedCard from "./ChangeItem/PreviewClickedCard";
import ModalProductNotExist from "../../../components/Modal/ModalProductNoExist";
import { useContext } from 'react';
import { ContextFunctions } from '../../../context/context'


const PreviewProduct = () => {
    const three = useSelector(selectorThreeProducts);
  const dispatch = useDispatch();

  const { isModalAll, modalChangeAll } = useContext(ContextFunctions) 
  const [isModal, setisModal] = useState(false)
  const currentProduct = useSelector(selectorPreviewProductInfo)
  console.log(currentProduct)
  const token = useSelector(selectorToken)
  const handleDeleteProduct = () => {
  if (currentProduct && currentProduct._id) {
    setisModal(true)
  } else {
    console.log("delete product from server");
          
    }
  };
  const product = currentProduct
  const id = currentProduct._id
  const handleSaveChanges = currentProduct._id ? () => dispatch(actionChangeProduct({id, product, token})) : () => dispatch(actionCreateNewProduct({product, token}))
  return(
        <>
          <section className="container center">
          <PreviewClickedCard
            cards={currentProduct}
            colors={three}
          handleDeleteProduct={() => handleDeleteProduct()}
          handleSaveChanges={() => handleSaveChanges()}
        />
            {isModal && <ModalProductNotExist
            secondaryClick={() => setisModal(false)}
            onclick={() => setisModal(false)}
          />}
          
          </section>
          <section>
            <Blog />
          </section>
          <section>
            <Instagram />
          </section>
        </>
        
    )
}



export default PreviewProduct;
