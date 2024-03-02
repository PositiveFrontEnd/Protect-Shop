import React, { useState } from "react";
import ToOpen from '../Svg/open.svg?react'
import PropTypes from 'prop-types'
import cx from 'classnames'


const FooterItem = ({ title, children, className }) => {
    const [isOpenFooterMenu, setOpenFooterMenu] = useState(false)
    const openFooterMenu = () => {
        setOpenFooterMenu(!isOpenFooterMenu)


    }
    return (
        <>
            <div className="footer__title__wrapper">
                <h4 className="footer__title">{title}</h4>
                <button onClick={openFooterMenu} className={`toopen ${isOpenFooterMenu ? 'open-animated' : ''}`}>< ToOpen className={isOpenFooterMenu ? 'flip' : ''} /></button>

            </div>
            {isOpenFooterMenu && (
                <ul className={cx("footer__more-info", className)}>
                    {children}
                </ul>)
            }
        </>
    )
}

FooterItem.defaultProps = {
    isOpenFooterMenu: false
}

FooterItem.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any
}

export default FooterItem