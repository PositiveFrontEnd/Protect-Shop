import React, { useState } from 'react';
import ArrowDown from './SearchSvg/arrowDown.svg?react';
import ArrowUp from './SearchSvg/arrowUp.svg?react';
import PropTypes from "prop-types";

const Sort = ({ handleSort, sort }) => {
    const [isOpenSort, setIsOpenSort] = useState(false);
    const actionSort = () => {
        setIsOpenSort(!isOpenSort)
    };
    return (
        <div>
            <button className={isOpenSort ? 'sort-open' : 'sort'}
                onClick={actionSort}>sort
                {
                    isOpenSort ? <ArrowUp /> : <ArrowDown />
                }
            </button>
            {isOpenSort && (
                <div className='sort__dropdown'>
                    <label><input type='radio'
                        value='lowToHigh'
                        checked={sort === 'lowToHigh'}
                        onChange={handleSort} />
                        Price low to high</label>
                    <label><input type='radio'
                        value='highToLow'
                        checked={sort === 'highToLow'}
                        onChange={handleSort} />
                        Price high to low</label>
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