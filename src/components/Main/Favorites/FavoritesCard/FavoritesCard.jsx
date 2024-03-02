import React from 'react'
import Button from '../../../Button/Button'
import './FavoritesCard.scss'

const FavoritesCard = ({ url, name, price }) => {
    return (
        <div className='favorite__item'>
            <div className='img__wrapper'>
                <img className='img' src={url} alt="" />
            </div>
            <p>{name}</p>
            <p>{price}</p>
            <Button black>Buy now</Button>

        </div>
    )
}
export default FavoritesCard