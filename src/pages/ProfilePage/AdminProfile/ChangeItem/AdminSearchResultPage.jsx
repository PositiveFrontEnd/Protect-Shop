import React, { useEffect, useState } from "react";
import PrimaryCard from "../../../../components/Main/Cards/PrimaryCard/PrimaryCard/PrimaryCard";
import { useDispatch, useSelector } from "react-redux";
import { actionFavoriteForAll } from "../../../../store/favoriteSlice";
import { selectorSearchProducts, selectorThreeProducts, selectorToken } from "../../../../store/selectors";
import { actionGetOneProduct, actionGetThreeProducts, actionSearchProducts } from "../../../../store/productsSlice";
import { useNavigate } from "react-router-dom";
import CardsButtons from "../../../CataloguePage/CatalogueContent/Cards/CardsButtons/CardsButtons";
import AdminSearch from "./AdminSearch";
import Button from "../../../../components/Button/Button";
import ScrollUp from './scrollUp.svg?react'

const AdminSearchResultPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = useSelector(selectorToken)
    const products = useSelector(selectorSearchProducts);
    const threeProducts = useSelector(selectorThreeProducts);
    const [page, setPage] = useState(1)
    const url = window.location.pathname;
    const segments = url.split('/');
    const lastSegment = segments.pop();

    console.log(lastSegment); 

    const handleLoadMore = () => {
        setPage(page + 1)
        console.log(page)
    }
    const twelveProducts = products.slice(0, 12 * page);

     const handleFavorite = (productId, event) => {
        event.stopPropagation();
        dispatch(actionFavoriteForAll({productId, token}));
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




    const handleProduct = (item) => {
      dispatch(actionGetOneProduct(item._id));
      dispatch(actionGetThreeProducts(item.name));
      setTimeout(() => { navigate('/account/changeproductform/') }, 700)
    };
    return (
        <>
        <div className="search__cont__admin">
            <AdminSearch/>
            <div className='search__result__admin'>
                {twelveProducts.map((item) => (
                    <PrimaryCard key={item._id} card={item} arr={threeProducts}
                    handleProduct={handleProduct}
                    handleFavorite={handleFavorite}
                    />
                ))}
            </div>
                  {(twelveProducts.length / page)-12 >= 0 &&  <Button className='loadmore__button' black click={() => handleLoadMore()} >Load more</Button>}
            <div className={`scroll__to__top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
                <ScrollUp/>
            </div>
        </div>
                        
        </>
)
}
export default AdminSearchResultPage