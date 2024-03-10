import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectorToken } from "../../store/selectors";

const HeaderMenu = () => {
  const location = useLocation();
  const token = useSelector(selectorToken);
  const isSale = location.search.includes("status=sell");
  const isNew = location.search.includes("status=new");
  if (
    !token &&
    (location.pathname === "/account" || location.pathname === "/search-")
  ) {
    return null;
  }

  return (
    <>
      <nav className="header__menu">
        <Link
          className={isSale ? "header__link active" : "header__link"}
          to="/catalogue?status=sell"
        >
          sale
        </Link>
        <Link
          className={isNew ? "header__link active" : "header__link"}
          to="/catalogue?status=new"
        >
          new
        </Link>
        <NavLink className="header__link" to="/catalogue">
          catalogue
        </NavLink>
        <NavLink className="header__link" to="/shops/kharkiv">
          shops
        </NavLink>
        <NavLink className="header__link" to="/about-us">
          about us
        </NavLink>
      </nav>
    </>
  );
};

export default HeaderMenu;
