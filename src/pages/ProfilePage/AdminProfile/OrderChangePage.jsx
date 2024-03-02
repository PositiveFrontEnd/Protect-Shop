import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { actionGetOllUserOrders, actionSearchByOrderNo, actionUpdateOrder } from "../../../store/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectorToken } from "../../../store/selectors";


const OrderChangePage = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const token = useSelector(selectorToken)
    const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "");
    const orderNo = crumbs[crumbs.length - 1];
    
    const [data, setData] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responce = await dispatch(actionSearchByOrderNo({token, orderNo }))
                setData(responce)
            }
            catch {
                console.log("error")
            }
        }
        fetchData()
    }, [dispatch, orderNo, token])

    const [selectedStatus, setSelectedStatus] = useState(data && data.status);
    useEffect(() => {
    if (data && data.status) {
        setSelectedStatus(data.status);
    }
}, [data]);
    
    console.log(data)
    const handleStatusChange = (e) => {
        setSelectedStatus(e.target.value);
    const newData = {token: token, id: data._id, order: {totalSum: data.totalSum,
                'status': e.target.value }}
        dispatch(actionUpdateOrder(newData));
    };

    return (
        <section>
            <div className="container">
                <div className="order__cont">
                    <select className="order__status" value={selectedStatus} onChange={handleStatusChange}>
                        <option value="not shipped">not shipped</option>
                        <option value="ready">ready</option>
                        <option value="delivered">delivered</option>
                    </select> 
                </div>
                <h3 className="order__title-general">ORDER # {data && data.orderNo}</h3>
                <h4  className="order__title">Products</h4>
                <div className="cange__order__wrapper">
                    <div className="order__products">
                        <img className="img" />
                        <p className="quantity">Quantity</p>
                        <p className="name">Name</p>
                        <p className="color__order">Color</p>
                        <p className="itemNo">Product's No</p>
                        <p className="price">Price</p>
                    </div>
                    {data && data.products.map((item, index) => (
                        <div className="order__products" key={index}>
                            <img className="img" src={item.product.imageUrls[0]} />
                            <p className="quantity">{item.cartQuantity}</p>
                            <p className="name">{item.product.name}</p>
                            <p className="color__order">{item.product.color }</p>
                            <p className="itemNo">{item.product.itemNo}</p>
                            <p className="price">${item.product.currentPrice}</p>
                        </div>
                    ) )}
                    <p className="total__price">Total price: ${data && data.totalSum}</p>
                </div>
                <div className="customer__data">
                    <h4 className="order__title">Customer Data</h4>
                    <div className="data__item">
                        <p>Name:</p>
                        <p>{data && data.customerId.firstName} {data && data.customerId.lastName}</p>
                    </div>
                    <div className="data__item">
                        <p>Customer No:</p>
                        <p>{data && data.customerId.customerNo}</p>
                    </div>
                    <div className="data__item">
                        <p>Telephone:</p>
                        <p>{data && data.customerId.telephone}</p>
                    </div>
                    <div className="data__item">
                        <p>Email:</p>
                        <p>{data && data.customerId.email}</p>
                    </div>
                </div>
                 <div className="customer__data">
                    <h4 className="order__title">Delivery and Payment Info</h4>
                    <div className="data__item">
                        <p>Payment Info:</p>
                        <p>{data && data.paymentInfo}</p>
                    </div>
                    <div className="data__item">
                        <p>Address:</p>
                        <p>{data && data.deliveryAddress.address}</p>
                    </div>
                    <div className="data__item">
                        <p>City:</p>
                        <p>{data && data.deliveryAddress.city}</p>
                    </div>
                    <div className="data__item">
                        <p>Postal:</p>
                        <p>{data && data.deliveryAddress.postal}</p>
                    </div>

                </div>

            </div>
        </section>
    )
}
export default OrderChangePage