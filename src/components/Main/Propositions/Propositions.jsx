import React from "react";
import { useState, useEffect } from "react";
import MobilePropositions from "./Mobile/MobilePropositions";
import DesktopPropositions from "./Desktop/DesktopPropositions";

const Propositions = () => {
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
    <section>
      {isMobile ? <MobilePropositions /> : <DesktopPropositions />}
    </section>
  );
};

export default Propositions;
