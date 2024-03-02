import React, { useEffect } from "react";
import ContainerRegistrButt from "../../components/Form/LoginWith/ContainerRegistrButt";
import AuthorizationForm from "../../components/Form/Authorization/AuthorizationF";
import AuthotizationImg from "/Images/autorizationF.jpg";
import "./AuthorizationPage.scss";
import "../RegistrationPage/RegastrationPage.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectorIsAdmin, selectorToken } from "../../store/selectors";
// import {actionAuthorizationStatus} from '../../store/userSlice'

const AuthorizationPage = () => {
  const title = "Enter";
  const dispatch = useDispatch()
  const location = useLocation()
  // const token = useSelector(selectorToken)
  // const isAdmin = useSelector(selectorIsAdmin);
  // const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/account/authorization') {
      // dispatch(actionAuthorizationStatus('ok'))

    }
  }, [dispatch, location.pathname])

  // useEffect(() => {
  //   if (token) {
  //     if (isAdmin) {
  //       navigate("/account/letters"); 
  //     } else {
  //       navigate("/account/information"); 
  //     }
  //   } else {
  //     navigate("/account/authorization"); 
  //   }
  // }, [token, isAdmin]);

  return (
    <>
      <section className="container">
        <div className="form__container__box__authorization">
          <div className="form__container__box__main__authorization">
            <ContainerRegistrButt title={title} />
            <AuthorizationForm />
            <div className="have__acc">
              <p>Don’t have an account? </p>
              <Link to="/account/registration">Sign up</Link>
            </div>
          </div>
          <div className="img__form__authorization__container">
            <img
              className="img__form__authorization"
              src={AuthotizationImg}
              alt="authorization_img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthorizationPage;
