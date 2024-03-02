import React from "react";
import { Field, ErrorMessage } from "formik";
import cn from "classnames";
import PropTypes from "prop-types";
import "../Registration/RegistrationF.scss";

const CheckboxInput = (props) => {
  const { className, label, name, error, touched, ...restProps } = props;

  return (
    <label
      className={cn("checkbox__label", className, { has_validation: error })}
    >
      <div className="checkbox__wrapper">
        <Field
          type="checkbox"
          className="checkbox__input"
          name={name}
          {...restProps}
        />
        <span className="checkbox__label__text">{label}</span>
      </div>
      <ErrorMessage className="err__checkbox" name={name} component="p" />
    </label>
  );
};

CheckboxInput.defaultProps = {
  type: "text",
};

CheckboxInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  touched: PropTypes.bool,
};

export default CheckboxInput;
