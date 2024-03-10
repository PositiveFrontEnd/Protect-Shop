import React from "react";
import Modal from "./ModalComponents/Modal";
import ModalWrapper from "./ModalComponents/ModalWrapper";
import ModalHeader from "./ModalComponents/ModalHeader";
import ModalBody from "./ModalComponents/ModalBody";
import SvgAddedCart from "./ModalSvg/svgAddedCart.svg?react"
import PropTypes from 'prop-types'

const ModalAddToBasket = ({ isOpen }) => {
  return (
    <ModalWrapper isOpen={isOpen}>
      <Modal>
        <ModalHeader>
          <div className="header__title">
            <SvgAddedCart />
            <p className="title__text">Goods added to cart successfully!</p>
          </div>
        </ModalHeader>
        <ModalBody>
          <p className="modal__body-title title__logOut">Your product has been successfully added to the cart!</p>
        </ModalBody>
      </Modal>
    </ModalWrapper>
  )
}

ModalAddToBasket.propTypes = {
  isOpen: PropTypes.func,
}

ModalAddToBasket.defaultProps = {
  isOpen: () => { }
}

export default ModalAddToBasket