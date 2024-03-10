import React from "react";
import DesktopFeedbacks from "./Desktop/DesktopFeedbacks";
import { useState, useEffect } from "react";
import MobileFeedbacks from "./Mobile/MobileFeedbacks";
import { useDispatch, useSelector } from "react-redux";
import { actionGetAllShopComments } from "../../../store/shopCommentsSlice";
import { selectorShopComments } from "../../../store/selectors";

const Feedbacks = () => {
  const dispatch = useDispatch();
  const shopComments = useSelector(selectorShopComments);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );
  const handleMediaQuery = (event) => {
    setIsMobile(event.matches);
  };
  useEffect(() => {
    dispatch(actionGetAllShopComments());
  }, []);
  useEffect(() => {
    const mediaQueryList = window.matchMedia("(max-width: 768px)");
    mediaQueryList.addListener(handleMediaQuery);
    return () => {
      mediaQueryList.removeListener(handleMediaQuery);
    };
  }, []);
  return (
    <section>
      {isMobile ? (
        <MobileFeedbacks comments={shopComments} />
      ) : (
        <DesktopFeedbacks comments={shopComments} />
      )}
    </section>
  );
};

export default Feedbacks;
