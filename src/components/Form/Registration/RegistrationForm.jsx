import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import "./RegistrationF.scss";
import Input from "../Inputs/Input";
import CheckboxInput from "../Inputs/Checkbox";
import SelectInput from "../Inputs/Select";
import validationSchema from "../Inputs/Validation";
import Button from "../../Button/Button";
import {
  selectorRegistrationData,
  selectorRegistrationStatus,
} from "../../../store/selectors";
import {
  actionModalAfterRegistration,
  actionRegistration,
  actionRegistrationStatus,
  actionUserRegistrationData,
} from "../../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { selectorRegistrationModal } from "../../../store/selectors";
import ModalThankRegistration from "./../../Modal/ModalThankRegistration";
import InputPass from "../Inputs/InputPass";

const RegistrationForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const formData = useSelector(selectorRegistrationData);
  const registrationModal = useSelector(selectorRegistrationModal);
  const handleCloseModal = () => {
    dispatch(actionModalAfterRegistration(registrationModal));
    navigate("/account");
  };
  const registrationStatus = useSelector(selectorRegistrationStatus);

  const [isShowPassword, setIsShowPassword] = useState(false);

  useEffect(() => {
    if (location.pathname === "/account/registration") {
      dispatch(actionRegistrationStatus("ok"));
      setIsShowPassword(true);
    }
  }, [dispatch, location.pathname]);
  return (
    <>
      {registrationModal && (
        <ModalThankRegistration onclick={handleCloseModal} />
      )}
      <Formik
        initialValues={{
          firstName: "",
          lastName: "", 
          email: "",
          telephone: "",
          password: "",
          gender: "",
          checkbox: false,

    
        }}
        onSubmit={(values) => {
          console.log(values);
          dispatch(
            actionUserRegistrationData({
              ...values,
              login: values.firstName,
              isAdmin: false,
              avatarUrl: "",
            })
          );
          dispatch(
            actionRegistration({
              ...values,
              login: values.firstName,
              isAdmin: false,
              avatarUrl: "",
            })
          );
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <div className="form__box-registr">
            <Form>
              <Input
                className="mb-3"
                label="First Name"
                name="firstName"
                placeholder="Name"
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
                label="Email Adress"
                name="email"
                placeholder="Email Adress"
                error={errors.email}
                touched={touched.email}
              />
              <Input
                className="mb-3"
                label="Phone"
                name="telephone"
                placeholder="+38 098 2322 232"
                error={errors.telephone}
                touched={touched.telephone}
              />
              <div className="password__wrapper">
                <InputPass
                  className="mb-3"
                  label="Password"
                  name="password"
                  placeholder="Password"
                  error={errors.password}
                  touched={touched.password}
                />
              </div>
              <SelectInput
                label="Gender"
                name="gender"
                className="mb-3"
                options={[
                  { value: "", label: "Gender" },
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                ]}
                error={errors.gender}
              />
              <CheckboxInput
                className="mb-3"
                label="I have read the rules of site and agree with them"
                type="checkbox"
                name="checkbox"
                error={errors.checkbox}
              />
              {registrationStatus === "error" && (
                <>
                  <p className="error__message registration__error__text">
                    User with such data already exists. Would you like to{" "}
                    <Link to="/account/authorization">Sing In?</Link>
                  </p>
                </>
              )}
              <Button
                children="LOG IN"
                black
                type="submit"
                className="button__submit button__registr__page"
              />
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default RegistrationForm;
