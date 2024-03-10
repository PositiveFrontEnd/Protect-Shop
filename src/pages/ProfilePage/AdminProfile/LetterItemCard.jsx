import React from "react";
import Button from "../../../components/Button/Button";
import Star from './star.svg?react'
import BlackStar from './blackstar.svg?react'
import { useSelector } from "react-redux";
import { selectorImportantLetters } from "../../../store/selectors";
import { useNavigate } from "react-router-dom";
import cn from "classnames";

const LetterItemCard = ({ dateItem, phone, question, name, handleOpenOrder, status, id }) => {
    const navigate = useNavigate()
    const dateObject = new Date(dateItem);
    const day = String(dateObject.getDate()).padStart(2, '0');
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const year = dateObject.getFullYear();
    const hours = String(dateObject.getHours()).padStart(2, '0');
    const minutes = String(dateObject.getMinutes()).padStart(2, '0');
    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;
    const importants = useSelector(selectorImportantLetters)

    return (
        <div className={cn('letter__list read__letter', status === 'new' && "new__letter")}>
            <p className="date">{formattedDate}</p>
            <p className="name">{name}</p>
            <p className="question">{question}</p>
            <p className="phone">{phone}</p>
            <div className="star" onClick={() => navigate(`/account/letters/${id}`)}>
                {importants.includes(id) ? <BlackStar /> : <Star />}
                <Button className='button' white click={handleOpenOrder}>See more</Button>
            </div>
        </div>

    )
}
export default LetterItemCard