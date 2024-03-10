import React, { useEffect, useRef, useState } from "react";
import { Formik, Form } from "formik";
import validationComment from "./ValidationShopCommentForm.jsx";
import Modal from "../../components/Modal/ModalComponents/Modal.jsx";
import ModalWrapper from "../../components/Modal/ModalComponents/ModalWrapper.jsx";
import ModalHeader from "../../components/Modal/ModalComponents/ModalHeader.jsx";
import ModalClose from "../../components/Modal/ModalComponents/ModalClose.jsx";
import ModalBody from "../../components/Modal/ModalComponents/ModalBody.jsx";
import Rating from "../../components/Main/Cards/PrimaryCard/ClickedCard/Comments/StarRating.jsx";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/Form/Inputs/Input.jsx";
import Button from "../../components/Button/Button.jsx";
import { selectorToken } from "../../store/selectors.js";
import { actionCreateShopComment } from "../../store/shopCommentsSlice.js";

const ModalShopComments = ({ setShowModal }) => {
  const modalRef = useRef(null);
  const dispatch = useDispatch();
  const token = useSelector(selectorToken);
  const [rating, setRating] = useState(null);
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
        advantages: values.text,
        likes: rating,
        disadvantages: values.disadvantages,
      },
    };
    dispatch(actionCreateShopComment(data));
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
                disadvantages: "",
              }}
              onSubmit={onSubmit}
              validationSchema={validationComment}
            >
              {({ errors, touched, values }) => (
                <div className="form__box form__modal__box">
                  <Form>
                    <Rating onRatingChange={handleRatingChange} />
                    <Input
                      label="Our Advantages"
                      className="mb-3"
                      name="text"
                      as="textarea"
                      placeholder="LEAVE YOUR COMMENT"
                      error={errors.text}
                      touched={touched.text}
                    />
                    <Input
                      label="Our disadvantages"
                      className="mb-3"
                      as="textarea"
                      name="disadvantages"
                      placeholder="LEAVE YOUR COMMENT"
                      error={errors.disadvantages}
                      touched={touched.disadvantages}
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

export default ModalShopComments;
