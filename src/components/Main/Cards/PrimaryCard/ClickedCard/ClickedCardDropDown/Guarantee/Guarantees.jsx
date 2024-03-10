import React from "react";
import Plus from "../../Images/plus.svg?react";
import Minus from "../../Images/minus.svg?react";
import { useState } from "react";
import Icon2 from "../../../../../Propositions/Images/icon2.svg?react";
import Icon3 from "../../../../../Propositions/Images/icon3.svg?react";
import Icon4 from "../../../../../Propositions/Images/icon4.svg?react";
import Wrapper from "../../../../../Propositions/Images/wrapper1.svg?react";
import "../ClickedCardDropDownStyles.scss";

const ClickedCardDropDownGuarantees = ({ title }) => {
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
          <div className="drop__content">
            <div className="drop__image__container">
              <Wrapper className="drop__wrapper" />
              <Icon2 className="drop__image" />
              <p className="drop__text">Special proposal</p>
            </div>
            <div className="drop__image__container">
              <Wrapper className="drop__wrapper" />
              <Icon3 className="drop__image" />
              <p className="drop__text">Easy return</p>
            </div>
            <div className="drop__image__container">
              <Wrapper className="drop__wrapper" />
              <Icon4 className="drop__image" />
              <p className="drop__text">100% Guarantees</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ClickedCardDropDownGuarantees;
