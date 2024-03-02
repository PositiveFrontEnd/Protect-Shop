import React, { useEffect, useState } from "react";
import "./CatalogueContent.scss"
import CatalogueFiltersMobile from "../CatalogueFiltersMobile/CatalogueFiltersMobile";
import CatalogueFiltersDesctop from "../CatalogueFiltersDesctop/CatalogueFiltersDesctop";
import Cards from "./Cards/Cards";
import CardsButtons from "./Cards/CardsButtons/CardsButtons";
import { useSelector } from "react-redux";
import { selectorProducts } from "../../../store/selectors";
import CatalogueParameters from "../CatalogueParameters/CatalogueParameters";
const CatalogueContent = () => {
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 767px)').matches);
    const handleMediaQuery = (event) => { setIsMobile(event.matches) };
    useEffect(() => {
        const mediaQueryList = window.matchMedia('(max-width: 768px)');
        mediaQueryList.addListener(handleMediaQuery);
        return () => {
            mediaQueryList.removeListener(handleMediaQuery);
        };
    }, []);
    const products = useSelector(selectorProducts);
    const currentPrice = products && Array.isArray(products)
        ? [...new Set(products.map(element => element.currentPrice))]
        : [];
    const price = currentPrice.sort((a, b) => a - b)
    return (
        <div className="container">
            <div className="content">
                {isMobile ? <CatalogueFiltersMobile price={price} /> : <CatalogueFiltersDesctop price={price} />}
                <div className="content__box">
                    <CatalogueParameters />
                    <Cards />
                </div>
            </div>
            <CardsButtons />
        </div>
    )
}
export default CatalogueContent