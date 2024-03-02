import React from "react";
import Modal from "./ModalComponents/Modal";
import ModalWrapper from "./ModalComponents/ModalWrapper";
import ModalHeader from "./ModalComponents/ModalHeader";
import ModalClose from "./ModalComponents/ModalClose";
import ModalBody from "./ModalComponents/ModalBody";
import ModalFooter from "./ModalComponents/ModalFooter";
import SvgLogOut from "./ModalSvg/svgLogOut.svg?react";
import PropTypes from 'prop-types'

const ModalLogOut = ({ isOpen, onclick, firstClick, secondaryClick }) => {
    return (
        <>
            <ModalWrapper isOpen={isOpen}>
                <Modal>
                    <ModalHeader>
                        <div className="header__title">
                            <SvgLogOut />
                            <p className="title__text">Don’t leave us!</p>
                        </div>
                        <ModalClose onclick={onclick} />
                    </ModalHeader>
                    <ModalBody>
                        <p className="modal__body-title title__logOut">do you want to log out?</p>
                        <ModalFooter
                            className="footer__email"
                            secondaryText="Yes"
                            firstText="No"
                            firstClassName="modal__button"
                            secondaryClassName="modal__button"
                            firstClick={firstClick}
                            secondaryClick={secondaryClick}
                        />
                    </ModalBody>
                </Modal>
            </ModalWrapper>
        </>
    )
}

ModalLogOut.defaultProps = {
    onclick: () => { },
    isOpen: () => { }
}

ModalLogOut.propTypes = {
    onclick: PropTypes.func,
    isOpen: PropTypes.func,
}

export default ModalLogOut