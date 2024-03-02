import React from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./ProfilePageStyle.scss";
import { actionIsAdmin, actionToken } from '../../store/userSlice';
import { useDispatch, useSelector } from "react-redux";
import { useContext } from 'react';
import { ContextFunctions } from '../../context/context';
import ModalLogOut from './../../components/Modal/ModalLogOut';
import { actionFavorite } from "../../store/favoriteSlice";
import { selectorIsAdmin } from "../../store/selectors";
import AdminProfile from "./AdminProfile/AdminProfile";


const ProfilePage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAdmin = useSelector(selectorIsAdmin)
  // console.log(isAdmin)

  const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "");
  const lastCrumb = crumbs[crumbs.length - 1];
    const handleLogout = () => {
      dispatch(actionToken(''))
      dispatch(actionIsAdmin(false))
      dispatch(actionFavorite([]))
    navigate('/catalogue');
  }

  const isNavLinkActive = (to) => {
    return location.pathname.includes(to);
  }


  const {modalChangeAll, isModalAll} = useContext(ContextFunctions)

  return (
    <>
      <section className="container profile__container">
        <h2>{location.pathname.split("/").filter((crumb) => crumb !== "").pop()}</h2>
        <div className="my__profile__box">
          <nav className="my__profile__links">
          <NavLink
              className={`profile__link ${isNavLinkActive("/information") ? "active" : ""}`}
              to="information"
            >
              Change contact information
            </NavLink>
            <NavLink
              className={`profile__link ${isNavLinkActive("/password") ? "active" : ""}`}
              to="password"
            >
              Password
            </NavLink>
            <NavLink
              className={`profile__link ${isNavLinkActive("/history") ? "active" : ""}`}
              to="history"
            >
              Order history
            </NavLink>
            <a href="#" onClick={modalChangeAll}>Log out</a>
            {isModalAll && (
              <ModalLogOut
                isOpen={modalChangeAll}
                onclick={modalChangeAll}
                firstClick={modalChangeAll}
                secondaryClick={() => {
                  handleLogout()
                  modalChangeAll()
                }}
              />)}
          </nav>
          <Outlet />
        </div>
        </section>
    </>
  );
};

export default ProfilePage;
