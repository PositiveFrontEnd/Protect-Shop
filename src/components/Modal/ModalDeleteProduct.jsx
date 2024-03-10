import React from "react";
import Modal from "./ModalComponents/Modal";
import ModalWrapper from "./ModalComponents/ModalWrapper";
import ModalHeader from "./ModalComponents/ModalHeader";
import ModalClose from "./ModalComponents/ModalClose";
import ModalBody from "./ModalComponents/ModalBody";
import ModalFooter from "./ModalComponents/ModalFooter";
import PropTypes from 'prop-types'

const ModalDeleteProduct = ({ isOpen, onclick, firstClick, secondaryClick }) => {
    return (
        <>
            <ModalWrapper isOpen={isOpen}>
                <Modal>
                    <ModalHeader>
                        <div className="header__title">
                            <p className="title__text">Worning!</p>
                        </div>
                        <ModalClose onclick={onclick} />
                    </ModalHeader>
                    <ModalBody>
                        <p className="modal__body-title title__logOut">Are you sure you want to delete product?</p>
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

ModalDeleteProduct.defaultProps = {
    onclick: () => { },
    isOpen: () => { }
}

ModalDeleteProduct.propTypes = {
    onclick: PropTypes.func,
    isOpen: PropTypes.func,
}

export default ModalDeleteProduct