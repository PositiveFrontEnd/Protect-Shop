import React, { useEffect } from "react";
import ContainerRegistrButt from "../../components/Form/LoginWith/ContainerRegistrButt";
import AuthorizationForm from "../../components/Form/Authorization/AuthorizationF";
import AuthotizationImg from "/Images/autorizationF.jpg";
import "./AuthorizationPage.scss";
import "../RegistrationPage/RegastrationPage.scss";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const AuthorizationPage = () => {
  const title = "Enter";
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/account/authorization') {
    }
  }, [dispatch, location.pathname])

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
