import React, { useEffect, useState } from 'react'
import "./BasketPage.scss"
import { Formik } from "formik";
import Input from '../../components/Form/Inputs/Input';
import validationSchema from '../../components/Form/Inputs/Validation';
import Button from '../../components/Button/Button';
import Check from "../../components/Button/ButtonSvg/check.svg?react"
import { useDispatch, useSelector } from 'react-redux';
import { actionGetBasket } from '../../store/basketSlice';
import { selectorBaskets, selectorGuestBasket, selectorPriseGuest, selectorToken } from '../../store/selectors';
import UserBasket from './UserBasket';
import { useNavigate,useLocation  } from 'react-router';
import BasketGuest from './BasketGuest';
import PromoCode from '../../components/Form/Inputs/PromoCode/PromoCode';
import { selectorPromoCodePrice } from '../../store/selectors';
import { actionClearPromoCode } from '../../store/orderSlice';

const BasketPage = () => {
  const dispatch = useDispatch()
  const token = useSelector(selectorToken)
  let basketProduct = useSelector(selectorBaskets)
  const basketGuest = useSelector(selectorGuestBasket)
  const priceGuest = useSelector(selectorPriseGuest)
  const checkGuestBasket = Object.keys(basketGuest)
   basketProduct = token ? basketProduct.products : checkGuestBasket
  const navigate = useNavigate()
  useEffect(() => {
    if (token) {
      dispatch(actionGetBasket(token))
    }
  }, [dispatch, token])


  let priseUser = token && basketProduct && basketProduct.reduce((total, { product, cartQuantity }) => total + (product.currentPrice * cartQuantity), 0)
  const promoPrice = useSelector(selectorPromoCodePrice)
 
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== '/cart/placing_an_order' && location.pathname !== '/cart/placing_an_order/contact_information' && location.pathname !== '/cart/placing_an_order/choice_of_delivery') {
      dispatch(actionClearPromoCode());
    }
  }, [dispatch, location.pathname]);


 
  return (
    <>
        <div className='container basket basket__order__page'>
            <h2 className='basket__title basket__title-order__page'>SHOPPING CART</h2>
            {basketProduct && basketProduct.length > 0 ? (
              <div className='basket__content basket__content-order__page'>
                <div>
                {token ? (
                  <UserBasket />
                ): (
                  <BasketGuest/>
                )}
                 <Button click={()=> navigate("/catalogue")} children="Continue shopping" white className="basket__button__continue butt__contine__shopping-order__page" />
                </div>
                <div className='basket__promoCode basket__promoCode-order__page'>
                  <div className='promoCode__container promoCode__container-order__page'>
                   {location.pathname === '/cart/placing_an_order/contact_information' &&  <PromoCode  priseUser={priseUser} priceGuest={priceGuest} />}
                  {token ? <p className='basket__total__price basket__total__price-order__page ' > Amount:   {promoPrice ? (
                 <>
             <span className='promoCode'>{priseUser} $ </span> 
                <span > {promoPrice} $</span>
                 </>      
        ) : (
          ` ${priseUser} $`
        )} </p> 
                  : 
       <p className='basket__total__price basket__total__price-order__page'>Amount:  {promoPrice ? (
                    <>
                    <span className='promoCode'>{priceGuest} $ </span> 
                     <span > {promoPrice} $</span>
                     </> 
                  ): (
                    ` ${priceGuest} $`
                  )} </p> }
                     <Button onClick={()=> navigate('/cart/placing_an_order/contact_information')} svgLeft={<Check />} children="Check out " black className="button__Check button__order__page" />
                  </div>
                </div>
              </div>
            ) : (
              <p className='basket__noProducts'>There are no added products</p>
            )}
          </div>
    </>

  )
}

export default BasketPage