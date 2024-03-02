import React from "react";
import PropTypes from 'prop-types'
import cx from 'classnames'

const FooterItemDesctop = ({ title, children, className }) => {
    return (
        <>
            <div className="footer__title__wrapper">
                <h4 className="footer__title">{title}</h4>
            </div>
            <ul className={cx("footer__more-info", className)}>
                {children}
            </ul>

        </>
    )
}


FooterItemDesctop.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any
}

export default FooterItemDesctop