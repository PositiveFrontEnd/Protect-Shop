import React from "react";
import { selectorGetAllOrders, selectorToken } from "../../store/selectors";
import { actionGetOllUserOrders } from "../../store/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const OrderHistory = () => {
  const allOrders = useSelector(selectorGetAllOrders)
  const token = useSelector(selectorToken)
  const dispatch = useDispatch()
  useEffect(() => {
    if (token) {
      dispatch(actionGetOllUserOrders(token))
    }
  }, [dispatch, token])

  return (
    <>
      <div className="order">
        {Array.isArray(allOrders) && allOrders.map((order, index) => (
          <div className="container_order" key={index}>
            <p className="order_number">Order Number: {order.orderNo}</p>
            <div className="container_img">
              {order.products.map((product, index) => (
                <div key={index}>
                  <img className="history_img" src={product.product.imageUrls[0]} alt="" />
                </div>
              ))}
            </div>
            <div className="order_sum_seeMore">
              <p className="order_sum">Total: {order.totalSum}$</p>
              <NavLink to={`/account/${order.orderNo}`} className="order_seeMore">see more &gt;</NavLink>
            </div>
          </div>
        ))}
      </div>
    </>
  )
};

export default OrderHistory;
