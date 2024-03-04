import React from 'react';
import {Link, NavLink, useLocation} from "react-router-dom";
import {useSelector} from 'react-redux';
import {selectorToken} from "../../store/selectors";

const HeaderMenu = () => {
    const location = useLocation();
    const token = useSelector(selectorToken);
    // const [menu, setMenu] = useState('');
    const isSale = location.search.includes('status=sell');
    const isNew = location.search.includes('status=new');
    if (!token && (location.pathname === '/account' || location.pathname === '/search-')) {
        return null
    }

    return (
        <>
            {/*<nav className='header__menu'>*/}
            {/*    <Link onClick={() => setMenu('sale')}*/}
            {/*          className={menu === 'sale' ? 'header__link active' : 'header__link'}*/}
            {/*          to='/catalogue?status=sell'*/}
            {/*    >sale</Link>*/}
            {/*    <Link onClick={() => setMenu('new')}*/}
            {/*          className={menu === 'new' ? 'header__link active' : 'header__link'}*/}
            {/*          to='/catalogue?status=new'*/}
            {/*    >new</Link>*/}
            {/*    <Link onClick={() => setMenu('catalogue')}*/}
            {/*          className={menu === 'catalogue' ? 'header__link-catalogue active' : 'header__link-catalogue'}*/}
            {/*          to='/catalogue'>catalogue</Link>*/}
            {/*    <Link onClick={() => setMenu('shops')}*/}
            {/*          className={menu === 'shops' ? 'header__link active' : 'header__link'}*/}
            {/*          to='/shops'>shops</Link>*/}
            {/*    <Link onClick={() => setMenu('about us')}*/}
            {/*          className={menu === 'about us' ? 'header__link active' : 'header__link'}*/}
            {/*          to='/about-us'>about us</Link>*/}
            {/*</nav>*/}
            <nav className='header__menu'>
                <Link className={isSale ? 'header__link active' : 'header__link'}
                      to='/catalogue?status=sell'
                >sale</Link>
                <Link className={isNew ? 'header__link active' : 'header__link'}
                      to='/catalogue?status=new'
                >new</Link>
                <NavLink className='header__link'
                         to='/catalogue'>catalogue</NavLink>
                <NavLink className='header__link'
                         to='/shops'>shops</NavLink>
                <NavLink className='header__link'
                         to='/about-us'>about us</NavLink>
            </nav>
        </>
    );
};

export default HeaderMenu;