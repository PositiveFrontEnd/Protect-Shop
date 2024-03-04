import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actionGetAllOrders } from "../../../store/orderSlice"
import OrderItemCard from "./OrderItemCard"
import { selectorToken } from "../../../store/selectors"
import { useLocation, useNavigate } from "react-router-dom"

const AdminOrdersPage = () => {
    const dispatch = useDispatch()
    const token = useSelector(selectorToken)
    const navigate = useNavigate()
    const location = useLocation()
    const [allOrders, setAllOrders] = useState([])
    const [sortedOrders, setSortedOrders] = useState([])
    const [newData, setNewData] = useState([])
    const [activeTab, setActiveTab] = useState("not shipped")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const orders = await dispatch(actionGetAllOrders())
                setAllOrders(orders)
            } catch {
                console.log('error')
            }
        } 
        fetchData()
    }, [dispatch])

    useEffect(() => {
        setSortedOrders(allOrders.slice().sort((a, b) => new Date(a.date) - new Date(b.date)))
    }, [allOrders])

    useEffect(() => {
        if (sortedOrders.length > 0 && location.pathname === "/account/orderstatus") {
            handleTabs("not shipped");
        }
    }, [sortedOrders, location.pathname])

    const handleOpenOrder = (orderNo) => {
        navigate(`/account/orderstatus/${orderNo}`)
    }

    const handleTabs = (data) => {
        setActiveTab(data)
        const filteredData = sortedOrders.filter((item) => item.status === data)
        setNewData(filteredData)
    }
    
    return (
        <>
            <section className="order__container">
                <div className="order__tabs__box">
                    <div className="order__tabs">
                        <p className={activeTab === "not shipped" ? "active" : ""} onClick={() => handleTabs("not shipped")}>not shipped</p>
                        <p className={activeTab === "ready" ? "active" : ""} onClick={() => handleTabs("ready")}>ready</p>
                        <p className={activeTab === "delivered" ? "active" : ""} onClick={() => handleTabs("delivered")}>delivered</p>
                    </div>
                </div>
                <div className="orders__list orders__list-bold">
                    <p className="order__no">Order No</p>
                    <p className="status">Date</p>
                    <p className="name">Name</p>
                    <p className="contct__info">Contacts</p>
                </div>
                {newData.length > 0 && newData.map(order => (
                    <OrderItemCard
                        key={order._id}
                        orderNo={order.orderNo}
                        dateItem={order.date}
                        mobile={order.mobile}
                        firstName={order.firstName}
                        lastName={order.lastName}
                        handleOpenOrder={() => handleOpenOrder(order.orderNo)}
                        totalPrice={order.totalPrice}
                    />
                ))}
            </section>
        </>
    )
}

export default AdminOrdersPage