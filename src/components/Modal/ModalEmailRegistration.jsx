import React from "react";
import Modal from "./ModalComponents/Modal";
import ModalWrapper from "./ModalComponents/ModalWrapper";
import ModalHeader from "./ModalComponents/ModalHeader";
import ModalClose from "./ModalComponents/ModalClose";
import ModalBody from "./ModalComponents/ModalBody";
import ModalFooter from "./ModalComponents/ModalFooter";
import SvgEmail from "./ModalSvg/svgEmail.svg?react";
import PropTypes from 'prop-types'

const ModalEmailRegistretion = ({ isOpen, onclick }) => {
  return (
    <>
      <ModalWrapper isOpen={isOpen}>
        <Modal>
          <ModalHeader>
            <div className="header__title">
              <SvgEmail />
              <p className="title__text">Check your email!</p>
            </div>
            <ModalClose onclick={onclick} />
          </ModalHeader>
          <ModalBody>
            <p className="modal__body-title title__registr">Check your email and finish Registration</p>
            <ModalFooter
              className="footer__email"
              secondaryText="Change email address"
              firstText="Send a letter again"
              firstClassName="modal__button"
              secondaryClassName="modal__button"
            />
          </ModalBody>
        </Modal>
      </ModalWrapper>
    </>
  )
}

ModalEmailRegistretion.defaultProps = {
  onclick: () => { },
  isOpen: () => { }
}

ModalEmailRegistretion.propTypes = {
  onclick: PropTypes.func,
  isOpen: PropTypes.func,
}

export default ModalEmailRegistretion