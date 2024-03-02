import React from "react";
import DesktopProducts from "./Desktop/DesktopProducts";
import MobileProducts from "./Mobile/MobileProducts";
import { useState, useEffect } from "react";

const OurProducts = () => {
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
  return <>{isMobile ? <MobileProducts /> : <DesktopProducts />}</>;
};

export default OurProducts;
