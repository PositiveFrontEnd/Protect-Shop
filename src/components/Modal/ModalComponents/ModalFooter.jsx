import React from "react";
import Button from "../../Button/Button";
import PropTypes from 'prop-types'

const ModalFooter = ({ className, firstText, firstClassName, secondaryClassName,secondaryText,firstClick,secondaryClick})=>{
    return(
        <div className={className}>
            {secondaryText && <Button className={secondaryClassName} white click={secondaryClick}>{secondaryText}</Button>}
         {firstText && <Button className={firstClassName} black click={firstClick}>{firstText}</Button>}

        </div>
    )
}

ModalFooter.propTypes = {
    className: PropTypes.string,
    firstText: PropTypes.string,
    secondaryText: PropTypes.string,
    firstClick: PropTypes.func,
    secondaryClick: PropTypes.func,
    firstClassName: PropTypes.string,
    secondaryClassName: PropTypes.string
}

export default ModalFooter