import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectorProducts } from "../../../../../store/selectors";
import PropTypes from 'prop-types'
import Button from "../../../../../components/Button/Button";
import ArrowUp from "../Svg/arrowUp.svg?react";
import ArrowDown from "../Svg/arrowDown.svg?react";
import Input from "../Input/Input";
import "./FilterItem.scss"
import { useFormikContext } from "formik";
import { useSearchParams } from "react-router-dom";

const FilterItem = (
    { param,
        handleChange,
        name }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { values } = useFormikContext();
    const [isArrow, setIsArrow] = useState(false)
    const handleChangeArrow = () => {
        setIsArrow(!isArrow);
        setSeeMore(false)
    };
    const [isSeeMore, setSeeMore] = useState(false)
    const handleChangeSeeMore = () => {
        setSeeMore(!isSeeMore)
    }

    const products = useSelector(selectorProducts);
    const uniqueCategories = products && Array.isArray(products)
        ? [...new Set(products.map(element => element[param]))]
        : [];
    const input = uniqueCategories.map((element) => (
        <Input
            key={element}
            name={name}
            text={element}
            checked={values[name]?.includes(element)}
            handleChange={handleChange}
        />

    ));

    return (
        <div className="filter__desktop__item">
            <div className="filter__desktop__item__title">
                <p>{name}</p>
                <Button onClick={handleChangeArrow}>
                    {isArrow ? <ArrowUp /> : <ArrowDown />}
                </Button>
            </div>
            {!isArrow && <div>
                {input.map((inputElement, index) => (
                    index < 5 ? inputElement : null
                ))}
            </div>}
            {uniqueCategories.length > 5 ? (
                <>
                    {(!isArrow && !isSeeMore) && <Button className="button__desktop__seeMore" onClick={handleChangeSeeMore}>See more  {isSeeMore ? <ArrowDown /> : <ArrowUp />} </Button>}
                    {isSeeMore ? <div>
                        {input.slice(5).map((inputElement, index) => (

                            <React.Fragment key={index}>{inputElement}</React.Fragment>
                        ))}
                    </div> : null}

                </>
            ) : null}
        </div>
    );
};





FilterItem.propTypes = {
    param: PropTypes.string,
    handleChange: PropTypes.func,
    name: PropTypes.string,
};

export default FilterItem;
