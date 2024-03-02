import React from "react";
import "./CatalogueParameters.scss"
import Button from "../../../components/Button/Button"
import Close from "./Svg/close.svg?react"
import Clear from "../../../components/Button/ButtonSvg/clean.svg?react"
import { useSearchParams } from "react-router-dom";

const EXCLUDED_PARAMS = ['minPrice', 'maxPrice', 'startPage'];

const CatalogueParameters = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const searchParamsEntries = [...searchParams.entries()];

    const handleRemoveParameter = (category, value) => {
        const categoryValues = searchParams.getAll(category)[0].split(',');
        const filteredCategoryValues = categoryValues.filter(categoryValue => categoryValue !== value);

        if (filteredCategoryValues.length === 0) {
            searchParams.delete(category);
        } else {
            searchParams.set(category, filteredCategoryValues);
        }
        setSearchParams(searchParams);

    }

    const handleRemoveAllParameters = () => {
        setSearchParams("");

    }
    const filterSearchParamsEntries = searchParamsEntries.filter(element => {
        return !EXCLUDED_PARAMS.some(excludedParam => {
            return element.includes(excludedParam);
        });
    });

    if (filterSearchParamsEntries.length === 0) {
        return null;
    }

    return (
        <div className="parameters">
            {filterSearchParamsEntries.map(([category, values]) => {
                const categoryValues = values.split(',');

                return categoryValues.map((value) => (
                    <Button
                        key={value}
                        click={() => { handleRemoveParameter(category, value) }}
                        svgRight={<Close />}
                        className="parameters__button"
                        white>
                        {value}
                    </Button>)
                )
            })}
            <Button black svgRight={<Clear />} click={() => handleRemoveAllParameters()} className="button__cleanFilters-black">Clean filters</Button>
        </div>

    )
}

export default CatalogueParameters