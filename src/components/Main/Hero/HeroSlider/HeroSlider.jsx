import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HeroSlider.scss";
import heroSale from "/Images/heroSale.jpg";
import heroNewCollection from "/Images/heroNewCollection.jpg";
import heroAdventure from "/Images/heroAdventure.jpg";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={5}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="hero__img__wrapper">
          <div>
            <img src={heroSale} />
            <div className="title__button__wrapper">
              <p className="title">Hurry up to get highest discount</p>
              <Link className="button-black hero__button" to="/catalogue?status=sell">  see more</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hero__img__wrapper">
          <div>
            <img src={heroNewCollection} />
            <div className="title__button__wrapper">
              <p className="title">New collection for summer travel</p>
              <Link className="button-black hero__button" to="/catalogue?categories=men,woman&type=backpack">  see more</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hero__img__wrapper">
          <div>
            <img src={heroAdventure} />
            <div className="title__button__wrapper">
              <p className="title">Essentials for Every Adventure</p>
              <Link className="button-black hero__button" to="/catalogue?categories=children&type=backpack">  see more</Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default HeroSlider;
