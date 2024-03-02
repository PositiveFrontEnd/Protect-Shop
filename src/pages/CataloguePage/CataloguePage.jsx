import React, { useEffect } from "react";
import "./CataloguePage.scss"
import CatalogueHeader from "./CatalogueHeader/CatalogueHeader";
import CatalogueContent from "./CatalogueContent/CatalogueContent";
import CatalogueRecently from "./CatalogueRecently/CatalogueRecently"
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionFilterProducts, actionFilters, actionGetProducts, actionLoadingFilterProducts, actionLoadingTwelveProducts, actionTwelveFilterProducts } from "../../store/productsSlice";


const CataloguePage = () => {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams();
    const pageValue = searchParams.get("startPage");
    const newQueryString = searchParams.toString().replace(/&?startPage=\d+/, '');
    useEffect(() => { dispatch(actionGetProducts()) }, [])
    useEffect(() => {
        if (!newQueryString) {
            dispatch(actionTwelveFilterProducts([]))
            dispatch(actionFilters([]))
            dispatch(actionLoadingTwelveProducts(pageValue ? pageValue : 1))
        } else {
            dispatch(actionFilterProducts(newQueryString))
            dispatch(actionLoadingFilterProducts({ parameters: newQueryString, page: pageValue ? pageValue : 1 }));
        }

    }, [searchParams, pageValue])

    return (
        <>
            <CatalogueHeader />
            <CatalogueContent />
            <CatalogueRecently />
        </>
    )
}
export default CataloguePage