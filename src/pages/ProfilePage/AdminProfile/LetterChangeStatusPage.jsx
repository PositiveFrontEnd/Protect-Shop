import React, { useEffect, useState } from "react";
import Star from './star.svg?react'
import BlackStar from './blackstar.svg?react'
import { useDispatch, useSelector } from "react-redux";
import { actionAddToImportant, actionDeleteLetter, actionGetOneLetter, actionUpdateLetter } from "../../../store/messageSlice";
import Button from "../../../components/Button/Button";
import ModalDeleteLetter from "../../../components/Modal/ModalDeleteLetter";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { ContextFunctions } from '../../../context/context';
import { selectorImportantLetters } from "../../../store/selectors";


const LatterChangeStatusPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "");
    const id = crumbs[crumbs.length - 1];
    const [currentLetter, setLetter] = useState({})
    const { isModalAll, modalChangeAll } = useContext(ContextFunctions)
    const important = useSelector(selectorImportantLetters)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responce = await dispatch(actionGetOneLetter(id))
                const newLetter = {...currentLetter, status: "read"}
                if (responce.status !== 'read') {
                    const data = dispatch(actionUpdateLetter({ id, letter: newLetter }))
                    setLetter(data)
                }
                setLetter(responce)
                
            }
            catch {
                console.log("error")
            }
        }

        fetchData()
    }, [dispatch, id])

    const handleChangeImportant = () => {
            const isAdded = important && important.some((item) => item === id)
            if (isAdded) {
                const updatedIds = important.filter((item) => item !== id).map(item => item);
                dispatch(actionAddToImportant(updatedIds))
            } else {
                const updatedIds = [...important.map(item => item), id];
                dispatch(actionAddToImportant(updatedIds))
            }
        const newLetter = {...currentLetter, important: !currentLetter.important}
        dispatch(actionUpdateLetter({ id, letter: newLetter }))
        setLetter(newLetter)
        }
    
    const handleDeleteModal = () => modalChangeAll(!isModalAll)
    const handleDeleteLetter = () => {
        dispatch(actionDeleteLetter(id))
        modalChangeAll(!isModalAll)
        navigate('/account/letters')
    }


    return (
        <>
            <div className="container letter__change">
                <div className="letter__cont">
                    <h4  className="order__title">Letter</h4>
                    <div className="letter__change__menu">
                        <div onClick={() => handleChangeImportant()}>
                            {important && important.includes(id) ? <BlackStar/> : <Star/>}
                        </div>
                    </div>
                </div>
                <div className="change__letter__wrapper">
                    <div className="letter">
                        <span> </span>
                        <p className="letter__key">Name: <span className="letter__value">{ currentLetter.name}</span></p>
                        <p className="letter__key">Phone: <span className="letter__value">{ currentLetter.email}</span></p>
                        <p className="letter__key">Email: <span className="letter__value">{ currentLetter.phone}</span></p>
                        <p className="letter__key">Question: <span className="letter__value">{currentLetter.question}</span></p>
                        <p className="letter__key">Letter: <span className="letter__value">{ currentLetter.letter}</span></p>
                    </div>

                </div>

                <Button black className="letter__button" click={() => handleDeleteModal(id)}>Delete</Button>
            </div>
            {isModalAll &&
                <ModalDeleteLetter
                firstClick={() => modalChangeAll(!isModalAll)}
                secondaryClick={() =>handleDeleteLetter()}
                onclick={() => modalChangeAll(!isModalAll)}
                isOpen={() => modalChangeAll(!isModalAll)}
            />}
        </>
    )
}
export default LatterChangeStatusPage