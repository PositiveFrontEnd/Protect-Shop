import React from "react"
import PropTypes from 'prop-types'

const ModalClose = ({ onclick }) => {
    return (
        <button type="button" onClick={onclick} className="header__button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="black">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.12587 8L2 2.87413L2.87413 2L8 7.12587L13.1259 2L14 2.87413L8.87413 8L14 13.1259L13.1259 14L8 8.87413L2.87413 14L2 13.1259L7.12587 8Z" fill="white" />
            </svg>
        </button>
    )
}

ModalClose.defaultProps = {
    onclick: () => { }
}

ModalClose.propTypes = {
    onclick: PropTypes.func
}


export default ModalClose