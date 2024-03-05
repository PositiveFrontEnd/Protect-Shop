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
const ModalPromoCode = ({ isOpen, onclick, secondaryClick, firstClick,discription }) => {
    const token = useSelector(selectorToken)
    return (
        <>
            <ModalWrapper isOpen={isOpen}>
                <Modal>
                    <ModalHeader>
                        <div className="header__title">
                            <SvgThankRegistration />
                            <p className="title__text">Promo code</p>
                        </div>
                        <ModalClose onclick={onclick} />
                    </ModalHeader>
                    <ModalBody>
                        <p className="modal__body-title title__logOut">{discription}</p>
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

ModalPromoCode.defaultProps = {
    onclick: () => { },
    isOpen: () => { },
    firstClick: () => { },
    secondaryClick: () => { }
}

ModalPromoCode.propTypes = {
    onclick: PropTypes.func,
    isOpen: PropTypes.func,
    firstClick: PropTypes.func,
    secondaryClick: PropTypes.func,
    discription: PropTypes.string
}

export default ModalPromoCode