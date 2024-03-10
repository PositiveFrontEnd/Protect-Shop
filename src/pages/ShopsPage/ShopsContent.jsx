import React from 'react';
import Location from './ShopsSvg/location.svg?react'
import PhoneB from './ShopsSvg/phoneB.svg?react'
import Time from './ShopsSvg/time.svg?react'
import PropTypes from "prop-types";

const ShopsContent = ({ city, address, hours }) => {
    return (
        <div className='shops__content'>
            <h3 className='shops__city'>{city}</h3>
            <div className='shops__contacts'>
                <div className='shops__contacts__item'>
                    <Location /><p className='shops__contacts__text'>Address: {address}</p>
                </div>
                <div className='shops__contacts__item'>
                    <PhoneB /><a className='shops__contacts__text' href="tel:+380505000096">Phone: +380(50) 500
                        00 96</a>
                </div>
                <div className='shops__contacts__item'>
                    <Time /><p className='shops__contacts__text'>Schedule: Mon-Sun: {hours}</p>
                </div>
            </div>
        </div>
    );
};

ShopsContent.propTypes = {
    city: PropTypes.string,
    address: PropTypes.string,
    hours: PropTypes.string
}

export default ShopsContent;