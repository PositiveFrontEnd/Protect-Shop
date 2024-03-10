import React from "react";
import Modal from "./ModalComponents/Modal";
import ModalWrapper from "./ModalComponents/ModalWrapper";
import ModalHeader from "./ModalComponents/ModalHeader";
import ModalClose from "./ModalComponents/ModalClose";
import ModalBody from "./ModalComponents/ModalBody";
import SvgForm from "./ModalSvg/svgForm.svg?react";
import PropTypes from 'prop-types'
import ModalFormCallMeOut from "../Form/ModalForm/ModalFormCallMeOut";

const ModalForm = ({ isOpen, onclick }) => {
    return (
        <>
            <ModalWrapper isOpen={isOpen}>
                <Modal>
                    <ModalHeader>
                        <div className="header__title">
                            <SvgForm />
                            <p className="title__text">Call me out</p>
                        </div>
                        <ModalClose onclick={onclick} />
                    </ModalHeader>
                    <ModalBody>
                        <p className="modal__body-title title__CallOut">If you still have questions, leave your contacts and our manager will call you</p>
                        <ModalFormCallMeOut isOpen={isOpen} />
                    </ModalBody>
                </Modal>
            </ModalWrapper>
        </>
    )
}

ModalForm.defaultProps = {
    onclick: () => { },
    isOpen: () => { }
}

ModalForm.propTypes = {
    onclick: PropTypes.func,
    isOpen: PropTypes.func,
}


export default ModalForm