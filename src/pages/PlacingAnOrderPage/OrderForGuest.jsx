// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { actionCreateNewOrderNotLoggerCustomer, actionInfoOrderForGuest, actionProductsOrderForGuest } from "../../store/orderSlice";
// import { actionGetOneProduct } from "../../store/productsSlice";
// import { selectorDeliveryForOrderGuest, selectorGuestBasket, selectorInfoForOrderGuest, selectorOrderFormData , selectorProductsForOrderGuest } from "../../store/selectors";

// const OrderForGuest = () => {
//     const dispatch = useDispatch()
//     const guestBasket = useSelector(selectorGuestBasket)
//     const [productsOrderForGuest, setProductsOrderForGuest] = useState([])
//     const orderGuestInfo = useSelector(selectorOrderFormData )
//     useEffect(() => {
//         const fetchData = async() => {
//             try {
//                 const order = [];
//                 for (const key of Object.keys(guestBasket)) {
//                     const item = guestBasket[key];
//                     if (item.payload) {
//                         const data = await dispatch(actionGetOneProduct(item.payload));
//                         console.log(data);
//                         order.push({
//                             cartQuantity: item.counter,
//                             product: data,
//                         });
//                     }
//                 }
//                 setProductsOrderForGuest(order)
//                 console.log(order)
//             }
//             catch {
//                 console.log('error')
//             }
//         }
//         fetchData()
//     }, [dispatch, guestBasket])

//     const order = {
//         products: productsOrderForGuest,
//         ...orderGuestInfo
//     }
//     dispatch(actionProductsOrderForGuest(order));

//     console.log(order)

//     return (
//         <p> productsOrderForGuest</p>
//     )
// }
// export default OrderForGuest