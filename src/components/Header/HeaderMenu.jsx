import React from 'react';
import { NavLink, Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectorToken } from "../../store/selectors";

const HeaderMenu = () => {
    const location = useLocation();
    const token = useSelector(selectorToken);

    if (!token && (location.pathname === '/account')) {
        return null
    } else if (location.pathname === '/search-') {
        return null
    }


    return (
        <nav className='header__menu'>
            <Link className='header__link' to='/catalogue?status=sell'
            >sale</Link>
            <Link className='header__link' to='/catalogue?status=new'
            >new</Link>
            <NavLink className='header__link-catalogue' to='/catalogue'>catalogue</NavLink>
            <NavLink className='header__link' to='/shops'>shops</NavLink>
            <NavLink className='header__link' to='/about-us'>about us</NavLink>
        </nav>
    );
};

export default HeaderMenu;