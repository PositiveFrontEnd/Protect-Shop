import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "./MobileNewestProductsStyles.scss";
import Photo1 from "/Images/bag3.jpg";
import Photo2 from "/Images/bag2.jpg";
import Photo3 from "/Images/bag1.jpg";
import { Link } from "react-router-dom";

const MobileNewest = () => {
  return (
    <div className="mobile__newest__wrapper">
      <h2 className="mobile__newest__title">The Newest products</h2>
      <div className="mobile__newest__swiper">
        <Swiper
          spaceBetween={0}
          slidesPerView={2}
          centeredSlides={true}
          initialSlide={1}
        >
          <SwiperSlide
            className="mobile__newest__card">
            <Link to="/catalogue?status=popular">
              <img className="mobile__newest__img" src={Photo1} alt="" />
              <span className="mobile__newest__name">Popular 2024</span>
            </Link>
          </SwiperSlide>
          <SwiperSlide
            className="mobile__newest__card">
            <Link to="/catalogue?type=wallet">
              <img className="mobile__newest__img" src={Photo2} alt="" />
              <span className="mobile__newest__name">Wallets</span>
            </Link>
          </SwiperSlide>
          <SwiperSlide
            className="mobile__newest__card">
            <Link to="/catalogue?type=purse">
              <img className="mobile__newest__img" src={Photo3} alt="" />
              <span className="mobile__newest__name">Purses</span>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MobileNewest;
