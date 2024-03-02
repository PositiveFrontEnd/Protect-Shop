import React, {useState, useEffect} from "react";
import "./DesktopClickedCardStyle.scss";
import Locker from "../Images/locker.svg?react";
import "../Mobile/MobileClickedCardStyle.scss";
import Button from "../../../../../Button/Button";
import { selectorGuestBasket } from "../../../../../../store/selectors";
import { useDispatch,useSelector } from "react-redux";
import { actionDeleteOneForGuest, actionAddToBasketForGuest, actionPlusBasketForGuest, actionMinusBasketForGuest } from "../../../../../../store/basketSlice";
import { actionGetOneProduct } from "../../../../../../store/productsSlice";



const CounterForGuest = ({_id, modalChangeAll}) => {
    const guestBasket = useSelector(selectorGuestBasket);
    const dispatch = useDispatch()

    const addBasket = () => {
        dispatch(actionAddToBasketForGuest(_id))
        modalChangeAll()

    }
    const productInBasket = Object.keys(guestBasket).includes(_id)
    const productCartQuantity = guestBasket && guestBasket[_id] ? guestBasket[_id].counter : 0;

    const clickPlus = () => {
       dispatch(actionPlusBasketForGuest(_id))
    };
    const clickMin = () => {
       dispatch(actionMinusBasketForGuest(_id))

    }

    return (
         <>
            {productInBasket ? (
            <div className="desktop__card__counter" >
                <button className="desktop__card__counter-min" onClick={() => clickMin()}>-</button>
                <span>{productCartQuantity}</span>
                <button className="desktop__card__counter-min"  onClick={() => clickPlus()}>+</button>
            </div>
            ) : (
            <Button click={() => addBasket()} white className="desktop__card__buttons-first">
                Add to cart
                <Locker className="Locker" />
            </Button>
            )}
        </>
    )
}
export default CounterForGuest