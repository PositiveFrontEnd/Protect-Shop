import React from "react";
import { Formik, Form } from "formik";
import validationForgotPassword from "./ValidationForgotPassword";
import Input from "../Inputs/Input";
import Button from "../../Button/Button";
import "../../../pages/AuthorizationPage/AuthorizationPage.scss";
import "../../../pages/ForgotPasswordPage/ForgotPass.scss";

const ForgotPasswordForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={validationForgotPassword}
    >
      {({ errors, touched }) => (
        <div className="form__box-registr">
          <Form>
            <Input
              className="mb-3"
              label="Email"
              name="email"
              placeholder="Email"
              error={errors.email}
              touched={touched.email}
            />

            <Button
              children="Continue"
              black
              type="submit"
              className="button__submit button__forgot__pass__page button__registr__page"
            />
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ForgotPasswordForm;
