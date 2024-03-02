import React from "react";
import "./CatalogueFiltersDesctop.scss"
import FilterDesktop from "./Filter/FilterDesktop"
import Sort from "../Sort/Sort"
import PropTypes from "prop-types";

const CatalogueFiltersDesctop = ({ price }) => {
    return (
        <div className="filter__desktop__box">
            <Sort />
            < FilterDesktop price={price} />
        </div>

    )
}

CatalogueFiltersDesctop.propTypes = {
    price: PropTypes.array,

};

export default CatalogueFiltersDesctop