import React, { useEffect, useState } from 'react'
import '../Registration/RegistrationF.scss'
import { Formik, Form, Field } from "formik";
import validationChangeInfo from './ValidationChangeInfo';
import Input from '../Inputs/Input';
import Button from '../../Button/Button';
import "./ChangeInfoF.scss";
import { useDispatch, useSelector } from 'react-redux';
import { selectorCorrectData, selectorToken } from './../../../store/selectors';
import { actionCorrectData, actionCustomersInfo, actionUpdateCustomer } from '../../../store/userSlice';
import { useLocation } from 'react-router-dom';
import InputFile from '../Inputs/InputFile';
import UserAvatar from '../../UserAvatar/UserAvatar';

function ChangeInfoF() {
  const dispatch = useDispatch()
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



  const [profileImage, setProfileImage] = useState('')

  const [isLoading, setIsLoading] = useState(false)
  const [avatarUrl, setAvatarUrl] = useState('')

  if (!user) {
    return <p>Loading user data...</p>;
  }

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0])
  }
  const uploadImage = async () => {
    setIsLoading(true)

    try {
      let imageUrl;
      if (
        profileImage && (
          profileImage.type === "image/png" ||
          profileImage.type === "image/jpg" ||
          profileImage.type === "image/jpeg"
        )
      ) {
        const image = new FormData()
        image.append("file", profileImage)
        image.append("cloud_name", "dncolownd")
        image.append("upload_preset", "protect_avatars")

        const responce = await fetch(
          "https://api.cloudinary.com/v1_1/dncolownd/image/upload",
          {
            method: "POST",
            body: image,
            headers: {}
          }

        )
        const imgData = await responce.json()
        imageUrl = imgData.url.toString()

      }
      setAvatarUrl(imageUrl)

    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
    setIsLoading(false)

  }

  return (
    <>
      <Formik
        initialValues={{
          firstName: user.firstName,
          email: user.email || "",
          birthDate: user.birthDate || "",
          lastName: user.lastName || "",
          telephone: user.telephone || "",
          avatarUrl: "",

        }}
        onSubmit={(values) => {
          uploadImage()

          values.avatarUrl = avatarUrl ? avatarUrl : '';
          dispatch(actionUpdateCustomer({ token, customerInfo: values }))
          setAvatarUrl('')
        }}

        validationSchema={validationChangeInfo}
      >
        {({ errors, touched }) => (
          <div className="form__box form__change__info">
            <Form className='form__change__info__container'>
              <UserAvatar background={user.background} firstName={user.firstName} avatarUrl={user.avatarUrl} />

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
                  <InputFile
                    className="mb-3"
                    type='file'
                    label="Avatar"
                    name="avatarUrl"
                    placeholder="Avatar"
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
              {correctData === 'ok' && <p>Information successfully changed</p>}
              {isLoading ? ('Uploading...') : ('')}
              <Button
                black
                type="submit"
                className="button__submit button__change__info__form"
              >
                Save
              </Button>

            </Form>
          </div>
        )}
      </Formik>
    </>
  );
}


export default ChangeInfoF