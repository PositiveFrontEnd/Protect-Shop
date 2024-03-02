import React from "react";
import "../Modal.scss"
import PropTypes from 'prop-types'

const ModalWrapper = ({ children, isOpen }) => {
    return (
        <div className="modal__wrapper" onClick={isOpen}>{children}</div>
    )
}

ModalWrapper.defaultProps = {
    isOpen: () => { }
}

ModalWrapper.propTypes = {
    children: PropTypes.any,
    isOpen: PropTypes.func
}

export default ModalWrapper