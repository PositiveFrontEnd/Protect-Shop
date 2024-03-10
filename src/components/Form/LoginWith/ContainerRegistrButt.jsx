import React from "react";
import PropTypes from "prop-types";
import "./ContainerRegistrButtStyle.scss";
import "../../../pages/AuthorizationPage/AuthorizationPage.scss";

const ContainerRegistrButt = ({ title }) => {

  return (
    <>
      <div className="form__butt__container">
        <span className="form__title">{title}</span>
        <div className="form__butt__box">
        </div>
        <span className="form__butt__element">OR</span>
      </div>
    </>
  );
}

ContainerRegistrButt.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ContainerRegistrButt