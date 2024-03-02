import React from "react";
import Modal from "./ModalComponents/Modal";
import ModalWrapper from "./ModalComponents/ModalWrapper";
import ModalHeader from "./ModalComponents/ModalHeader";
import ModalClose from "./ModalComponents/ModalClose";
import ModalBody from "./ModalComponents/ModalBody";
import ModalFooter from "./ModalComponents/ModalFooter";
import SvgThankRegistration from "./ModalSvg/svgThankRegistration.svg?react";
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
import { selectorRegistrationModal } from "../../store/selectors";
import { actionModalAfterRegistration } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";


const ModalThankRegistration = ({ onclick }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const registrationModal = useSelector(selectorRegistrationModal)



    const handleOutside = (event) => {
        if (!event.target.closest('.modal')) {
            dispatch(actionModalAfterRegistration(registrationModal))
            navigate('/account')
        }
    }
    const firstClick = () => {
        dispatch(actionModalAfterRegistration(registrationModal))
        navigate('/catalogue')
    }
    const secondaryClick = () => {
        dispatch(actionModalAfterRegistration(registrationModal))
        navigate('/account')
    }
    return (
        <>
            <ModalWrapper isOpen={handleOutside}>
                <Modal>
                    <ModalHeader>
                        <div className="header__title">
                            <SvgThankRegistration />
                            <p className="title__text">Thank you for registration!</p>
                        </div>
                        <ModalClose onclick={onclick} />
                    </ModalHeader>
                    <ModalBody>
                        <p className="modal__body-title title__logOut">We glad to know that you with us</p>
                        <p className="modal__body-text">Congratulations! Your personal cabinet was successfully created. Now you can take advantage of additional features:
                            View order history, print an account, edit your contactnformation and delivery address, and more.
                            <br />
                            <br />
                            If you have any questions, please contact us.</p>
                        <ModalFooter
                            className="modal__footer"
                            secondaryText="View my account"
                            firstText="Сontinue shopping"
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

ModalThankRegistration.defaultProps = {
    onclick: () => { },
    isOpen: () => { }
}

ModalThankRegistration.propTypes = {
    onclick: PropTypes.func,
    isOpen: PropTypes.func,
}
export default ModalThankRegistration