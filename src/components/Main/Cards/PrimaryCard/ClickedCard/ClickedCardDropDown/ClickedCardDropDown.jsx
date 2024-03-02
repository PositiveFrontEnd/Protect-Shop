import React from "react";
import Plus from "../Images/plus.svg?react";
import Minus from "../Images/minus.svg?react";
import { useState } from "react";
import "./ClickedCardDropDownStyles.scss";

const ClickedCardDropDown = ({ title, myCustomParam }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`drop__title ${!isOpen ? " active" : ""}`}
      >
        {title}
        {!isOpen ? <Plus /> : <Minus />}
      </button>
      {isOpen && (
        <div className={`drop__action ${isOpen ? "active" : ""}`}>
          <p className="drop__descriptions">{myCustomParam}</p>
        </div>
      )}
    </>
  );
};

export default ClickedCardDropDown;
