import React from "react";
import { selectorFavoriteForCustomer, selectorGuestFavorite, selectorToken } from "../../../store/selectors";
import { useSelector } from "react-redux";
import HeartBlack from "./heartblack.svg?react"
import HeartWhite from "./heartwhite.svg?react"
import cx from 'classnames'
import "./Heart.scss"



const Heart = ({handleFavorite, className, id}) => {
    const token = useSelector(selectorToken)
    const favoriteForCustomer = useSelector(selectorFavoriteForCustomer)
    const favoriteForGuest = useSelector(selectorGuestFavorite)


    const favorite = token ? favoriteForCustomer : favoriteForGuest

    return(
      <div
          className={cx('hearts', className)}
          onClick={(event) => {handleFavorite(event)}}>
          {favorite.includes(id) ? <HeartBlack  /> : <HeartWhite />}


        </div>

    )
}
export default Heart