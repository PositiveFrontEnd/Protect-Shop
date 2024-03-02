import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import Input from "../Inputs/Input";
import SelectInput from "../Inputs/Select";
import validationModal from "./validationModalFormCallMeOut";
import Button from "../../Button/Button";
import "./ModalFormCall.scss";
import { useDispatch, useSelector } from "react-redux";
import { actionNewLetter } from "../../../store/messageSlice";
import PropTypes from "prop-types";
import { selectorAddLetter } from "../../../store/selectors";

const ModalFormCallMeOut = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        email: "",
        question: "",
        letter: "",
      }}
      onSubmit={(values) => {
        dispatch(actionNewLetter(values));
      }}
      validationSchema={validationModal}
    >
      {({ errors, touched }) => (
        <div className="form__box form__modal__box">
          <Form>
            <Input
              className="mb-3"
              label=""
              name="name"
              placeholder="YOUR NAME"
              error={errors.name}
              touched={touched.name}
            />
            <Input
              className="mb-3"
              label=""
              name="phone"
              placeholder="YOUR PHONE"
              error={errors.phone}
              touched={touched.phone}
            />
            <Input
              className="mb-3"
              label=""
              name="email"
              placeholder="YOUR EMAIL"
              error={errors.email}
              touched={touched.email}
            />
            <SelectInput
              label=""
              name="question"
              className="mb-3"
              options={[
                { value: "my question", label: "YOUR QUESTION" },
                { value: "Product Information", label: "Product Information" },
                { value: "Shipping and Payment", label: "Shipping and Payment" },
                { value: "Returns and Exchanges", label: "Returns and Exchanges" },
                { value: "Security and Privacy", label: "Security and Privacy" },
              ]}
            />
            <Input
              className="mb-3 input__text"
              label=""
              name="letter"
              placeholder="TEXT"
              error={errors.text}
              touched={touched.text}
            />
            <Button
              children="SUBMIT"
              black
              type="submit"
              className="button__submit button__submit__modal-call"
            />
          </Form>
        </div>
      )}
    </Formik>
  );
};

ModalFormCallMeOut.propTypes = {
  isOpen: PropTypes.func,
};

export default ModalFormCallMeOut;
