import React, { useState } from 'react';
import Button from '../../../Button/Button';
import "../../ModalForm/ModalFormCall.scss";
import { useEffect } from 'react';
import { selectorPromoCodePrice } from '../../../../store/selectors';
import { actionPromocodePrice } from '../../../../store/orderSlice';
import { useDispatch, useSelector } from 'react-redux';
import { actionUpDateForm } from '../../../../store/orderSlice';
import { selectorOrderFormData,selectorToken } from '../../../../store/selectors';
const PromoCode = ({ priseUser ,priceGuest}) => {
  const [promoCode, setPromoCode] = useState('');
  const [isValid, setIsValid] = useState(false);
  const dispatch = useDispatch()
const token = useSelector(selectorToken)
  const handleChange = (e) => {
    const value = e.target.value;
    setPromoCode(value);
    setIsValid(value.length > 0);
  };

  //  console.log("promoPrice",promoPrice)
  //  console.log("upDateOrder", order)
  // console.log(priseUser)
  const handleSubmit = () => {
    let discountedPrice = 0;
    let discountPercentage = 0;
    
    if (promoCode === 'sale567') {
      discountPercentage = 5;
    } else if (promoCode === 'new1023') {
      discountPercentage = 10;
    } else if (promoCode === 'protect24') {
      discountPercentage = 15;
    }
    
    if (discountPercentage > 0) {
      if (token) {
        discountedPrice = Number((priseUser * (1 - discountPercentage / 100)).toFixed(3));
      } else {
        discountedPrice = Number((priceGuest * (1 - discountPercentage / 100)).toFixed(3));
      }
      
      dispatch(actionPromocodePrice(discountedPrice));
      dispatch(actionUpDateForm({ promoCode: discountPercentage }));
    }
    
    setPromoCode('');
  };

  return (
    <div className="promoCode__containet__input promo__code">
      <input
        type="text"
        className="promoCode__input"
        placeholder="Enter promo code"
        value={promoCode}
        onChange={handleChange}
      />
      <Button
        children="APLLY"
        black
        className={`button__submit button__submit__modal-call promoCode__apply ${isValid ? '' : 'disabled'}`}
        onClick={handleSubmit}
        disabled={!isValid}
      />
    </div>
  );
};

export default PromoCode;
