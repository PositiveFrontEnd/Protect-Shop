import React from "react";
import { Field, ErrorMessage } from "formik";
import cn from "classnames";
import PropTypes from "prop-types";
import "../Registration/RegistrationF.scss";
import "./InputStyles.scss"

const SelectInput = (props) => {
  const { className, label, name, error, touched, options, ...restProps } = props;

  return (
    <label
      className={cn("select__label select__modal ", className, { has_validation: error })}
    >
      <div className="select__wrapper">
        <span className="select__label__text">{label}</span>
        <Field
          as="select"
          className={cn("select__input select__input-modal", {
            "input-error": error && touched,
            "input-ok": !error && touched,
          })}
          name={name}
          {...restProps}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} label={option.label} />
          ))}
        </Field>
      </div>
      <ErrorMessage className="error__message" name={name} component="p" />
    </label>
  );
};

SelectInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  touched: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SelectInput;