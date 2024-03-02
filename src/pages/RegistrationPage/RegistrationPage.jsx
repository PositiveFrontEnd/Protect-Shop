import React from "react";
import RegistrationForm from "../../components/Form/Registration/RegistrationForm";
import ContainerRegistrButt from "../../components/Form/LoginWith/ContainerRegistrButt";
import "./RegastrationPage.scss";
import RegistrationF from "/Images/regestrationF.jpg";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  const title = "Registration";

  return (
    <>
      <section className="container">
        <div className="form__container__box">
          <div className="form__container__box__main">
            <ContainerRegistrButt title={title} />
            <RegistrationForm />
            <div className="have__acc">
              <p>Already have an account? </p>
              <Link to="/account/authorization">Sing in</Link>
            </div>
          </div>
          <div className="img__form__registr__container">
            <img
              className="img__form__registr"
              src={RegistrationF}
              alt="Registration"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default RegistrationPage;
