import React from "react";
import Modal from "./ModalComponents/Modal";
import ModalWrapper from "./ModalComponents/ModalWrapper";
import ModalHeader from "./ModalComponents/ModalHeader";
import ModalClose from "./ModalComponents/ModalClose";
import ModalBody from "./ModalComponents/ModalBody";
import ModalFooter from "./ModalComponents/ModalFooter";
import SvgEmail from "./ModalSvg/svgEmail.svg?react";
import PropTypes from 'prop-types'

const ModalEmailAutorization = ({ isOpen, onclick }) => {
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
            <p className="modal__body-title title__registr">Check your email and finish autorization</p>
            <ModalFooter
              className="footer__email"
              secondaryText="Send a letter again"
              firstText="Continue"
              firstClassName="modal__button"
              secondaryClassName="modal__button"
            />
          </ModalBody>
        </Modal>
      </ModalWrapper>
    </>
  )
}

ModalEmailAutorization.defaultProps = {
  onclick: () => { },
  isOpen: () => { }
}

ModalEmailAutorization.propTypes = {
  onclick: PropTypes.func,
  isOpen: PropTypes.func,
}

export default ModalEmailAutorization