import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import validationAuthorization from "./ValidationAuthorization";
import Input from "../Inputs/Input";
import Button from "../../Button/Button";
import "../../../pages/AuthorizationPage/AuthorizationPage.scss";
import { actionCorrectLogin, actionErrorStatus, actionIsAdmin } from "../../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectorRegistrationData, selectorToken } from "../../../store/selectors";
import { useLocation, useNavigate } from "react-router-dom";
import { selectorAuthorizationStatus } from './../../../store/selectors';
import CloseEye from './svg/closeEye.svg?react'
import OpenEye from './svg/openEye.svg?react'
import { Link } from "react-router-dom";
import InputPass from "../Inputs/InputPass";


const AuthorizationForm = () => {
  const dispatch = useDispatch()
  const token = useSelector(selectorToken)
  const authorizationStatus = useSelector(selectorAuthorizationStatus)
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
        navigate("/account"); 
    } else {
      navigate("/account/authorization"); 
    }
  }, [token]);

  
  const location = useLocation()
  useEffect(() => {
    if (location.pathname === '/account/authorization') {
      setIsShowPassword(true)
      dispatch(actionErrorStatus(''))

    }
  }, [dispatch, location.pathname])
  const [isShowPassword, setIsShowPassword] = useState(false)
  
  // const userData = useSelector(selectorRegistrationData)
  // const isAdmin = userData.isAdmin
  // useEffect(() => {
  //   if (token) {
  //     dispatch(actionIsAdmin(isAdmin))
  //   } else dispatch(actionIsAdmin(false))
    
  // }, [token, dispatch, isAdmin])
  // console.log(isAdmin)

  return (

    <Formik
      initialValues={{
        loginOrEmail: "",
        password: "",
      }}
      onSubmit={async (values) => {
        await dispatch(actionCorrectLogin(values))
      }}
      validationSchema={validationAuthorization}
    >
      {({ errors, touched }) => (
        <div className="form__box-registr">
          <Form>
            <Input
              className="mb-3"
              label="Phone or email"
              name="loginOrEmail"
              placeholder="Phone or email"
              error={errors.loginOrEmail}
              touched={touched.loginOrEmail}
            />
            <div className="password__wrapper">
              <InputPass
                className='mb-3'
                label="Password"
                name="password"
                placeholder="Password"
                error={errors.password}
                touched={touched.password}
                type={isShowPassword ? 'password' : 'string'}
              />
  
            </div>
            {
              authorizationStatus === '400' &&
              <p className="wrong__password__massage">Wrong password</p>
            }
            {
              authorizationStatus === '404' &&
              <p className="wrong__password__massage">This user is not exist. Would you like to registrate?</p>
            }
            <div className="authoriz__link__box">
              <Link to="forgot_password">Forgot your password?</Link>
            </div>
            <Button
              children="SING IN"
              black
              type="submit"
              className="button__submit button__registr__page"
            />
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default AuthorizationForm;
