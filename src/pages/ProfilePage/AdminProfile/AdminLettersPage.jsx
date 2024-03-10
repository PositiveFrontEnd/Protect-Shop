import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actionAllLetters } from "../../../store/messageSlice"
import LetterItemCard from "./LetterItemCard"
import { selectorLetterAll } from "../../../store/selectors"
import './AdminLetters.scss'
const AdminLettersPage = () => {
    const dispatch = useDispatch()
    const [sortLetters, setSortedLetters] = useState([])
    const [allLetters, setAllLetters] = useState([])

    const [newData, setNewData] = useState([])
    const [activeTab, setActiveTab] = useState("inbox")

    const letters = useSelector(selectorLetterAll)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await dispatch(actionAllLetters())
                setAllLetters(response)
            }
            catch {
                console.log("error")
            }
        }
        fetchData()
    }, [dispatch])

    useEffect(() => {
        letters.length > 0 && setSortedLetters(letters.slice().sort((a, b) => new Date(b.date) - new Date(a.date)))
    }, [letters])

    useEffect(() => {
        if (sortLetters.length > 0 && (location.pathname === "/account/letters" || location.pathname === "/account")) {
            handleTabs("inbox");
        }
    }, [sortLetters, location.pathname])



    const handleTabs = (data) => {
        setActiveTab(data)

        const filteredData = sortLetters.filter((item) => item.important === true)
        data === "inbox" ? setNewData(sortLetters) : setNewData(filteredData)
    }



    return (
        <>
            <section className="order__container">
                <div className="order__tabs__box">
                    <div className="order__tabs">
                        <p className={activeTab === "inbox" ? "active" : ""} onClick={() => handleTabs("inbox")}>Inbox letters</p>
                        <p className={activeTab === "important" ? "active letter-important" : "letter-important"} onClick={() => handleTabs("important")}>important</p>
                    </div>
                </div>
                <div className="letter__list letter__list-bold">
                    <p className="date">Date</p>
                    <p className="name">Name</p>
                    <p className="question">Question</p>
                    <p className="phone">Phone</p>
                </div>
                {

                    newData.length > 0 ? newData.map((item, index) => (
                        <div key={index}>
                            <LetterItemCard
                                letter={item}
                                name={item.name}
                                phone={item.phone}
                                dateItem={item.date}
                                question={item.question}
                                status={item.status}
                                id={item._id}
                            />

                        </div>
                    )) : <p className="noletters">Letter list is empty</p>
                }
            </section>
        </>
    )
}
export default AdminLettersPage