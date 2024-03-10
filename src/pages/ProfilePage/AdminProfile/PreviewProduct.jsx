import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductCard.scss";
import Blog from "../../../components/Main/Blog/Blog";
import Instagram from "../../../components/Main/Instagram/Instagram";
import { actionChangeProduct, actionCreateNewProduct } from "../../../store/productsSlice";
import { selectorPreviewProductInfo, selectorThreeProducts, selectorToken } from "../../../store/selectors";
import PreviewClickedCard from "./ChangeItem/PreviewClickedCard";
import ModalProductNotExist from "../../../components/Modal/ModalProductNoExist";

const PreviewProduct = () => {
  const three = useSelector(selectorThreeProducts);
  const dispatch = useDispatch();
  const [isModal, setisModal] = useState(false)
  const currentProduct = useSelector(selectorPreviewProductInfo)
  const token = useSelector(selectorToken)
  const handleDeleteProduct = () => {
    if (currentProduct && currentProduct._id) {
      setisModal(true)
    }
  };
  const product = currentProduct
  const id = currentProduct._id
  const handleSaveChanges = currentProduct._id ?
    () => dispatch(actionChangeProduct({ id, product, token })) :
    () => dispatch(actionCreateNewProduct({ product, token }))
  return (
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
