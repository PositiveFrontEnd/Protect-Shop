import React from "react"
import PropTypes from 'prop-types'

const ModalBody = ({ children }) => {
    return (
        <div className="modal__container">
            <div className="modal__content modal__content-form">{children}</div>
        </div>
    )
}

ModalBody.propTypes = {
    children: PropTypes.any
}

export default ModalBody