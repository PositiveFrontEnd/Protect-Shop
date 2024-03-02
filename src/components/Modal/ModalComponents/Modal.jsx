import React from "react";
import PropTypes from 'prop-types'

const Modal = ({ children }) => {
    const stopPropagation = (e) => {
        e.stopPropagation();
    };


    return (
        <div className="modal" onClick={stopPropagation}>{children}</div>
    )
}

Modal.propTypes = {
    children: PropTypes.any
}


export default Modal