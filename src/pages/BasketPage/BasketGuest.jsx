import React, { useEffect, useState } from 'react';
import "./BasketPage.scss";
import ShopingCard from '../../components/Main/Cards/ShopingCard/ShopingCard';
import { useDispatch, useSelector } from 'react-redux';
import { actionDeleteOneForGuest, actionMinusBasketForGuest, actionPlusBasketForGuest, actionPriseForGuest } from '../../store/basketSlice';
import { selectorGuestBasket, selectorToken } from '../../store/selectors';
import { actionGetOneProduct, actionGetThreeProducts } from './../../store/productsSlice';
import { useNavigate } from 'react-router-dom';
import { actionFavoriteForAll } from '../../store/favoriteSlice';

const BasketGuest = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const token = useSelector(selectorToken)
    const guestBasket = useSelector(selectorGuestBasket);

    const [basket, setBasket] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const cart = [];
                for (const key of Object.keys(guestBasket)) {
                    const item = guestBasket[key];
                    if (item.payload) {
                        const data = await dispatch(actionGetOneProduct(item.payload));
                        cart.push({
                            id: key,
                            img: data.imageUrls[0],
                            title: data.type,
                            price: data.currentPrice,
                            cartQuantity: item.counter,
                            type: data.type,
                            categories: data.categories,
                            data: data,
                            color: data.color
                        });
                    }
                }
                setBasket(cart);

            } catch (error) {
                console.log('Basket is empty');
            }
        };

        fetchProducts();
    }, [dispatch, guestBasket]);

    const clickPlus = (id) => {
        dispatch(actionPlusBasketForGuest(id))
    };


    const clickMin = (id) => {
        dispatch(actionMinusBasketForGuest(id))
    };
    const deletCard = (id) => dispatch(actionDeleteOneForGuest(id))
    const totalPrice = basket.reduce((acc, currentItem) => acc + currentItem.cartQuantity * currentItem.price, 0)
    useEffect(() => {
        dispatch(actionPriseForGuest(totalPrice))
    }, [dispatch, totalPrice]);

    const handleNavigate = (item) => {
        dispatch(actionGetOneProduct(item.id));
        dispatch(actionGetThreeProducts(item.name));
        navigate(
            `/catalogue/${item.categories}/${item.type}/${item._id}`
        );
    };
    const handleFavorite = (productId, event) => {
        event.stopPropagation()
        dispatch(actionFavoriteForAll({ productId, token }))
    }

    return (
        <div>
            <>
                <div>
                    {basket.map(item => (
                        <ShopingCard
                            handleNavigate={() => handleNavigate(item.data)}
                            id={item.id}
                            handleFavorite={(event) => handleFavorite(item.id, event)}
                            key={item.id}
                            img={item.img}
                            title={item.title}
                            price={item.price}
                            cartQuantity={item.cartQuantity}
                            clickPlus={() => clickPlus(item.id)}
                            clickMin={() => clickMin(item.id)}
                            deletCard={() => deletCard(item.id)}
                        />
                    ))}
                </div>

            </>

        </div>
    );
}

export default BasketGuest;