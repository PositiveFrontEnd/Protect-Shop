import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectInputText, selectorSearchProducts, selectorThreeProducts, selectorToken} from "src/store/selectors";
import {actionInputText} from "src/store/homeSlice";
import {actionGetOneProduct, actionGetThreeProducts, actionSearchProducts} from "src/store/productsSlice";
// import {useNavigate} from "react-router";
import {actionFavoriteForAll} from "src/store/favoriteSlice";
import Button from "src/components/Button/Button";
import PrimaryCard from "src/components/Main/Cards/PrimaryCard/PrimaryCard/PrimaryCard";

const AdminSearch = () => {
    const inputText = useSelector(selectInputText);
    const token = useSelector(selectorToken);
    const dispatch = useDispatch();
    const handleInputChange = (event) => {
        dispatch(actionInputText(event.target.value));
    }
    const handleSearch = () => {
        dispatch(actionSearchProducts({query: `${inputText}`}))
    }
    const products = useSelector(selectorSearchProducts);
    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            return handleSearch()
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    };
    // const navigate = useNavigate();
    const threeProducts = useSelector(selectorThreeProducts);
    const handleFavorite = (productId, event) => {
        event.stopPropagation();
        dispatch(actionFavoriteForAll({productId, token}));
    };

    const handleProduct = (item) => {
        dispatch(actionGetOneProduct(item._id));
        dispatch(actionGetThreeProducts(item.name));
        // navigate(
        //     `/catalogue/${item.categories}/${item.type}/${item._id}/${item.color}`
        // );
    };
    return (
        <div className='container'>
            <div className='search__input-group'>
                <form onSubmit={handleSubmit}>
                    <input value={inputText} type='text' name='search'
                           onChange={handleInputChange}
                           className='search__input'
                           onKeyDown={handleEnterPress}/>
                </form>
                <Button black onClick={handleSearch} className='search__btn'>SEARCH</Button>
            </div>
            <div className='search__result'>
                {products.map((item) => (
                    <PrimaryCard key={item._id} card={item} arr={threeProducts}
                                 handleProduct={handleProduct}
                                 handleFavorite={handleFavorite}
                    />
                ))}
            </div>
        </div>
    );
};

export default AdminSearch;