import { Formik } from "formik";
import React from "react";
import FilterForm from "./FilterForm";
import "rc-slider/assets/index.css";
import "./FilterDesktop.scss"
import { useDispatch } from "react-redux";
import { actionLoadingFilterProducts } from "../../../../store/productsSlice";
import PropTypes from "prop-types";
import { actionSortCatalogue } from "../../../../store/catalog";
import { useSearchParams } from "react-router-dom";

const CatalogueFilterParams = {
    CATEGORIES: 'categories',
    BRAND: 'brand',
    STATUS: 'status',
    MATERIAL: 'material',
    SIZE: 'size',
    TYPE: 'type',
    DELIVERY: 'delivery',
    COLOR: 'color',
}
const FilterDesktop = ({ price }) => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div className="filter__desktop">
            <Formik
                initialValues={{
                    categories: searchParams.getAll(CatalogueFilterParams.CATEGORIES)[0]?.split(',') ?? [],
                    brand: searchParams.getAll(CatalogueFilterParams.BRAND)[0]?.split(',') ?? [],
                    status: searchParams.getAll(CatalogueFilterParams.STATUS)[0]?.split(',') ?? [],
                    material: searchParams.getAll(CatalogueFilterParams.MATERIAL)[0]?.split(',') ?? [],
                    size: searchParams.getAll(CatalogueFilterParams.SIZE)[0]?.split(',') ?? [],
                    color: searchParams.getAll(CatalogueFilterParams.COLOR)[0]?.split(',') ?? [],
                    type: searchParams.getAll(CatalogueFilterParams.TYPE)[0]?.split(',') ?? [],
                    delivery: searchParams.getAll(CatalogueFilterParams.DELIVERY)[0]?.split(',') ?? [],
                    priceRange: [109, 4680],
                }}
                onSubmit={(values) => {
                    let parameters = ""
                    const params = new URLSearchParams();
                    for (const key in values) {

                        if ((key === "priceRange") && (values[key].length !== 0)) {
                            const [minPrice, maxPrice] = `${values[key]}`.split(",")
                            params.append('minPrice', minPrice);
                            params.append('maxPrice', maxPrice);
                        }
                        if ((key !== "priceRange") && (key !== "currentPrice") && (values[key].length !== 0)) {
                            parameters += `${key}=${values[key]}&`;
                            params.append(key, values[key]);
                        }
                    }
                    dispatch(actionSortCatalogue("In random order"))
                    setSearchParams(params);
                }}>
                <FilterForm price={price} />
            </Formik>
        </div>
    )
}

FilterDesktop.propTypes = {
    price: PropTypes.array,

};

export default FilterDesktop