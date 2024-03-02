import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import cn from "classnames";
import PropTypes from "prop-types";
import "../Registration/RegistrationF.scss";
import "./InputStyles.scss"
import "../ModalForm/ModalFormCall.scss"
import Icon from "../../Form/FormsMedia/error-valid.svg?react";
import IconOk from "../../Form/FormsMedia/ok.svg?react";

const Input = (props) => {
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

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const labelClassName = cn("form__field form__field-modal form__field-registr ", className, {
    has_validation: error,
  });
  return (
    <label className={labelClassName}>
      {error && touched && !isFocused && <Icon className="svg__error-valid svg__error-valid__modal" />}
      {!error && touched && !isFocused && <IconOk className="svg__ok-valid svg__ok-valid__modal" />}
      <div className="form__little__box ">
        <p className="form__title">{label}</p>
        <Field
          type={type}
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
        <ErrorMessage className="error__message error__message-modal" name={name} component="p" />
      </div>
    </label>
  );
};

Input.defaultProps = {
  type: "text",
};

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};
export default Input;
