import React, { useState, useEffect } from "react";
import FooterMobile from "./Mobile/FooterMobile";
import FooterDesctop from './Desctop/FooterDesctop'
import './Footer.scss'
import { useLocation } from "react-router-dom";
import { selectorToken } from "../../store/selectors";
import { useSelector } from "react-redux";

const Footer = () => {
    const location = useLocation()
    const token = useSelector(selectorToken);
    const renderDiv = location.pathname !== '/account' || token

    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 767px)').matches);
    const handleMediaQuery = (event) => { setIsMobile(event.matches) };
    useEffect(() => {
        const mediaQueryList = window.matchMedia('(max-width: 768px)');
        mediaQueryList.addListener(handleMediaQuery);
        return () => {
            mediaQueryList.removeListener(handleMediaQuery);
        };
    }, []);

    return (
        <>
            <footer>
                {renderDiv && (
                    <div className="footer__text container">
                        <p className="text__item">Welcome to our online store bags and backpacks! We have a wide range of quality and stylish bags and backpacks for all your needs and tastes. We offer various models from leading manufacturers from all over the world. We have classic black bags for work, stylish and bright backpacks for travel, sports bags for fitness and more. We always work to ensure that our customers are satisfied with the purchases in our store. We offer fast delivery, convenient payment and quality guarantee for all our products.</p>
                        <p className="text__item">Thanks to our large number of filters on the site, you can quickly and easily find what you need. Our filters allow you to search for bags and rucksacks by size, material, brand, color and many other parameters.</p>
                        <p className="text__item">If you have any questions or need help in product selection, our managers are always ready to provide you with qualified assistance and advice. Do not take time to find the perfect bag or backpack. Make your choice now and enjoy shopping in our online store</p>
                    </div>
                )
                }
                {isMobile ? <FooterMobile /> : <FooterDesctop />}
            </footer>
        </>
    )
}
export default Footer