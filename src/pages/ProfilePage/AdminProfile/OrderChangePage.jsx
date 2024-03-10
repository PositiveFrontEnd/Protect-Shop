import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { actionSearchByOrderNo, actionUpdateOrder } from "../../../store/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectorToken } from "../../../store/selectors";
import ArrowUp from "./arrowUp.svg?react"
import ArrowDown from "./arrowDown.svg?react"


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
                const responce = await dispatch(actionSearchByOrderNo({ token, orderNo }))
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

    const handleStatusChange = (e) => {
        setSelectedStatus(e.target.value);
        const datahtml = data
        const newData = { token: token, datahtml, id: data._id, subscriberMail: data.email, order: { totalSum: data.totalSum, 'status': e.target.value } }
        dispatch(actionUpdateOrder(newData));
        setIsOpenSort(!isOpenSort)

    };

    const [isOpenSort, setIsOpenSort] = useState(false);

    const actionSort = () => {
        setIsOpenSort(!isOpenSort)
    };

    const handleOutside = (event) => {
        event.stopPropagation()
        if (!event.target.closest('.order__cont')) {
            setIsOpenSort(false)
        }
    }
    const stopClick = (event) => {
        event.stopPropagation()
    };

    return (
        <section onClick={(event) => { handleOutside(event) }}>
            <div className="container order__change">
                <div>
                    <div onClick={stopClick} className="order__cont sort__dropdown__order" >
                        <button className={isOpenSort ? 'sort-open' : 'sort'}
                            onClick={actionSort}>{selectedStatus}
                            {
                                isOpenSort ? <ArrowUp /> : <ArrowDown />
                            }
                        </button>

                        {isOpenSort && (
                            <div className='sort__dropdown' >
                                <label><input type='radio'
                                    value='not shipped'
                                    onChange={handleStatusChange}
                                />
                                    Not shipped</label>
                                <label><input type='radio'
                                    value='ready'
                                    onChange={handleStatusChange}
                                />
                                    Ready</label>
                                <label><input type='radio'
                                    value='delivered'
                                    onChange={handleStatusChange}
                                />
                                    Delivered</label>
                            </div>
                        )}
                    </div>



                </div>
                <h3 className="order__title-general">ORDER # {data && data.orderNo}</h3>
                <h4 className="order__title">Products</h4>
                <div className="cange__order__wrapper">
                    <div className="products_wrap">
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
                                <p className="color__order">{item.product.color}</p>
                                <p className="itemNo">{item.product.itemNo}</p>
                                <p className="price">${item.product.currentPrice}</p>
                            </div>
                        ))}

                    </div>
                    <p className="total__price">Total price: ${data && data.totalSum}</p>
                </div>
                <h4 className="order__title">Customer Data</h4>
                <div className="customer__data">
                    <div className="data__item">
                        <p>Name:</p>
                        <p>{data && data.firstName} {data && data.lastName}</p>
                    </div>
                    <div className="data__item">
                        <p>Order No:</p>
                        <p>{data && data.orderNo}</p>
                    </div>
                    <div className="data__item">
                        <p>Telephone:</p>
                        <p>{data && data.mobile}</p>
                    </div>
                    <div className="data__item">
                        <p>Email:</p>
                        <p>{data && data.email}</p>
                    </div>
                </div>
                <h4 className="order__title">Delivery and Payment Info</h4>
                <div className="customer__data">
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