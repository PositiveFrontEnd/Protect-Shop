import React from 'react'
import './Instagram.scss'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { actionGetCatalogId } from '../../../store/catalog'

const Instagram = () => {
    const dispatch = useDispatch()
    const [insta, setInsta] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await dispatch(actionGetCatalogId("instagram"));
                setInsta(result);
            } catch (error) {
                console.error("Помилка під час виконання запиту:", error);
            }
        };

        fetchData()
    }, []);
    const instaImg = insta.imgUrl || [];
    const instaCard = instaImg.map((url, index) => (
        <div key={index}>
            <img className='insta__img' src={url} />
        </div>
    )
    )
    return (

        <section className='insta__wrapper '>
            <div className='container'>
                <h4 className='insta__title'>We are in Instagram @Protect.com</h4>
                <div className='insta__img__wrapper'>
                    {instaCard}
                </div>

            </div>
        </section>
    )
}

export default Instagram