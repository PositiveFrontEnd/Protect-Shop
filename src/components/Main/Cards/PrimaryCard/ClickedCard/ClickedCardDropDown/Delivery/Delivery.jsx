import React from "react";
import { useState } from "react";
import Plus from "../../Images/plus.svg?react";
import Minus from "../../Images/minus.svg?react";
import Free from "../../../../../Propositions/Images/icon1.svg?react";
import Dolar from "../../../../../Propositions/Images/dolar.svg?react";
import Mail from "../../../../../Propositions/Images/mail.svg?react";
const ClickedCardDropDownDelivery = ({ title, delivery }) => {
  const [isOpen, setIsOpen] = useState(false);
  let imageToShow;

  switch (delivery) {
    case "free":
      imageToShow = <Free className="drop__svg" />;
      break;
    case "for one $":
      imageToShow = <Dolar className="drop__svg" />;
      break;
    case "et the carrier`s expense":
      imageToShow = <Mail className="drop__svg" />;
      break;
    default:
      imageToShow = null;
  }
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
          {imageToShow}

          <p className="drop__descriptions">{delivery}</p>
        </div>
      )}
    </>
  );
};

export default ClickedCardDropDownDelivery;
