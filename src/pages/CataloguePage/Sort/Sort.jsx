import React, { useEffect, useState } from 'react';
import './Sort.scss';
import ArrowDown from './SortSvg/arrowDown.svg?react';
import ArrowUp from './SortSvg/arrowUp.svg?react';
import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux';
import { selectorFilters, selectorSortCatalogue } from '../../../store/selectors';
import { actionSortCatalogue } from '../../../store/catalog';
import { useSearchParams } from 'react-router-dom';

const Sort = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const activeSort = useSelector(selectorSortCatalogue)
    const filterProducts = useSelector(selectorFilters)

    const [isOpenSort, setIsOpenSort] = useState(false);
    const actionSort = () => {
        setIsOpenSort(!isOpenSort)
    };

    useEffect(() => {
        if (!searchParams.get("sort")) {
            dispatch(actionSortCatalogue("In random order"))
        }

    }, [searchParams.get("sort")])

    const handleSort = (param) => {

        if (filterProducts.length === 0) {
            setSearchParams(`${searchParams.toString()}&sort=${param}`)
        } else {
            const currentParams = new URLSearchParams(searchParams.toString());
            currentParams.delete("sort");
            currentParams.append("sort", param);
            const decodedParams = decodeURIComponent(currentParams.toString());
            setSearchParams(decodedParams);
        }

    }
    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.delete("sort");

    return (
        <div className='catalogue__box'>
            <button className={isOpenSort ? 'catalogue__sort-open' : 'catalogue__sort'}
                onClick={actionSort}> {activeSort === "" ? "sort" : activeSort}
                {isOpenSort ? <ArrowUp /> : <ArrowDown />}
            </button>
            {isOpenSort && (
                <div className='catalogue__sort__drop'>

                    <p
                        onClick={() => {
                            setSearchParams(currentParams)
                            setIsOpenSort(!isOpenSort),
                                dispatch(actionSortCatalogue("In random order"))
                        }}
                        className={activeSort !== "In random order" ? 'catalogue__item' : "catalogue__item-active"}>
                        In random order</p>
                    <p
                        onClick={() => {
                            handleSort("-currentPrice"),
                                setIsOpenSort(!isOpenSort),
                                dispatch(actionSortCatalogue("Price high to low"))
                        }}
                        className={activeSort !== "Price high to low" ? 'catalogue__item' : "catalogue__item-active"}>
                        Price high to low</p>
                    <p onClick={() => {
                        handleSort("+currentPrice"),
                            setIsOpenSort(!isOpenSort),
                            dispatch(actionSortCatalogue("Price low to high"))
                    }}
                        className={activeSort !== "Price low to high" ? 'catalogue__item' : "catalogue__item-active"}>
                        Price low to high</p>
                </div>
            )}
        </div>
    );
};
Sort.propTypes = {
    handleSort: PropTypes.func,
    sort: PropTypes.string
}
export default Sort;