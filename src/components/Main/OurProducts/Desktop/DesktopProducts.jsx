import React from "react";
import "./DesktopProducts.scss";
import forMen from "/Images/forMen.jpg";
import forKids from "/Images/forKids.jpg";
import forWomen from "/Images/forWomen.jpg";
import { Link } from "react-router-dom";


const DesktopProducts = () => {
  return (
    <section>
      <div className="products__wrapper">
        <div className="container products">
          <div className="products__images">
            <div className="products__images">
              <img src={forWomen} alt="" />

              <Link className="button-black products__image__caption" to='/catalogue?categories=woman'>for woman</Link>
            </div>
            <div className="products__images">
              <img src={forKids} alt="" />
              <Link className="button-black products__image__caption" to='/catalogue?categories=children'>for woman</Link>

            </div>
            <div className="products__images">
              <img src={forMen} alt="" />
              <Link className="button-black products__image__caption" to='/catalogue?categories=men'>for woman</Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopProducts;
