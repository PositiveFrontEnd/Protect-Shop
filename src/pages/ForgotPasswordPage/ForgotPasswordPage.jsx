import React from "react";
import ForgotPasswordForm from "../../components/Form/ForgotPassword/ForgotPasswordF";
import ForgotPassImg from "/Images/forgotPassF.jpg";
import "../AuthorizationPage/AuthorizationPage.scss";
import "../RegistrationPage/RegastrationPage.scss";
import "./ForgotPass.scss";

const ForgotPasswordPage = () => {
  return (
    <>
      <section className="container">
        <div className="form__container__box__forgot__pass form__container__box__authorization ">
          <div className="form__container__box__main__authorization">
            <h2 className="forgot__pass__title">Forgot your password?</h2>
            <p className="forgot__pass__text">
              Enter the E-Mail for your account. Click continue to receive your
              password via email.
            </p>
            <ForgotPasswordForm />
          </div>
          <div className="img__form__authorization__container img__form__forgot__pass__container">
            <img
              className="img__form__authorization img__form__forgot__pass"
              src={ForgotPassImg}
              alt="forgot_pass_img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPasswordPage;