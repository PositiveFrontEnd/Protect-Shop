import React from "react";
import Icon1 from "../../../../../Propositions/Images/icon1.svg?react";
const DeliveryMethod = ({ delivery }) => {
  return (
    <div>
      <div className="desktop__propositions__icons">
        <Icon1 className="icon__center" />
        <p>{delivery}</p>
      </div>
    </div>
  );
};

export default DeliveryMethod;
