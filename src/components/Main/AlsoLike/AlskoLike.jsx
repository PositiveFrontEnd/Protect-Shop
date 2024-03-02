import React, { useState } from "react";
import {
  selectorCard,
  selectorProductsBycategory,
  selectorToken,
} from "../../../store/selectors";
import {
  actionGetOneProduct,
  actionGetThreeProducts,
  actionLoadingTwelveProductsByCategory,
} from "../../../store/productsSlice";
import { actionFavoriteForAll } from "../../../store/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../pages/ProductCard/ProductCard.scss";
import { Pagination, Navigation } from "swiper";
import Card from "../Cards/PrimaryCard/PrimaryCard/PrimaryCard.jsx";

const AlsoLike = () => {
  const product = useSelector(selectorCard);
  const token = useSelector(selectorToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [categories, setCategories] = useState()
  const handleProduct = (item) => {
    dispatch(actionGetOneProduct(item._id));
    dispatch(actionGetThreeProducts(item.name));
    navigate(
      `/catalogue/${item.categories}/${item.type}/${item._id}/${item.color}`
    );
  };
  const handleFavorite = (productId, event) => {
    event.stopPropagation();
    dispatch(actionFavoriteForAll({ productId, token }));
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await dispatch(actionLoadingTwelveProductsByCategory(`categories=${product.categories}`));
        setCategories(data)
      } catch (error) {
        console.error("Помилка під час виконання запиту:", error);
      }

    }

    fetch()

  }, [product._id]);
  return (
    <div className="swiper__also">
      <div className="container">
        <h4 className="swiper__also__title">You might also like</h4>
      </div>

      <Swiper
        slidesPerView={2}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        loop={true}
        spaceBetween={5}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          650: {
            slidesPerView: 3,
          },
          430: {
            slidesPerView: 2,
          },
        }}
      >
        {categories && categories.map((item) => (
          <SwiperSlide key={item._id} className="one_slide">
            <Card
              card={item}
              handleProduct={handleProduct}
              handleFavorite={handleFavorite}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AlsoLike;
