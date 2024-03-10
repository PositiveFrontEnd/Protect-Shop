import React from "react";
import { Link, useLocation } from "react-router-dom";
import { selectorToken } from "../../store/selectors";
import { useSelector } from "react-redux";

const Breadcrumbs = () => {

    const location = useLocation();
    const token = useSelector(selectorToken);

    const isForgotPasswordPage =
        location.pathname === "/account/authorization/forgot_password";

    if (
        !token &&
        (location.pathname === "/account" || location.pathname === "/")
    ) {
        return null;
    }

    if (
        location.pathname === "/search-" ||
        location.pathname === "/" ||
        location.pathname === "/cart/placing_an_order/contact_information" ||
        location.pathname === "/cart/placing_an_order/choice_of_delivery"
    ) {
        return null;
    }

    const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "");
    const isCatalogue = location.pathname.includes('catalogue');


    return (
        <div className="breadcrumbs container">
            {crumbs.map((crumb, index) => (
                <div key={crumb}>
                    {isForgotPasswordPage && index === crumbs.length - 1 ? null : (
                        <Link
                            className={index !== crumbs.length - 1 ? "crumb" : "crumb-active"}
                            to={index >= 3 ? '#' : (
                                (isCatalogue && index === 1) ? `/catalogue?categories=${crumb}` : (
                                    (isCatalogue && index === 2) ? `/catalogue?type=${crumb}&categories=${crumbs[1]}` : (
                                        `/${crumbs.slice(0, index + 1).join("/")}`
                                    )))}
                        >
                            {index !== 0 && <span>&gt;</span>}
                            {crumb}
                        </Link>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Breadcrumbs;
