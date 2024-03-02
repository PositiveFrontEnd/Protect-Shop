import React from "react";
import Modal from "./ModalComponents/Modal";
import ModalWrapper from "./ModalComponents/ModalWrapper";
import ModalHeader from "./ModalComponents/ModalHeader";
import ModalClose from "./ModalComponents/ModalClose";
import ModalBody from "./ModalComponents/ModalBody";
import ModalFooter from "./ModalComponents/ModalFooter";
import SvgThankRegistration from "./ModalSvg/svgThankRegistration.svg?react";
import PropTypes from 'prop-types'
import { useSelector } from "react-redux";
import { selectorToken } from "../../store/selectors";
const ModalThanksOrder = ({ isOpen, onclick, secondaryClick, firstClick }) => {
    const token = useSelector(selectorToken)
    return (
        <>
            <ModalWrapper isOpen={isOpen}>
                <Modal>
                    <ModalHeader>
                        <div className="header__title">
                            <SvgThankRegistration />
                            <p className="title__text">Thanks for your order!</p>
                        </div>
                        <ModalClose onclick={onclick} />
                    </ModalHeader>
                    <ModalBody>
                        <p className="modal__body-title title__logOut">Your order has been processed successfully!</p>
                        <ModalFooter
                            className="footer__email"
                            firstText="Continue shopping"
                            firstClassName="modal__button"
                            secondaryClassName="modal__button"
                            firstClick={firstClick}
                            secondaryClick={secondaryClick}
                            secondaryText = {token ? ("View my orders") : null}
                            
                        />
                    </ModalBody>
                </Modal>
            </ModalWrapper>
        </>
    )
}

ModalThanksOrder.defaultProps = {
    onclick: () => { },
    isOpen: () => { },
    firstClick: () => { },
    secondaryClick: () => { }
}

ModalThanksOrder.propTypes = {
    onclick: PropTypes.func,
    isOpen: PropTypes.func,
    firstClick: PropTypes.func,
    secondaryClick: PropTypes.func,
}

export default ModalThanksOrder