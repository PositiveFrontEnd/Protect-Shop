import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
// import { selectorCard, selectorThreeProducts } from "../../store/selectors";
// import "../../components/Helpers/Base/Base.scss";
// import "./ProductCard.scss";
import { useParams } from "react-router-dom";
// import { actionGetOneProduct } from "../../store/productsSlice";
import ClickedCard from "../../../components/Main/Cards/PrimaryCard/ClickedCard/ClickedCard";
import AlsoLike from "../../../components/Main/AlsoLike/AlskoLike";
import Blog from "../../../components/Main/Blog/Blog";
import AlsoBuy from "../../../components/Main/AlsoBuy/AlsoBuy";
import Instagram from "../../../components/Main/Instagram/Instagram";
import { actionGetOneProduct } from "../../../store/productsSlice";
import { selectorCard, selectorPreviewProductInfo, selectorThreeProducts } from "../../../store/selectors";


const PreviewProduct = () => {
    const three = useSelector(selectorThreeProducts);
    const dispatch = useDispatch();
    const currentProduct = useSelector(selectorPreviewProductInfo)
    return (
        <>
          <section className="container center">
            <ClickedCard cards={currentProduct} colors={three} />
          </section>
          <section>
            <AlsoLike />
          </section>
          <section>
            <Blog />
          </section>
          <section>
            <AlsoBuy />
          </section>
          <section>
            <Instagram />
          </section>
        </>
        
    )
}



export default PreviewProduct;
