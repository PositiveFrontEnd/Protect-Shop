import React from "react";
import PropTypes from 'prop-types';
import Heart from "../../Heart/Heart";

const PopularCard = ({ src, name, price, handleFavorite, click, id }) => {
  return (
    <>
      <div onClick={(event) => click(event)} className="popular__card">
        <img className="popular__img" src={src} />
        <Heart
          handleFavorite={(event) => handleFavorite(event)}
          className='heart'
          id={id}
        />
        <div className="popular__card-description">
          <p className="popular__card-description-name">{name}</p>
          <p className="popular__card-description-price">{price}</p>
        </div>
      </div>
    </>
  );
};


PopularCard.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  click: PropTypes.func,
  handleFavorite: PropTypes.func,
}

export default PopularCard;
