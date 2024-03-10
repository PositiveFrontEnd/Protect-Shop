import React from "react";
import "../Registration/RegistrationF.scss";
import { Formik, Form } from "formik";
import validationContactInfo from "./ValidationContactInfoF";
import Input from "../Inputs/Input";
import Button from "../../Button/Button";
import Check from "../../Button/ButtonSvg/check.svg?react";
import "./ContactInfoStyles.scss";
import BasketPage from "../../../pages/BasketPage/BasketPage";
import { useDispatch, useSelector } from "react-redux";
import {
  actionUpDateForm,
  actionUpDateFormGuest,
} from "../../../store/orderSlice.js";
import {
  selectorOrderFormData,
  selectorOrderFormDataGuest,
  selectorRegistrationData,
  selectorToken,
} from "../../../store/selectors.js";
import { useNavigate } from "react-router-dom";

function ContactInfoF() {
  const dispatch = useDispatch()
  const user = useSelector(selectorRegistrationData)
  const token = useSelector(selectorToken)
  const form = useSelector(selectorOrderFormData)
  const formGuest = useSelector(selectorOrderFormDataGuest)
  const navigate = useNavigate()
  return (
    <Formik
      initialValues={{
        firstName: "" || token === "" ? formGuest.firstName : form.firstName,
        email: "" || token === "" ? formGuest.email : form.email,
        lastName: "" || token === "" ? formGuest.lastName : form.lastName,
        telephone: "" || token === "" ? formGuest.mobile : form.mobile,
      }}
      onSubmit={(values) => {
        const updatedFormDataUser = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          mobile: values.telephone,
          customerId: user._id,
        };
        const updatedFormDataGuest = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          mobile: values.telephone,
          letterSubject: 'Thank you for order!'
        };
        token === ""
          ? dispatch(actionUpDateFormGuest(updatedFormDataGuest))
          : dispatch(actionUpDateForm(updatedFormDataUser));
        navigate("/cart/placing_an_order/choice_of_delivery");
      }}
      validationSchema={validationContactInfo}
    >
      {({ errors, touched }) => (
        <div className="form__box-registr form__contact__info">
          <Form className="form__contact__info__container">
            <div className="form__box__choice">
              <div className="form__littl-box__choice">
                <Input
                  className="mb-3"
                  label="First Name"
                  name="firstName"
                  placeholder="First Name"
                  error={errors.firstName}
                  touched={touched.firstName}
                />
                <Input
                  className="mb-3"
                  label="Last Name"
                  name="lastName"
                  placeholder="Last Name"
                  error={errors.lastName}
                  touched={touched.lastName}
                />
                <Input
                  className="mb-3"
                  label="Email"
                  name="email"
                  placeholder="Email"
                  error={errors.email}
                  touched={touched.email}
                />
                <Input
                  className="mb-3"
                  label="Phone"
                  name="telephone"
                  placeholder="Phone"
                  error={errors.telephone}
                  touched={touched.telephone}
                />
              </div>
              <BasketPage />
            </div>
            <Button
              black
              type="submit"
              className="button__Check"
              svgLeft={<Check />}
              children="TO ORDER"
            />
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default ContactInfoF;
