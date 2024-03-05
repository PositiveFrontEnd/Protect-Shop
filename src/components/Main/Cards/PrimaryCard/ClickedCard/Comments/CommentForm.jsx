import React, { useEffect, useRef, useState } from "react";
import { Formik, Form } from "formik";
import validationComment from "./ValidationCommentForm.jsx";
import PropTypes from "prop-types";
import Input from "../../../../../Form/Inputs/Input";
import Button from "../../../../../Button/Button.jsx";
import Modal from "../../../../../Modal/ModalComponents/Modal.jsx";
import ModalWrapper from "../../../../../Modal/ModalComponents/ModalWrapper.jsx";
import ModalHeader from "../../../../../Modal/ModalComponents/ModalHeader.jsx";
import ModalClose from "../../../../../Modal/ModalComponents/ModalClose.jsx";
import ModalBody from "../../../../../Modal/ModalComponents/ModalBody.jsx";
import Rating from "./StarRating.jsx";
import { useDispatch, useSelector } from "react-redux";
import { actionChangeProduct } from "../../../../../../store/productsSlice.js";
import {
  selectorCard,
  selectorToken,
} from "../../../../../../store/selectors.js";
import { actionCreateComment } from "../../../../../../store/commentsSlice.js";
const ModalComments = ({ setShowModal, id }) => {
  const modalRef = useRef(null);
  const dispatch = useDispatch();
  const token = useSelector(selectorToken);
  const [rating, setRating] = useState(null);
  const product = useSelector(selectorCard);
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowModal]);

  const onSubmit = (values) => {
    setShowModal(false);
    const data = {
      token: token,
      newComment: {
        product: id,
        content: values.text,
        likes: rating,
      },
    };
    dispatch(actionCreateComment(data));
    const dataChange = {
      id: id,
      product: { ...product, likes: [...product.likes, rating] },
      token: token,
    };

    dispatch(actionChangeProduct(dataChange));
  };

  return (
    <ModalWrapper>
      <Modal>
        <div ref={modalRef}>
          <ModalHeader>
            <div className="header__title">
              <p className="title__text">COMMENT</p>
            </div>
            <ModalClose onclick={() => setShowModal(false)} />
          </ModalHeader>
          <ModalBody>
            <p>Please fill in all fields</p>
            <Formik
              initialValues={{
                text: "",
              }}
              onSubmit={onSubmit}
              validationSchema={validationComment}
            >
              {({ errors, touched }) => (
                <div className="form__box form__modal__box">
                  <Form>
                    <Rating onRatingChange={handleRatingChange} />
                    <Input
                      label=""
                      className="mb-3"
                      name="text"
                      as="textarea"
                      placeholder="LEAVE YOUR COMMENT"
                      error={errors.text}
                      touched={touched.text}
                    />
                    <Button
                      black
                      type="submit"
                      className="button__submit button__submit__modal-call"
                    >
                      Send comment
                    </Button>
                  </Form>
                </div>
              )}
            </Formik>
          </ModalBody>
        </div>
      </Modal>
    </ModalWrapper>
  );
};

ModalComments.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};

export default ModalComments;
