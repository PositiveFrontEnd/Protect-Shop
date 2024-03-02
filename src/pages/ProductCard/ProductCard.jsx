import React, { useEffect } from "react";
import ClickedCard from "../../components/Main/Cards/PrimaryCard/ClickedCard/ClickedCard";
import { useDispatch, useSelector } from "react-redux";
import { selectorCard, selectorProductComment, selectorProductComments, selectorThreeProducts } from "../../store/selectors";
import "../../components/Helpers/Base/Base.scss";
import "./ProductCard.scss";
import Blog from "../../components/Main/Blog/Blog";
import AlsoLike from "../../components/Main/AlsoLike/AlskoLike";
import AlsoBuy from "../../components/Main/AlsoBuy/AlsoBuy";
import Instagram from "../../components/Main/Instagram/Instagram";
import { useParams } from "react-router-dom";
import { actionGetOneProduct } from "../../store/productsSlice";
import { actionGetProductComments } from "../../store/commentsSlice";

const ProductCard = () => {
  const three = useSelector(selectorThreeProducts);
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentProduct = useSelector(selectorCard);

  useEffect(() => {
    dispatch(actionGetProductComments(id));
  }, [id]);

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
  );
};

export default ProductCard;
