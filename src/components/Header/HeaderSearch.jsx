import React, { useEffect, useRef } from 'react';
import SearchB from './HeaderSvg/searchB.svg?react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionInputText } from "src/store/homeSlice";
import { actionSearchProducts } from "src/store/productsSlice";
import { selectInputText } from "src/store/selectors";

const HeaderSearch = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const inputText = useSelector(selectInputText);
    const handleInputChange = (event) => {
        dispatch(actionInputText(event.target.value));
    };

    const handleSearch = () => {
        dispatch(actionSearchProducts({ query: `${inputText}` }))
        navigate(`/search?request=${encodeURIComponent(inputText)}`)
    }

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus()
    }, []);

    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            return handleSearch()
        }
    }

    return (
        <div className='header__search'>

            <SearchB onClick={handleSearch} />
            <form>
                <input className='header__search__title'
                    ref={inputRef}
                    type='text'
                    name='search'
                    placeholder='Search'
                    value={inputText}
                    onKeyDown={handleEnterPress}
                    onChange={handleInputChange} />
            </form>
        </div>
    );
};

export default HeaderSearch;