import React, { useEffect, useState } from "react";
import "./CardsButtons.scss"
import Button from "../../../../../components/Button/Button";
import { useSelector } from "react-redux";
import { selectorFilters, selectorFiltersProducts, selectorLoadFilter, selectorProducts } from "../../../../../store/selectors";
import { useSearchParams } from "react-router-dom";


const CardsButtons = () => {
    const filterLoad = useSelector(selectorLoadFilter)
    const filterProducts = useSelector(selectorFilters);
    const products = useSelector(selectorProducts);
    const filterTwelveProducts = useSelector(selectorFiltersProducts)
    const [searchParams, setSearchParams] = useSearchParams();
    const searchParamsEntries = [...searchParams.entries()];
    const [page, setPage] = useState(parseInt(searchParams.get("startPage"), 10) || 1);


    useEffect(() => {

        if (searchParams.get("startPage") === null) {
            setPage(1)
        } else {
            setPage(page)
        }

    }, [searchParams.get("startPage")])

    const scrollToTop = () => {
        window.scrollTo({
            top: 200,
            behavior: "smooth"
        });
    };

    const handlePagination = (direction) => {
        const newPage = direction === 'next' ? page + 1 : page - 1;

        if (newPage > 0 && newPage <= calculateProductsLength()) {
            setPage(newPage);

            const currentParams = new URLSearchParams(searchParams.toString());
            currentParams.delete("startPage");
            currentParams.append("startPage", newPage);

            filterTwelveProducts.length === 0
                ? setSearchParams(`startPage=${newPage}`)
                : setSearchParams(currentParams.toString());
        }
    };

    const calculateProductsLength = () => {
        return filterLoad === false ? filterProducts.length === 0
            ? Math.ceil(products.length / 12)
            : Math.ceil(filterProducts.length / 12) : 0
    };

    const renderNumberButton = (number) => (
        <Button
            key={number}
            click={() => { changePage(number), scrollToTop() }}
            className={` ${number === page ? "button__active" : 'button'}`}>
            {number}
        </Button>
    );

    const arrLength = []
    for (let index = 1; index <= calculateProductsLength(); index++) {
        arrLength.push(index)
    }

    const changePage = (number) => {
        if (number > 0 && number <= arrLength.length) {
            setPage(number)
            if (filterTwelveProducts.length === 0 && number !== 1) {
                setSearchParams(`startPage=${number}`)
            } else if (filterTwelveProducts.length !== 0 && number !== 1) {
                const currentParams = new URLSearchParams(searchParams.toString());
                currentParams.delete("startPage");
                currentParams.append("startPage", number);
                setSearchParams(currentParams.toString());
            } else {
                if (number === 1 && filterTwelveProducts.length === 0) {
                    setSearchParams(``)
                } else {
                    const filterSearchParamsEntries = searchParamsEntries.filter(element => !element.includes("startPage"));
                    setSearchParams(filterSearchParamsEntries)
                }

            }
        }

    }

    const renderDotsButton = (number) => (
        <Button click={() => { changePage(number), scrollToTop() }} className="button button__more">...</Button>
    );

    return (
        <div className="cards">
            <div className="cards__button">
                <Button className="button button__previous" click={() => { handlePagination('previous'), scrollToTop() }}>Previous</Button>
                {arrLength.slice(0, 3).map(renderNumberButton)}
                {page > 5 && renderDotsButton(page - 3)}
                {page >= 5 && renderNumberButton(page - 1)}
                {page >= 4 && renderNumberButton(page)}
                {page >= 3 && page < arrLength.length - 1 && renderNumberButton(page + 1)}
                {arrLength.length > 4 && page < arrLength.length - 1 && renderDotsButton(page + 3)}
                {arrLength.length > 3 && page < arrLength.length && renderNumberButton(arrLength.length)}
                <Button className="button button__next" click={() => { handlePagination('next'), scrollToTop() }}>Next</Button>
            </div>
        </div>
    );
};

export default CardsButtons;

