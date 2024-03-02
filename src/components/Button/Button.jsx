import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./Button.scss";
const Button = (props) => {

    const {
        type,
        className,
        children,
        click,
        white,
        black,
        svgLeft,
        svgRight,
        ...restProps
    } = props;
    return (

        <button
            onClick={click}
            className={cx(
                { "button-white": white },
                { "button-black": black },
                className
            )}
            type={type}
            {...restProps}
        >
            {svgLeft}
            {children}
            {svgRight}
        </button>)


};
Button.defaultProps = {
    type: "button",
    click: () => { },
};

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.any,
    click: PropTypes.func,
    white: PropTypes.bool,
    black: PropTypes.bool,
    svgLeft: PropTypes.element,
    svgRight: PropTypes.element,
};

export default Button;



