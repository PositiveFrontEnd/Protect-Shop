import React from "react";
import Button from "../../../components/Button/Button";
import './AdminOrder.scss'
import './AdminProfile.scss'
import './PrewieClicked.scss'
import './ProductCard.scss'
import './AdminLetters.scss'



const OrderItemCard = ({ orderNo, dateItem, mobile, firstName, lastName, handleOpenOrder }) => {
    const dateObject = new Date(dateItem);
    const day = String(dateObject.getDate()).padStart(2, '0');
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const year = dateObject.getFullYear();
    const hours = String(dateObject.getHours()).padStart(2, '0');
    const minutes = String(dateObject.getMinutes()).padStart(2, '0');
    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;
    return (
        <>
            <div className="orders__list">
                <p className="order__no">{orderNo}</p>
                <p className="date">{formattedDate}</p>
                <p className="name">{firstName} {lastName}</p>
                <div className="contct__info">
                    <p>{mobile}</p>
                </div>
                <Button className='button' white click={handleOpenOrder}>See more</Button>
            </div>
        </>

    )
}
export default OrderItemCard