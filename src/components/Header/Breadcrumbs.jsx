import React from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { selectorToken } from "../../store/selectors";
import { useDispatch, useSelector } from "react-redux";


const Breadcrumbs = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const token = useSelector(selectorToken);
    const [searchParams, setSearchParams] = useSearchParams();
    const isForgotPasswordPage =
        location.pathname === "/account/authorization/forgot_password";
    // приховати крихти в accountPage
    if (
        !token &&
        (location.pathname === "/account" || location.pathname === "/")
    ) {
        return null;
    }
    // приховати крихти в searchPage
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
                    {/* створення посилання використовуючи індекс (перебираючи крихти в залежності від позиції в масиві задається посилання) */}
                    {isForgotPasswordPage && index === crumbs.length - 1 ? null : (
                        <Link
                            className={index !== crumbs.length - 1 ? "crumb" : "crumb-active"}
                            to={index === 0 ? "/" : (
                                (index >= 4) ? "#"
                                    : ((isCatalogue && index < 4) ? '/catalogue' : `/${crumbs.slice(0, index + 1).join("/")}`)
                            )}
                            onClick={() => {
                                (isCatalogue && index === 2) ?
                                    setSearchParams(`categories=${crumb}`)
                                    : (
                                        (isCatalogue && index === 3) ?
                                            setSearchParams(`type=${crumb}`) : undefined
                                    )
                            }}
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
