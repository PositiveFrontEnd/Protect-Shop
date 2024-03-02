import React from "react";
import "./Desktop/DesktopClickedCardStyle.scss";

const Color = ({ item, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        backgroundColor: item.color,
        border: "1px solid #afa7a7",
        opacity: "0.6",
        cursor: "pointer",
        width: "24px",
        height: "24px",
      }}
    ></button>
  );
};

export default Color;
