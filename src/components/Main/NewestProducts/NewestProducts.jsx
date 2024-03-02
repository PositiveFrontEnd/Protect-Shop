import React from "react";
import { useState, useEffect } from "react";
import MobileNewest from "./Mobile/MobileNewestProducts";
import DesktopNewest from "./Desktop/DesktopNewestProducts";

const NewestProducts = () => {
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
  return <section>{isMobile ? <MobileNewest /> : <DesktopNewest />}</section>;
};

export default NewestProducts;
