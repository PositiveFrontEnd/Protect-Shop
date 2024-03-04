import React from "react";
import Modal from "./ModalComponents/Modal";
import ModalWrapper from "./ModalComponents/ModalWrapper";
import ModalHeader from "./ModalComponents/ModalHeader";
import ModalClose from "./ModalComponents/ModalClose";
import ModalBody from "./ModalComponents/ModalBody";
import ModalFooter from "./ModalComponents/ModalFooter";
import SvgLogOut from "./ModalSvg/svgLogOut.svg?react";
import PropTypes from 'prop-types'

const ModalProductNotExist = ({ isOpen, onclick, secondaryClick }) => {
    return (
        <>
            <ModalWrapper isOpen={isOpen}>
                <Modal>
                    <ModalHeader>
                        <div className="header__title">
                            <SvgLogOut />
                            <p className="title__text">Worning!</p>
                        </div>
                        <ModalClose onclick={onclick} />
                    </ModalHeader>
                    <ModalBody>
                        <p className="modal__body-title title__logOut">this product is not exist.</p>
                        <ModalFooter
                            className="footer__email"
                            secondaryText="Ok"
                            secondaryClassName="modal__button"
                            secondaryClick={secondaryClick}
                        />
                    </ModalBody>
                </Modal>
            </ModalWrapper>
        </>
    )
}

ModalProductNotExist.defaultProps = {
    onclick: () => { },
    isOpen: () => { }
}

ModalProductNotExist.propTypes = {
    onclick: PropTypes.func,
    isOpen: PropTypes.func,
}

export default ModalProductNotExist