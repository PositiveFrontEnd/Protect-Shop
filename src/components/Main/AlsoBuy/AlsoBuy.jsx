import React, { useState } from "react";
import {
  selectorCard,
  selectorProductsByType,
  selectorToken,
} from "../../../store/selectors";
import {
  actionGetOneProduct,
  actionGetThreeProducts,
  actionLoadingTwelveProductsByType,
} from "../../../store/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { Pagination, Navigation } from "swiper";
import Card from "../Cards/PrimaryCard/PrimaryCard/PrimaryCard.jsx";
import { actionFavoriteForAll } from "../../../store/favoriteSlice.js";

const AlsoBuy = () => {
  const product = useSelector(selectorCard);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectorToken);
  const [additional, setAdditional] = useState();
  const { type, categories } = useParams();
  const handleProduct = (item) => {
    dispatch(actionGetOneProduct(item._id));
    dispatch(actionGetThreeProducts(item.name));
    navigate(`/catalogue/${categories}/${type}/${item._id}`);
  };
  const handleFavorite = (productId, event) => {
    event.stopPropagation();
    dispatch(actionFavoriteForAll({ productId, token }));
  };
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await dispatch(
          actionLoadingTwelveProductsByType(
            `categories=${categories}&type=${type}`
          )
        );
        setAdditional(data);
      } catch (error) {
        console.error("Помилка під час виконання запиту:", error);
      }
    };

    fetch();
  }, [product._id]);

  return (
    <div className="swiper__also">
      <div className="container">
        <h4 className=" swiper__also__title">Also Buy</h4>
      </div>

      <Swiper
        slidesPerView={2}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        spaceBetween={5}
        loop={true}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          510: {
            slidesPerView: 3,
          },
          430: {
            slidesPerView: 2,
          },
        }}
      >
        {additional &&
          additional.map((item) => (
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

export default AlsoBuy;
