import React from "react";
import "./MobilePropositionsStyles.scss";
import Wrapper1 from "../Images/wrapper1.svg?react";
import Icon1 from "../Images/icon1.svg?react";
import Icon2 from "../Images/icon2.svg?react";
import Icon3 from "../Images/icon3.svg?react";
import Icon4 from "../Images/icon4.svg?react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const MobilePropositions = () => {
  return (
    <div className="mobile__propositions__wrapper">
      <div className="desktop__propositions__swiper">
        <Swiper slidesPerView={2} loop={true}>
          <SwiperSlide className="mobile__propositions__card">
            <div className="mobile__propositions__icons">
              <Wrapper1 className="mobile__wrapper" />
              <Icon1 className="mobile__icon" />
            </div>
            <span className="mobile__propositions__name">Free delivery</span>
          </SwiperSlide>
          <SwiperSlide className="mobile__propositions__card">
            <div className="mobile__propositions__icons">
              <Wrapper1 className="mobile__wrapper" />
              <Icon2 className="mobile__icon" />
            </div>
            <span className="mobile__propositions__name">Special proposal</span>
          </SwiperSlide>
          <SwiperSlide className="mobile__propositions__card">
            <div className="mobile__propositions__icons">
              <Wrapper1 className="mobile__wrapper" />
              <Icon3 className="mobile__icon" />
            </div>
            <span className="mobile__propositions__name">Easy return</span>
          </SwiperSlide>
          <SwiperSlide className="mobile__propositions__card">
            <div className="mobile__propositions__icons">
              <Wrapper1 className="mobile__wrapper" />
              <Icon4 className="mobile__icon" />
            </div>
            <span className="mobile__propositions__name">Guarantee</span>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MobilePropositions;
