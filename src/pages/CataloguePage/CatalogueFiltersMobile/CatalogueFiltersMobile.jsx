import React, { useState } from "react";
import "./CatalogueFiltersMobile.scss"
import HeaderFilter from "../../../components/Header/Dropdown/DropdownTop"
import FilterForm from "./Filter/Filter"
import Button from "../../../components/Button/Button";
import Filter from "../../../components/Button/ButtonSvg/filter.svg?react"
import Sort from "../Sort/Sort"
import PropTypes from "prop-types";

const CatalogueFiltersMobile = ({ price }) => {
    const [isOpen, setOpen] = useState(false)
    const handleIsOpen = () => {
        setOpen(!isOpen)
    }
    const stopClick = (event) => {
        event.stopPropagation()
    };
    return (
        <>
            {isOpen && (<div className="filter__substrate" onClick={handleIsOpen}>
                <div className="filter__container" onClick={stopClick}>
                    <HeaderFilter click={handleIsOpen} />
                    <FilterForm price={price} handleIsOpen={handleIsOpen} />
                </div>
            </div>)}
            <div className="button__box">
                <Sort />
                <Button black svgLeft={<Filter />} click={handleIsOpen} className="button__filter">Filter</Button>
            </div>
        </>
    )
}
CatalogueFiltersMobile.propTypes = {
    price: PropTypes.array,

};
export default CatalogueFiltersMobile
