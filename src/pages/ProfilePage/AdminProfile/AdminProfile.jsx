import React, { useContext } from "react";
import { NavLink, Outlet, useLocation, useNavigate} from "react-router-dom";
import ModalLogOut from './../../../components/Modal/ModalLogOut';
import { ContextFunctions } from '../../../context/context';
import { useDispatch } from "react-redux";
import { actionToken } from "../../../store/userSlice";
import { actionFavorite } from "../../../store/favoriteSlice";
import './AdminProfile.scss'


const AdminProfile = () => {
    const location = useLocation();
    const dispatch = useDispatch()
    const navigate = useNavigate()

  const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "");
  const lastCrumb = crumbs[crumbs.length - 1];

    const isNavLinkActive = (to) => {
    return location.pathname.includes(to);
  }
  
  const {modalChangeAll, isModalAll} = useContext(ContextFunctions)
     const handleLogout = () => {
      dispatch(actionToken(''))
      dispatch(actionFavorite([]))
      navigate('/catalogue');
  }
 
  return (
    <>
      <section className="container order__container">
        <h2>{location.pathname.split("/").filter((crumb) => crumb !== "").pop()}</h2>
        <div className="order__box">
          <nav className="order__links">
            <NavLink
              className={`order ${isNavLinkActive("/letters") ? "active" : ""}`}
              to="letters"
            >
              Customer's letters
            </NavLink>
            <NavLink
              className={`order ${isNavLinkActive("/orderstatus") ? "active" : ""}`}
              to="orderstatus"
            >
              Orders
            </NavLink>
            <NavLink
              className={`order ${isNavLinkActive("/newproduct") ? "active" : ""}`}
              to="newproduct"
            >
              Create new Product
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

export default AdminProfile;
