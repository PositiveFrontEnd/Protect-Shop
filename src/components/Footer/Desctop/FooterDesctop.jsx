import React from "react";
import { Link } from 'react-router-dom'
import FooterItemDesctop from "./FooterItemDesctop";
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
import './FooterDesctop.scss'



const FooterDesctop = () => {
    return (
        <footer className='footer'>
            <div className='footer__menu footer__menu-desctop'>
                <div className='footer__menu__flex container'>

                    <div className='footer__logo'>
                        <Logo />
                    </div>
                    <div>
                        <FooterItemDesctop className='footer__item' title='Information'>
                            <li><Link to="/shops" className="link">Contacts</Link></li>
                        </FooterItemDesctop>
                    </div>
                    <div>
                        <FooterItemDesctop className='footer__item' title='About us'>
                            <li><Link to="/about-us" className="link">About brand</Link></li>
                            <li><Link to="/blog" className="link">Blog</Link></li>
                            <li><Link to="/shops" className="link">Shops</Link></li>
                        </FooterItemDesctop>
                    </div>
                    <div>
                        <FooterItemDesctop className='footer__direction__rows' title='Follow us'>
                            <li><a href="https://www.instagram.com/modivo_ua/" target="_blank" rel="noopener noreferrer"> <Insta /> </a></li>
                            <li><a href="https://www.youtube.com/channel/UCYGPXwVkOgTUbpmV9uSYH8Q" target="_blank" rel="noopener    noreferrer"><YouTube /></a></li>
                            <li><a href="https://www.tiktok.com/@modivo?lang=en" target="_blank" rel="noopener noreferrer"><TikTok /></a></li>
                            <li><a href="https://www.facebook.com/modivoua" target="_blank" rel="noopener noreferrer"><Facebook /></a></li>
                            <li><a href="https://x.com/modivo_sa" target="_blank" rel="noopener noreferrer"><Twitter /></a></li>
                        </FooterItemDesctop>
                        <FooterItemDesctop className='footer__direction__rows' title='Payment method'>
                            <li><Visa /></li>
                            <li><Mastercard /></li>
                            <li><Applepay /></li>
                            <li><Googlepay /></li>
                        </FooterItemDesctop>
                    </div>
                </div>
                <p className='footer__rights'>All rights reserved  © Protect, 2023</p>
            </div>
        </footer>
    )
}
export default FooterDesctop