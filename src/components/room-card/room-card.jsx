import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {roomPropType} from '../../prop-types';
import {cardTypes, OfferTypes} from '../../const';

const RoomCard = (props) => {
  const {place, type, handleMouseEnter, handleMouseOut} = props;

  const classModifier = {
    [cardTypes.MAIN]: `cities__`,
    [cardTypes.FAVORITES]: `favorites__`,
    [cardTypes.NEARBY]: `near-places__`
  };

  return (
    <article className={`place-card ${classModifier[type]}place-card ${classModifier[type]}card`} onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}>
      {place.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`place-card__image-wrapper ${classModifier[type]}image-wrapper`}>
        <Link to={`/offer/${place.id}`}>
          <img className="place-card__image" src={place.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">&nbsp;&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${place.isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(place.rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${place.id}`}>{place.title}</Link>
        </h2>
        <p className="place-card__type">{OfferTypes[place.type.toUpperCase()]}</p>
      </div>
    </article>
  );
};

RoomCard.propTypes = {
  place: roomPropType,
  type: PropTypes.string.isRequired,
  handleMouseEnter: PropTypes.func,
  handleMouseOut: PropTypes.func
};

export default RoomCard;
