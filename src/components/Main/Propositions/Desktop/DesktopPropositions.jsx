import React from "react";
import "./DesktopPropositionsStyles.scss";
import Wrapper1 from "../Images/wrapper1.svg?react";
import Icon1 from "../Images/icon1.svg?react";
import Icon2 from "../Images/icon2.svg?react";
import Icon3 from "../Images/icon3.svg?react";
import Icon4 from "../Images/icon4.svg?react";

const DesktopPropositions = () => {
  return (
    <div className="desktop__propositions__wrapper">
      <div className="container">
        <div className="desktop__propositions__cards">
          <div className="desktop__propositions__card">
            <div className="desktop__propositions__icons">
              <Wrapper1 className="icon__wrapper" />
              <Icon1 className="icon__center" />
            </div>
            <span>Free delivery</span>
          </div>
          <div className="desktop__propositions__card">
            <div className="desktop__propositions__icons">
              <Wrapper1 className="icon__wrapper" />
              <Icon2 className="icon__center" />
            </div>
            <span>Special proposal</span>
          </div>
          <div className="desktop__propositions__card">
            <div className="desktop__propositions__icons">
              <Wrapper1 className="icon__wrapper" />
              <Icon3 className="icon__center" />
            </div>
            <span>Easy return</span>
          </div>
          <div className="desktop__propositions__card">
            <div className="desktop__propositions__icons">
              <Wrapper1 className="icon__wrapper" />
              <Icon4 className="icon__center" />
            </div>
            <span>Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopPropositions;
