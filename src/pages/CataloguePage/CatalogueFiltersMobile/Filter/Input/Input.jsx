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
    restProps
}) => {
    return (
        <label className="input__box">
            <Field
                type={type}
                name={name}
                className={className}
                onChange={handleChange}
                value={text}
                {...restProps}
            />
            <p className="input__label">{text}</p>
        </label>
    );
};

Input.defaultProps = {
    type: "checkbox",
    className: "input__checkbox",
};

Input.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    restProps: PropTypes.any,
    icon: PropTypes.any,
    name: PropTypes.string,
};

export default Input;
