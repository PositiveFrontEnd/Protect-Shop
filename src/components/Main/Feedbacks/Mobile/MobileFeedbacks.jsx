import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "./MobileFeedbacks.scss";
import feedback1 from "/Images/feedback1.jpg";
import feedback2 from "/Images/feedback2.jpg";
import feedback3 from "/Images/feedback3.jpg";
import Icon from "../images/star.svg?react";
import Button from "../../../Button/Button";

const MobileFeedbacks = () => {
  return (
    <div className="mobile__feedbacks__wrapper">
      <h2 className="feedbacks__title">feedbacks</h2>
      <div>
        <Swiper
          spaceBetween={15}
          slidesPerView={2}
          centeredSlides={true}
          initialSlide={1}
        >
          <SwiperSlide className="feedbacks__card">
            <div className="card__image">
              <img src={feedback1} alt="" />
            </div>
            <div className="card__stars">
              <Icon className="star" />
              <Icon className="star" />
              <Icon className="star" />
              <Icon className="star" />
              <Icon className="star" />
            </div>

            <p className="card__name">Olena</p>
            <p className="card__description">
              Small bags are my favorite in this season. They are perfect for
              parties and weekends when you don't have to wear many things
            </p>
          </SwiperSlide>

          <SwiperSlide className="feedbacks__card">
            <div className="card__image">
              <img src={feedback2} alt="" />
            </div>
            <div className="card__stars">
              <Icon className="star" />
              <Icon className="star" />
              <Icon className="star" />
              <Icon className="star" />
              <Icon className="star" />
            </div>
            <p className="card__name">Semen</p>
            <p className="card__description">
              Backpack is the best for me. These bags are suitable for many
              styles, from classics to modern minimalism.
            </p>
          </SwiperSlide>

          <SwiperSlide className="feedbacks__card">
            <div className="card__image">
              <img src={feedback3} alt="" />
            </div>
            <div className="card__stars">
              <Icon className="star" />
              <Icon className="star" />
              <Icon className="star" />
              <Icon className="star" />
              <Icon className="star" />
            </div>
            <p className="card__name">Anna</p>
            <p className="card__description">
              Handbags with large fasteners and chains it’s for me. Such bags
              can be worn both on the shoulder and at the fingertips.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mobile__feedbacks__button">
        <Button white> See More</Button>
      </div>
    </div>
  );
};

export default MobileFeedbacks;
