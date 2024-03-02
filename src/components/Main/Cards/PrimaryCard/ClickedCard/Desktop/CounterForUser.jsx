 import React, { useState } from "react";
import "./DesktopClickedCardStyle.scss";
import Locker from "../Images/locker.svg?react";
import "../Mobile/MobileClickedCardStyle.scss";
import Button from "../../../../../Button/Button";
import { actionAddBasketOneProduct,actionDecreaseProduct } from "../../../../../../store/basketSlice";
import { selectorToken,selectorBaskets } from "../../../../../../store/selectors";
import { useDispatch,useSelector } from "react-redux";




const CounterForUser = ({_id, modalChangeAll}) => {
    const dispatch = useDispatch()
    const token = useSelector(selectorToken)
    const basketProduct = useSelector(selectorBaskets)

    
        
        const addBasket = async () => {
            modalChangeAll()
            dispatch(actionAddBasketOneProduct({product:[_id], token}))
        }
        
        const plusBasketCart = async () => {
            dispatch(actionAddBasketOneProduct({ product: [_id], token }))
        }
        
        const minBasketCart = async () => {
            dispatch(actionDecreaseProduct({ id: [_id], token }))
        }
        const productInBasket = basketProduct.products && basketProduct.products.some((item) => item.product._id === _id)
        const productFindCartQuantity = basketProduct.products && basketProduct.products.filter((product) => product.product._id === _id);
        const productCartQuantity = productFindCartQuantity && productFindCartQuantity.length > 0 ? productFindCartQuantity[0].cartQuantity : 0;
// const {isModalAll,modalChangeAll} = useContext(ContextFunctions) 
// useEffect(() => {
//   if (isModalAll) {
//     const timeoutId = setTimeout(() => {
//       modalChangeAll();
//     }, 2000); 
    
//     return () => clearTimeout(timeoutId); 
//   }
// }, [isModalAll, modalChangeAll])
    return (
        <>
        {productInBasket ? (
          <div className="desktop__card__counter" >
            <button className="desktop__card__counter-min" onClick={()=>minBasketCart()}>-</button>
            <span>{productCartQuantity}</span>
            <button className="desktop__card__counter-min"  onClick={()=>plusBasketCart()}>+</button>
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

  
export default CounterForUser
