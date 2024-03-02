import React from "react";
import "./Input.scss";
import PropTypes from "prop-types";
import { Field } from "formik";

const Input = ({
    text,
    type,
    className,
    name,
    handleChange,
    checked,
    restProps
}) => {
    return (
        <label className="input__desktop__box">
            <Field
                type={type}
                name={name}
                className={className}
                onChange={handleChange}
                checked={checked}
                value={text}
                {...restProps}
            />
            <p className="input__desktop__label">{text}</p>
        </label>
    );
};

Input.defaultProps = {
    type: "checkbox",
    className: "input__desktop__checkbox",
};

Input.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    restProps: PropTypes.any,
    handleChange: PropTypes.func,
    name: PropTypes.string,
    checked: PropTypes.any
};


export default Input;
