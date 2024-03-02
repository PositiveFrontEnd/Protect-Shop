import React from "react";
import Modal from "./ModalComponents/Modal";
import ModalWrapper from "./ModalComponents/ModalWrapper";
import ModalHeader from "./ModalComponents/ModalHeader";
import ModalClose from "./ModalComponents/ModalClose";
import ModalBody from "./ModalComponents/ModalBody";
import ModalFooter from "./ModalComponents/ModalFooter";
import SvgAddedCart from "./ModalSvg/svgAddedCart.svg?react"
import PropTypes from 'prop-types'
import "./Modal.scss"

const ModalAddedCart = ({ price, onclick, isOpen,secondaryClick,firstClick }) => {
  return (
    <ModalWrapper isOpen={isOpen}>
      <Modal>
        <ModalHeader>
          <div className="header__title">
            <SvgAddedCart />
            <p className="title__text">Goods added to cart successfully!</p>
          </div>
          <ModalClose onclick={onclick} />
        </ModalHeader>
        <ModalBody>
          <p className="modal__body-title title__logOut">There are tree goods in the cart</p>
          <p className="modal__body-totalPrice">Total : $ {price}</p>
          <ModalFooter
            className="modal__footer"
            secondaryText="Continue shopping"
            firstText="Go to cart"
            firstClassName=" button__changText"
            secondaryClassName="modal__button"
            firstClick={firstClick}
            secondaryClick={secondaryClick}
          />

        </ModalBody>
      </Modal>
    </ModalWrapper>
  )
}

ModalAddedCart.propTypes = {
  price: PropTypes.number,
  onclick: PropTypes.func,
  isOpen: PropTypes.func,
  firstClick: PropTypes.func,
  secondaryClick: PropTypes.func,
}

ModalAddedCart.defaultProps = {
  onclick: () => { },
  isOpen: () => { }
}

export default ModalAddedCart