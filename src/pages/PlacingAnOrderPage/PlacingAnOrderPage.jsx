import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./PlacingAnOrder.scss";

const PlacingAnOrderPage = () => {
  const location = useLocation();

  const isNavLinkActive = (to) => {
    return location.pathname.includes(to);
  }
  return (
    <>
      <section className="container placing__order__box">
        <h3>PLACING AN ORDER</h3>
        <div className="placing__order__link__box">
          <NavLink to="contact_information" className={`${isNavLinkActive("/contact_information") ? "active" : ""}`}>
            1. CONTACT INFORMATION OF THE BUYER
          </NavLink>
          <NavLink to="choice_of_delivery" className={`${isNavLinkActive("/choice_of_delivery") ? "active" : ""}`}>
            2. CHOICE OF DELIVERY AND PAYMENT METHODS
          </NavLink>
        </div>
        <Outlet />
      </section>
    </>
  );
};

export default PlacingAnOrderPage;
