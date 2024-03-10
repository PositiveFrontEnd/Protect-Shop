import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "./MobileFeedbacks.scss";
import Button from "../../../Button/Button";
import { useNavigate } from "react-router";
import MobileFeedbackCard from "./mobileCard.jsx";
const MobileFeedbacks = ({ comments }) => {
  const navigate = useNavigate();
  const [randomComments, setRandomComments] = useState([]);
  useEffect(() => {
    const shuffleArray = (array) => {
      const newArray = [...array];
      let currentIndex = newArray.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = newArray[currentIndex];
        newArray[currentIndex] = newArray[randomIndex];
        newArray[randomIndex] = temporaryValue;
      }
      return newArray;
    };

    const shuffledComments = shuffleArray(comments);

    const selectedComments = shuffledComments.slice(0, 3);
    setRandomComments(selectedComments);
  }, [comments]);
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
          {randomComments.map((item, index) => (
            <SwiperSlide key={index} className="feedbacks__card">
              <MobileFeedbackCard
                key={index}
                name={item.customer?.firstName || 'Unknown User'}
                avatar={item.customer?.avatarUrl}
                likes={item.likes}
                comment={item.advantages}
                background={item.customer?.background || ''}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mobile__feedbacks__button">
        <Button click={() => navigate("/feedbacks")} white>
          {" "}
          See More
        </Button>
      </div>
    </div>
  );
};

export default MobileFeedbacks;
