import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { actionInputText } from "../../store/homeSlice";
import {
    actionGetOneProduct,
    actionGetThreeProducts,
    actionSearchProducts
} from "../../store/productsSlice";
import Button from "src/components/Button/Button";
import {
    selectorInputText,
    selectorSearchProducts,
    selectorThreeProducts,
    selectorToken
} from "../../store/selectors";
import { actionFavoriteForAll } from "../../store/favoriteSlice"
import PrimaryCard from "../../components/Main/Cards/PrimaryCard/PrimaryCard/PrimaryCard";
import SearchSort from "src/pages/SearchPage/SearchSort";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import ScrollUp from "src/components/Footer/Svg/scrollUp.svg?react";


const SearchResultPage = () => {

    const inputText = useSelector(selectorInputText);
    const token = useSelector(selectorToken);
    const dispatch = useDispatch();
    const handleInputChange = (event) => {
        dispatch(actionInputText(event.target.value));
    }

    const handleSearch = () => {
        dispatch(actionSearchProducts({ query: `${inputText}` }))
        navigate(`/search?request=${encodeURIComponent(inputText)}`)
        handleReset()
    }

    const [sort, setSort] = useState('');
    const handleSort = (event) => {
        setSort(event.target.value);
    };

    const products = useSelector(selectorSearchProducts);
    const sortedProducts = [...products];

    sortedProducts.sort((a, b) => {
        if (sort === 'lowToHigh') {
            if (a.currentPrice < b.currentPrice) {
                return -1
            }
            if (a.currentPrice > b.currentPrice) {
                return 1
            }
            return 0
        }
        if (sort === 'highToLow') {
            if (a.currentPrice > b.currentPrice) {
                return -1
            }
            if (a.currentPrice < b.currentPrice) {
                return 1
            }
            return 0
        }
        if (sort === '') {
            if (a.date > b.date) {
                return -1
            }
            if (a.date < b.date) {
                return 1
            }
            return 0
        }
    })

    const firstSortedProducts = sortedProducts.slice(0, 12);
    const secondSortedProducts = sortedProducts.slice(12, 24);
    const restSortedProducts = sortedProducts.slice(12);

    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            return handleSearch()
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleReset()
    };

    const [clickCount, setClickCount] = useState(0);

    const handleIncrement = () => {
        setClickCount(clickCount + 1);
    };

    const handleReset = () => {
        setClickCount(0);
    };

    const navigate = useNavigate();
    const threeProducts = useSelector(selectorThreeProducts);
    const handleFavorite = (productId, event) => {
        event.stopPropagation();
        dispatch(actionFavoriteForAll({ productId, token }));
    };

    const handleProduct = (item) => {
        dispatch(actionGetOneProduct(item._id));
        dispatch(actionGetThreeProducts(item.name));
        navigate(
            `/catalogue/${item.categories}/${item.type}/${item._id}`
        );
    };
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    const toggleVisibility = () => {
        if (window.pageYOffset > 700) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className='container'>
            <h2 className='search__title'>search<span>{inputText}</span></h2>
            <div className='search__block'>
                <div className='search__input-group'>
                    <form onSubmit={handleSubmit}>
                        <input value={inputText} type='text' name='search'
                            onChange={handleInputChange}
                            className='search__input'
                            onKeyDown={handleEnterPress} />
                    </form>
                    <Button black onClick={handleSearch} className='search__btn'>SEARCH</Button>
                </div>
                <div className='search__function-group'>
                    <SearchSort handleSort={handleSort} sort={sort} />
                </div>
            </div>
            {sortedProducts.length === 0 ?
                <h3 className='search__result__title'>We don’t have this goods
                    now<br /> Change your search request<br /> or look other similar goods in our <Link
                        to='/catalogue'><span>catalogue</span></Link></h3> :
                <h3 className='search__result__title'>We found this goods for you</h3>
            }
            <div className='search__result'>
                {firstSortedProducts.map((item) => (
                    <PrimaryCard key={item._id} card={item} arr={threeProducts}
                        handleProduct={handleProduct}
                        handleFavorite={handleFavorite}
                    />))}
                {clickCount === 1 && (
                    secondSortedProducts.map((item) => (
                        <PrimaryCard key={item._id} card={item} arr={threeProducts}
                            handleProduct={handleProduct}
                            handleFavorite={handleFavorite}
                        />)))}
                {clickCount === 2 && (
                    restSortedProducts.map((item) => (
                        <PrimaryCard key={item._id} card={item} arr={threeProducts}
                            handleProduct={handleProduct}
                            handleFavorite={handleFavorite}
                        />)))}
            </div>
            {sortedProducts.length > 12 && (
                <>
                    <div
                        className={`scroll__to__top ${isVisible ? 'visible' : ''}`}
                        onClick={scrollToTop}>
                        <ScrollUp />
                    </div>
                    <Button
                        className={clickCount === 2 || (clickCount === 1 && sortedProducts.length < 24) ? 'button-inactive' : 'button-white button__SeeMore-white'}
                        click={handleIncrement}>See more</Button>
                </>
            )}
        </div>
    );
};

export default SearchResultPage;