import React from "react";
import DesktopFeedbacks from "./Desktop/DesktopFeedbacks";
import { useState, useEffect } from "react";
import MobileFeedbacks from "./Mobile/MobileFeedbacks";

const Feedbacks = () => {
  // const navigation = useNavigate();
  // const navigationFeedbackPage = () => {
  //   navigation("home/feedbacks");
  // };
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );
  const handleMediaQuery = (event) => {
    setIsMobile(event.matches);
  };
  useEffect(() => {
    const mediaQueryList = window.matchMedia("(max-width: 768px)");
    mediaQueryList.addListener(handleMediaQuery);
    return () => {
      mediaQueryList.removeListener(handleMediaQuery);
    };
  }, []);
  return (
    <section>{isMobile ? <MobileFeedbacks /> : <DesktopFeedbacks />}</section>
  );
};

export default Feedbacks;
