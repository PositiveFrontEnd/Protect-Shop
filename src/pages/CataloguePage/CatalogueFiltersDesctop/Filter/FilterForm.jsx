import { Form, useFormikContext } from 'formik'
import React, { useEffect, useState } from 'react'
import FilterItem from './FilterItem/FilterItem'
import Button from '../../../../components/Button/Button'
import Slider from 'rc-slider'
import ArrowDown from "./Svg/arrowDown.svg?react"
import ArrowUp from "./Svg/arrowUp.svg?react";
import { useDispatch } from 'react-redux'
import { actionLoadFilter } from '../../../../store/catalog'
import { useSearchParams } from 'react-router-dom'

const FilterForm = ({ price }) => {
    const { values, handleChange, handleSubmit, resetForm, setFieldValue } = useFormikContext();
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch()
    const scrollToTop = () => {
        window.scrollTo({
            top: 200,
            behavior: "smooth"
        });
    };
    useEffect(() => {
        resetForm();

        [...searchParams.entries()].forEach(([field, value]) => {
            if (field === 'minPrice' || field === 'maxPrice') {
                return;
            }

            const values = value.split(',');
            setFieldValue(field, values);
            if (field === "currentPrice") {
                const values = value.split(',');
                setFieldValue("priceRange", [values[0], values[values.length - 1]]);
            }
        });

        if (searchParams.has('minPrice') && searchParams.has('maxPrice')) {
            setFieldValue('priceRange', [searchParams.get('minPrice'), searchParams.get('maxPrice')])
        }
    }, [searchParams.toString()])

    const handleSliderChange = (setFieldValue) => (value) => {
        setFieldValue("priceRange", value);
    };

    const [isArrowPrice, setArrowPrice] = useState(false)
    const handleIsArrowPrice = () => {
        setArrowPrice(!isArrowPrice)
    }
    const clearForm = () => {
        dispatch(actionLoadFilter(false))
        setSearchParams('')
    }

    return (
        <Form>
            <div className="filter__desktop__box">
                <div className="filter__desktop__title">
                    <h6 className="filter__desktop__title__item">filter:</h6>
                </div>
                <FilterItem param="categories" name="categories" handleChange={handleChange} />
                <FilterItem param="brand" name="brand" handleChange={handleChange} />
                <div className="filter__desktop__item"  >
                    <div className="filter__desktop__item__title" >
                        <span >price</span>
                        <Button className="button__seeMore" click={handleIsArrowPrice} > {isArrowPrice ? <ArrowUp /> : <ArrowDown />} </Button></div>
                    {!isArrowPrice && <div className="price-slider">
                        <Slider
                            name="priceRange"
                            min={price[0]}
                            max={price[price.length - 1]}
                            range
                            value={values.priceRange}
                            onChange={handleSliderChange(setFieldValue)}
                        />
                        <div className="price__desktop__slider"> <p> {values.priceRange[0]} $  </p> <p>{values.priceRange[1]} $</p></div>

                    </div>}
                </div>
                <FilterItem param="status" name="status" handleChange={handleChange} />
                <FilterItem param="material" name="material" handleChange={handleChange} />
                <FilterItem param="size" name="size" handleChange={handleChange} />
                <FilterItem param="color" name="color" handleChange={handleChange} />
                <FilterItem param="type" name="type" handleChange={handleChange} />
                <FilterItem param="delivery" name="delivery" handleChange={handleChange} />
            </div>
            <div className="filter__desktop__button__box">
                <Button white type="submit" click={() => { handleSubmit(); scrollToTop() }} className="button__desktop__filter">Submit</Button>
                <Button white className="button__desktop__filter" click={() => { resetForm(); clearForm(); scrollToTop() }}>Clear</Button>
            </div>
        </Form>
    )
}

export default FilterForm