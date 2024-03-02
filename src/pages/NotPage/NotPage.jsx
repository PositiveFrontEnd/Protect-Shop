import React from "react";
import "./NotPage.scss";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";

const NotPage = () => {
  const navigate = useNavigate();
  return (
    <div className="NotPage">
      <div className="circles">
        <div className="circles__main">
          <h1 className="circles__h1">404</h1>
          <h4 className="circles__h4">Page not found</h4>
          <p className="circles__text">
            Oops!&nbsp;
            <span className="circles__text__span">
              The page you are looking for does not exist.&nbsp;
              <span> It might have been moved or deleted.</span>
            </span>
          </p>
          <div className="circles__button">
            <Button
              black
              className="circles__button__home"
              click={() => {
                navigate("/");
              }}
            >
              Back to home
            </Button>

            <Button
              white
              className="circles__button__catalogue"
              click={() => {
                navigate("/catalogue");
              }}
            >
              Catalogue
            </Button>
          </div>
        </div>
        <div className="circles__right"></div>
      </div>
      <div className="circles__left"></div>
    </div>
  );
};

export default NotPage;