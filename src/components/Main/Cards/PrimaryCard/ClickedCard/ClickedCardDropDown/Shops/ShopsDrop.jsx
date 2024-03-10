import React from "react";
import Plus from "../../Images/plus.svg?react";
import Minus from "../../Images/minus.svg?react";
import { useState } from "react";
import "../ClickedCardDropDownStyles.scss";
import { NavLink } from "react-router-dom";

const ClickedCardDropDownShops = ({ title }) => {
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
          <div className="drop__shops">
            <p>
              <span>
                <NavLink to={"/shops/kharkiv"}>Kharkiv</NavLink>
              </span>
              {">"}
            </p>
            <p>
              <span>
                <NavLink to={"/shops/kyiv"}>Kyiv</NavLink>
              </span>
              {">"}
            </p>
            <p>
              <span>
                <NavLink to={"/shops/odesa"}>Odesa</NavLink>
              </span>
              {">"}
            </p>
            <p>
              <span>
                <NavLink to={"/shops/lviv"}>Lviv</NavLink>
              </span>
              {">"}
            </p>
            <p>
              <span>
                <NavLink to={"/shops/dnipro"}>Dnipro</NavLink>
              </span>
              {">"}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ClickedCardDropDownShops;
