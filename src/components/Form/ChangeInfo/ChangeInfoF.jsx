import React, { useEffect, useState } from 'react'
import '../Registration/RegistrationF.scss'
import { Formik, Form } from "formik";
import validationChangeInfo from './ValidationChangeInfo';
import Input from '../Inputs/Input';
import Button from '../../Button/Button';
import "./ChangeInfoF.scss";
import { useDispatch, useSelector } from 'react-redux';
import { selectorCorrectData, selectorRegistrationData, selectorToken } from './../../../store/selectors';
import { actionCorrectData, actionCustomersInfo, actionUpdateCustomer } from '../../../store/userSlice';
import { useLocation } from 'react-router-dom';

function ChangeInfoF() {
const dispatch = useDispatch()
  // const user = useSelector(selectorRegistrationData)
  const token = useSelector(selectorToken)
  const location = useLocation();
  const currentPath = location.pathname;
  useEffect(() => {
    if (currentPath === '/account/information') {
      dispatch(actionCorrectData(''));
    }

  }, [])
  const correctData = useSelector(selectorCorrectData)
  const [user, setUser] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dispatch(actionCustomersInfo(token))
        setUser(data)
      }
      catch {
        console.log('error')
      }
    }
  fetchData()
}, [dispatch, token])



if (!user) {
    return <p>Loading user data...</p>;
  }

// console.log(user)
  return (
        <Formik
          initialValues={{
            firstName: user.firstName,
            email: user.email || "",
            birthDate: user.birthDate || "",
            lastName: user.lastName || "",
            telephone: user.telephone || "",

      }}
      onSubmit={(values) => {

        dispatch(actionUpdateCustomer({ token, customerInfo: values }))
        // console.log(values);
      }}

      validationSchema={validationChangeInfo}
    >
      {({ errors, touched }) => (
        <div className="form__box form__change__info">
          <Form className='form__change__info__container'>
            <div className='form__change__info__box'>
              <div className='form__change__info__box-first'>
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
                  label="Email"
                  name="email"
                  placeholder="Email"
                  error={errors.email}
                  touched={touched.email}
                />
                <Input
                  className="mb-3"
                  label="Birth Date"
                  name="birthDate"
                  placeholder="Birth Date"
                  error={errors.birthDate}
                  touched={touched.birthDate}
                />
              </div>
              <div className='form__change__info__box-second'>
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
                  label="Phone"
                  name="telephone"
                  placeholder="Phone"
                  error={errors.telephone}
                  touched={touched.telephone}
                />
               </div>
            </div>
            {correctData === 'ok' && <p>Information successfully changed</p>}
                <Button
                  children="Save"
                  black
                  type="submit"
                  className="button__submit button__change__info__form"
                />
              </Form>
            </div>
          )}
        </Formik>
      );
};


export default ChangeInfoF