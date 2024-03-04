import React from 'react';
import DropdownTop from "./DropdownTop";
import PropTypes from "prop-types";
import "./DropDown.scss"
import SearchB from "src/components/Header/HeaderSvg/searchB.svg?react";
import {NavLink, Link, useNavigate} from "react-router-dom";
import PhoneIncomingB from "src/components/Header/HeaderSvg/phoneIncomingB.svg?react";
import PhoneB from "src/components/Header/HeaderSvg/phoneB.svg?react";
import Time from "src/components/Header/HeaderSvg/time.svg?react";
import ModalForm from "src/components/Modal/ModalForm";
import {useDispatch, useSelector} from "react-redux";
import {actionInputText} from "src/store/homeSlice";
import {
    actionSearchProducts
} from "src/store/productsSlice";
import {selectInputText} from "src/store/selectors";

const Dropdown = ({actionDropdown, modalChange, isModal}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isSale = location.search.includes('status=sell');
    const isNew = location.search.includes('status=new');

    const inputText = useSelector(selectInputText);
    const handleInputChange = (event) => {
        dispatch(actionInputText(event.target.value));
    };

    const stopClick = (event) => {
        event.stopPropagation()
    };

    const handleSearch = () => {
        dispatch(actionSearchProducts({query: `${inputText}`}))
        navigate(`/search?request=${encodeURIComponent(inputText)}`)
    }

    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            return handleInputChange(event);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        actionDropdown();
        handleSearch();
    };

    return (
        <div className='dropdown' onClick={stopClick}>
            <DropdownTop click={actionDropdown}/>
            <div className='dropdown__search'>
                <SearchB onClick={() => {
                    actionDropdown()
                    handleSearch()
                }}/>
                <form onSubmit={handleSubmit}>
                    <input className='dropdown__search__title'
                           type='text'
                           name='search'
                           placeholder='SEARCH'
                           value={inputText}
                           onKeyDown={handleEnterPress}
                           onChange={handleInputChange}/>
                </form>
            </div>
            <nav className='dropdown__menu'>
                <Link onClick={actionDropdown}
                      className={isSale ? 'dropdown__list active' : 'dropdown__list'}
                      to='/catalogue?status=sell'>sale</Link>
                <Link onClick={actionDropdown}
                      className={isNew ? 'dropdown__list active' : 'dropdown__list'}
                      to='/catalogue?status=new'>new</Link>
                <NavLink onClick={actionDropdown}
                         className='dropdown__list'
                         to='/catalogue'>catalogue</NavLink>
                <NavLink onClick={actionDropdown}
                         className='dropdown__list'
                         to='/shops'>shops</NavLink>
                <NavLink onClick={actionDropdown}
                         className='dropdown__list'
                         to='/about-us'>about us</NavLink>
            </nav>
            <div className='dropdown__contacts'>
                <div className='dropdown__contacts__item' onClick={modalChange}>
                    <PhoneIncomingB/><p className='dropdown__contacts__text' onClick={actionDropdown}>Call me out</p>
                </div>
                <div className='dropdown__contacts__item'>
                    <PhoneB/><a className='dropdown__contacts__text' href="tel:+380505000096">+380(50) 500 00 96</a>
                </div>
                <div className='dropdown__contacts__item'>
                    <Time/><p className='dropdown__contacts__text'>Mon-Sun: 11:00 – 20:00</p>
                </div>
            </div>
            {
                isModal && (<ModalForm isOpen={modalChange} onclick={modalChange}/>)
            }
        </div>
    )
        ;
};

Dropdown.propTypes = {
    actionDropdown: PropTypes.func,
    modalChange: PropTypes.func,
    isModal: PropTypes.bool
}

export default Dropdown;