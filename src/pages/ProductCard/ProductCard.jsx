import React, { useEffect, useState } from "react";
import ClickedCard from "../../components/Main/Cards/PrimaryCard/ClickedCard/ClickedCard";
import { useDispatch, useSelector } from "react-redux";
import { selectorCard, selectorLoading } from "../../store/selectors";
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
  const { id, type, categories } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorLoading);
  const currentProduct = useSelector(selectorCard);
  const [isClickedCardLoaded, setIsClickedCardLoaded] = useState(false);

  useEffect(() => {
    dispatch(actionGetOneProduct(id));
    dispatch(actionGetProductComments(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (Object.keys(currentProduct).length > 0) {
      setIsClickedCardLoaded(true);
    }
  }, [currentProduct]);

  return (
    <section>
      {isClickedCardLoaded && <ClickedCard />}
      {(!isLoading || isClickedCardLoaded) && (
        <>
          <section>
            <AlsoLike categories={categories} />
          </section>
          <section>
            <Blog />
          </section>
          <section>
            <AlsoBuy categories={categories} type={type} />
          </section>
          <section>
            <Instagram />
          </section>
        </>
      )}
    </section>
  );
};

export default ProductCard;
