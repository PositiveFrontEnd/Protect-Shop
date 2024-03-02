import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/swiper.min.css";
import "./SwiperStyles.scss";
import forMen from "/Images/forMenMobile.jpg";
import forKids from "/Images/forKidsMobile.jpg";
import forWomen from "/Images/forWomenMobile.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";


const MobileProducts = () => {

  return (
    <section>
      <div className="products__wrapper">
        <h2 className="products__title">Our Products</h2>
        <Swiper
          modules={[Pagination, Navigation]}
          initialSlide={1}
          slidesPerView={2}
          centeredSlides={true}
          className="mySwiper"
        >
          <SwiperSlide className="products__image">
            <div className="slide">
              <img src={forWomen} alt="" />
            </div>
            <Link className="button-black product__image__caption" to='/catalogue?categories=woman'>for woman</Link>
          </SwiperSlide>
          <SwiperSlide className="products__image">
            <div className="slide">
              <img src={forKids} alt="" />
            </div>

            <Link className="button-black product__image__caption" to='/catalogue?categories=children'>for woman</Link>
          </SwiperSlide>
          <SwiperSlide className="products__image">
            <div className="slide">
              <img src={forMen} alt="" />
            </div>
            <Link className="button-black product__image__caption" to='/catalogue?categories=men'>for woman</Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default MobileProducts;
