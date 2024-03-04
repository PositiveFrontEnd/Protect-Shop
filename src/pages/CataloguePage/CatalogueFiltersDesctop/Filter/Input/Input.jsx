import React from "react";
import "./Input.scss";
import PropTypes from "prop-types";
import { Field } from "formik";

const Input = ({
    text,
    type,
    name,
    handleChange,
    checked,
    restProps
}) => {
    return (
        <div className=" input__desktop__box">
            <Field
                type={type}
                name={name}
                className="input__desktop"
                onChange={handleChange}
                checked={checked}
                value={text}
                id={text}
                {...restProps}
            />
            <label for={text} className="input__desktop__label">{text}</label>
        </div>
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
