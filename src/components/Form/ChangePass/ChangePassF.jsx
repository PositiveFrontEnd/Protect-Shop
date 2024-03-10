import "../Registration/RegistrationF.scss";
import "./ChangePassF.scss";
import React, { useEffect, useState } from 'react'
import { Formik, Form } from "formik";
import Input from "../Inputs/Input";
import Button from "../../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { actionChangePassword, actionCorrectData } from "../../../store/userSlice";
import { selectorCorrectData, selectorToken } from "../../../store/selectors";
import { useLocation } from "react-router-dom";
import validationChangePassword from './ValidationChangePass';


function ChangePassF() {
  const dispatch = useDispatch()
  const token = useSelector(selectorToken)
  const correctData = useSelector(selectorCorrectData)
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/account/password') {
      dispatch(actionCorrectData(''));
    }

  }, [dispatch, location.pathname])
  return (
    <Formik
      initialValues={{
        password: "",
        newPassword: "",
      }}
      onSubmit={(values) => {
        const data = { token: token, password: values }
        dispatch(actionChangePassword(data))
      }}
      validationSchema={validationChangePassword}
    >
      {({ errors, touched }) => (
        <div className="form__box form__change__info">
          <Form>
            <div className="change__pass__box">
              <Input
                className="mb-3"
                label="Password"
                name="password"
                placeholder="Password"
                error={errors.password}
                touched={touched.password}
              />
              <Input
                className="mb-3"
                label="Confirm Password"
                name="newPassword"
                placeholder="Confirm Password"
                error={errors.newPassword}
                touched={touched.newPassword}
              />
            </div>
            {correctData === 'ok' && <p>Password successfully changed</p>}
            <Button
              children="Save"
              black
              type="submit"
              className="button__submit button__change__pass__form"
            />
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default ChangePassF;
