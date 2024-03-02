import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import cn from "classnames";
import PropTypes from "prop-types";
import "../Registration/RegistrationF.scss";
import "./InputStyles.scss";
import CloseEye from "../FormsMedia/closeEye.svg?react";
import OpenEye from "../FormsMedia/openEye.svg?react";

const InputPass = (props) => {
  const {
    className,
    label,
    type,
    name,
    placeholder,
    error,
    touched,
    ...restProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const togglePasswordVisibility = () => {
    setIsShowPassword(!isShowPassword);
  };

  const labelClassName = cn("form__field form__field-modal form__field-registr", className, {
    has_validation: error,
  });

  return (
    <label className={labelClassName}>
      <div className="form__little__box">
        <p className="form__title">{label}</p>
        <div className="form__little__box-pass">
          <Field
            type={isShowPassword ? "text" : "password"}
            className={cn("form__input form__input-modal", {
              "input-error": error && touched,
              "input-ok": !error && touched,
            })}
            name={name}
            placeholder={placeholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...restProps}
          />
          <button
            type="button"
            className="password__toggle-btn"
            onClick={togglePasswordVisibility}
          >
            {isShowPassword ? <OpenEye /> : <CloseEye />}
          </button>
        </div>
        <ErrorMessage
          className="error__message error__message-modal"
          name={name}
          component="p"
        />
      </div>
    </label>
  );
};

InputPass.defaultProps = {
  type: "password",
};

InputPass.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};

export default InputPass;
