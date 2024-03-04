import React, {useEffect, useState} from "react";
import {Link, useLocation} from 'react-router-dom'
import FooterItem from "./FooterItemMobile";
import Insta from "../Svg/Socialnet/insta.svg?react"
import YouTube from "../Svg/Socialnet/youtube.svg?react"
import TikTok from '../Svg/Socialnet/tiktok.svg?react'
import Facebook from '../Svg/Socialnet/facebook.svg?react'
import Twitter from '../Svg/Socialnet/twitter.svg?react'
import Visa from "../Svg/Payment/visa.svg?react"
import Mastercard from '../Svg/Payment/masterCard.svg?react'
import Applepay from '../Svg/Payment/applepay.svg?react'
import Googlepay from '../Svg/Payment/googlePay.svg?react'
import Logo from '../Svg/logo.svg?react'
import ScrollUp from '../Svg/scrollUp.svg?react'
import Home from '../Svg/Menu/home.svg?react'
import Account from '../Svg/Menu/account.svg?react'
import Mail from '../Svg/Menu/mail.svg?react'
import Favorites from '../Svg/Menu/favorites.svg?react'
import Cart from '../Svg/Menu/cart.svg?react'
import './FooterMobile.scss'
import { useDispatch, useSelector } from "react-redux";
import {
    selectorBaskets,
    selectorFavoriteForCustomer,
    selectorGuestBasket, selectorGuestFavorite, selectorIsAdmin,
    selectorToken
} from "../../../store/selectors";
import { actionGetBasket } from "src/store/basketSlice";

const savedBasketProduct = JSON.parse(localStorage.getItem('basketProduct')) || []

const FooterMobile = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const renderDiv = location.pathname !== '/account'
    const token = useSelector(selectorToken);
    const isAdmin = useSelector(selectorIsAdmin);
    const basketProduct = useSelector(selectorBaskets);
    const basketGuest = useSelector(selectorGuestBasket);
    const basketGuestCount = Object.keys(basketGuest).length;
    const favoriteForCustomer = useSelector(selectorFavoriteForCustomer)
    const guestFavorite = useSelector(selectorGuestFavorite)

    useEffect(() => {
        if (token) { dispatch(actionGetBasket(token)) }
    }, [token]);

    useEffect(() => {
        localStorage.setItem('basketProduct', JSON.stringify(savedBasketProduct));
    }, [basketProduct]);

    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <div
                className={`scroll__to__top ${isVisible ? 'visible' : ''}`}
                onClick={scrollToTop}>
                <ScrollUp/>
            </div>
            <div className='footer__menu-mobile'>
                {renderDiv && (
                    <div className='footer__menu'>
                        <div className="container">
                            <FooterItem title='Information'>
                                <li className="footer__item"><Link to="/shops" className="link">Contacts</Link></li>
                                <li className="footer__item"><Link className="link">Payment & Delivery</Link></li>
                                <li className="footer__item"><Link className="link">Returns</Link></li>
                                <li className="footer__item"><Link className="link">Guarantee</Link></li>
                                <li className="footer__item"><Link className="link">Discount</Link></li>
                                <li className="footer__item"><Link className="link">Special proposal</Link></li>
                            </FooterItem>
                            <FooterItem title='About us'>
                                <li className="footer__item"><Link to="/about-us" className="link">About brand</Link>
                                </li>
                                <li className="footer__item"><Link className="link">Our values</Link></li>
                                <li className="footer__item"><Link className="link">Partnerships</Link></li>
                                <li className="footer__item"><Link to="/blog" className="link">Blog</Link></li>
                                <li className="footer__item"><Link to="/shops" className="link">Shops</Link></li>
                            </FooterItem>
                            <FooterItem className='footer__direction__rows' title='Follow us'>
                                <li className="footer__item"><a href="https://www.instagram.com/modivo_ua/" target="_blank"
                                    rel="noopener noreferrer"> <Insta /> </a></li>
                                <li className="footer__item"><a
                                    href="https://www.youtube.com/channel/UCYGPXwVkOgTUbpmV9uSYH8Q" target="_blank"
                                    rel="noopener    noreferrer"><YouTube /></a></li>
                                <li className="footer__item"><a href="https://www.tiktok.com/@modivo?lang=en"
                                    target="_blank" rel="noopener noreferrer"><TikTok /></a></li>
                                <li className="footer__item"><a href="https://www.facebook.com/modivoua" target="_blank"
                                    rel="noopener noreferrer"><Facebook /></a></li>
                                <li className="footer__item"><a href="https://x.com/modivo_sa" target="_blank"
                                    rel="noopener noreferrer"><Twitter /></a></li>
                            </FooterItem>
                            <FooterItem className='footer__direction__rows' title='Payment method'>
                                <li className="footer__item"><Visa /></li>
                                <li className="footer__tem"><Mastercard /></li>
                                <li className="footer__item"><Applepay /></li>
                                <li className="footer__item"><Googlepay /></li>
                            </FooterItem>
                            <div className='footer__logo'>
                                <Logo />
                                <p className='footer__rights'>All rights reserved © Protect, 2023</p>
                            </div>
                        </div>
                    </div>
                )}
                <div className='footer__bottom__menu'>
                    <div className='footer__bottom__menu__item'>
                        <Link to='/'>
                            <Home />
                            <p className="bottom__menu__name">Home</p>
                        </Link>
                    </div>
                    <div className='footer__bottom__menu__item'>
                        {isAdmin ? (
                            <Link to="/account">
                                <Mail/>
                                <p className="bottom__menu__name">Account</p>
                            </Link>
                        ) : (
                            <Link to="/account">
                                <Account />
                                <p className="bottom__menu__name">Account</p>
                            </Link>
                        )}
                    </div>
                    <div className="footer__bottom__menu__item">
                        <Link to="/favorites">
                            <><Favorites />{(token && favoriteForCustomer && favoriteForCustomer.length !== 0) ?
                                <span className='product__amount-footer'>{favoriteForCustomer.length}</span> : (
                                    (!token && guestFavorite && guestFavorite.length !== 0) ?
                                        <span className='product__amount-footer'>{guestFavorite.length}</span> :
                                        <span></span>
                                )
                            }</>
                            <p className="bottom__menu__name">Favorites</p>
                        </Link>
                    </div>
                    <div className='footer__bottom__menu__item'>
                        <Link to={isAdmin ? "#" : "/cart"}>
                            <><Cart/>{(token && basketProduct.products && basketProduct.products.length !== 0) ? (
                                <span className='product__amount-footer'>{basketProduct.products.length}</span>) : (
                                (!token && basketGuest && basketGuestCount !== 0) ?
                                    <span className='product__amount-footer'>{basketGuestCount}</span> :
                                    <span></span>)}</>
                            <p className="bottom__menu__name">Cart</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FooterMobile