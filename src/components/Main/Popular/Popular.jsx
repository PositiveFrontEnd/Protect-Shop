import React, { useEffect, useState } from "react";
import './Popular.scss'
import { useDispatch, useSelector } from "react-redux";
import { actionGetOneProduct, actionGetThreeProducts } from '../../../store/productsSlice'
import PopularCard from "./MostPopularCard/PopularCard";
import Button from "../../Button/Button";
import { actionGetCatalogId } from '../../../store/catalog'
import { actionFavoriteForAll } from "../../../store/favoriteSlice";
import { selectorToken } from "../../../store/selectors";
import { useNavigate } from "react-router";
import { selectorGetAllOrders, selectorProductsForOrderGuest } from "../../../store/selectors";
import { actionGetOllUserOrders } from "../../../store/orderSlice";
import ModalPromoCode from "../../Modal/ModalPromoCode";
import ModalAddedCart from "../../Modal/ModalAddedCart";
import { useContext } from "react";
import { ContextFunctions } from "../../../context/context";
const Popular = () => {
    const dispatch = useDispatch()
    const [popularProducts, setPopularProducts] = useState([]);
    const { isModalAll, modalChangeAll } = useContext(ContextFunctions);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await dispatch(actionGetCatalogId("popular"));
                setPopularProducts(result);
            } catch (error) {
                console.error("Помилка під час виконання запиту:", error);
            }
        };

        fetchData();
    }, [dispatch]);
    const navigate = useNavigate()
    const handleGetProduct = (item) => {
        dispatch(actionGetOneProduct(item._id));
        dispatch(actionGetThreeProducts(item.name));
        navigate(
            `/catalogue/${item.categories}/${item.type}/${item._id}`
        );
    };



    const token = useSelector(selectorToken)
    const handleFavorite = (productId, event) => {
        event.stopPropagation()
        dispatch(actionFavoriteForAll({ productId, token }))
    }

    const handlerNewCustomer = () => navigate("/account/registration")

    const prod = popularProducts.products || [];
    const popularProduct = prod.map((item, index) => (
        <PopularCard
            key={index}
            src={item.imageUrls[0]}
            name={item.brand}
            price={"$" + item.currentPrice}
            categories={item.categories}
            type={item.type}
            id={item._id}
            click={() => handleGetProduct(item)}
            handleFavorite={(event) => handleFavorite(item._id, event)}
        />
    ))

    const allOrders = useSelector(selectorGetAllOrders)
    useEffect(() => {
        if (token) {
            dispatch(actionGetOllUserOrders(token))
        }
    }, [dispatch, token])

    const [isModal, setIsModal] = useState(false)
    const changeIsModal = () => {
        setIsModal(!isModal)
    }


    return (
        <>
            <section className="popular__conteiner">
                <div className="container">
                    <h4 className="popular__title">The Most Popular shopping for her</h4>
                    <div className="popular__wrapper">
                        {popularProduct}
                    </div>
                </div>
            </section>
            <div className="special-offer__wrapper">
                <div className="container buttons">
                    <Button click={token ? changeIsModal : handlerNewCustomer} className='special-offer__button' black>New here $20 off your first purchase</Button>
                    <Button click={token ? modalChangeAll : handlerNewCustomer} className='special-offer__button' black>Get a 10% discount for signing up</Button>
                </div>
                {isModal && (
                    <ModalPromoCode secondaryClick={() => navigate("/account/history")} firstClick={() => navigate("/catalogue")} onclick={changeIsModal} isOpen={changeIsModal} discription={allOrders.length === 0 ? "YOUR PROMO CODE: SALE567" : "oops... you already have an order"} />
                )}
                {isModalAll && (
                    <ModalPromoCode
                        discription="YOUR PROMO CODE: NEW1023"
                        onclick={modalChangeAll}
                    />)}
            </div>
        </>
    )
}

export default Popular