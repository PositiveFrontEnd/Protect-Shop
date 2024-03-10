import React, { useEffect, useState } from "react";
import "./DesktopFeedbacks.scss";
import Button from "../../../Button/Button";
import { useNavigate } from "react-router";
import DesktopFeedbackCard from "./desktopCard.jsx";
const DesktopFeedbacks = ({ comments }) => {
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
    <div className="feedbacks__wrapper">
      <div className="container feedbacks">
        <h2 className="feedbacks__title">feedbacks</h2>
        <div className="feedbacks__content">
          {randomComments.map((item, index) => (
            <DesktopFeedbackCard
              key={index}
              name={item.customer?.firstName || 'Unknown User'}
              avatar={item.customer?.avatarUrl}
              likes={item.likes}
              comment={item.advantages}
              background={item.customer?.background || ''}
            />
          ))}
        </div>
        <div className="feedbacks__button">
          <Button click={() => navigate("/feedbacks")} white>
            see more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DesktopFeedbacks;
