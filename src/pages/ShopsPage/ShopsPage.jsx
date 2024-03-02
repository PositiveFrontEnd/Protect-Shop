import React from "react";
import "./ShopsPage.scss";
import {NavLink, Outlet} from "react-router-dom";
import "../../components/Button/Button.scss";
import "../../../src/components/Helpers/Base/Base.scss";

const ShopsPage = () => {

    return (
        <>
            <div>
                <h2 className="shops__title">LIST STORE ADDRESS</h2>
            </div>
            <nav className="shops__nav">
                <NavLink
                    className="button-white button__submitFilter-white"
                    to="kharkiv"
                >
                    kharkiv
                </NavLink>
                <NavLink className="button-white button__submitFilter-white" to="kyiv">
                    kyiv
                </NavLink>
                <NavLink className="button-white button__submitFilter-white" to="odesa">
                    odesa
                </NavLink>
                <NavLink className="button-white button__submitFilter-white" to="lviv">
                    lviv
                </NavLink>
                <NavLink
                    className="button-white button__submitFilter-white"
                    to="dnipro"
                >
                    dnipro
                </NavLink>
            </nav>
            <Outlet/>
        </>
    );
};

export default ShopsPage;
