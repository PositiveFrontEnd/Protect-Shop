import React from "react";
import "./DesktopNewestProductsStyles.scss";
import Photo1 from "/Images/bag3.jpg";
import Photo2 from "/Images/bag2.jpg";
import Photo3 from "/Images/bag1.jpg";
import { Link } from "react-router-dom";

const DesktopNewest = () => {

  return (
    <div className="desktop__newest__wrapper">
      <div className="container">
        <h2 className="desktop__newest__title">The Newest products</h2>
        <div className="desktop__newest__cards">
          <Link
            className="desktop__newest__card"
            to="/catalogue?status=popular"

          >
            <img className="desktop__newest__img" src={Photo1} alt="" />
            <span className="desktop__newest__name">Popular 2024</span>
          </Link>
          <Link
            className="desktop__newest__card"
            to="/catalogue?type=wallet"
          >
            <img className="desktop__newest__img" src={Photo2} alt="" />
            <span className="desktop__newest__name">Wallets</span>
          </Link>
          <Link
            className="desktop__newest__card"
            to="/catalogue?type=purse"
          >
            <img className="desktop__newest__img" src={Photo3} alt="" />
            <span className="desktop__newest__name">Purses</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesktopNewest;
