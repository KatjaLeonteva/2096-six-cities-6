import React from 'react';
import PropTypes from 'prop-types';
import {offerPropType} from '../../prop-types';

import {Link} from 'react-router-dom';

import {cardTypes, OfferTypes} from '../../const';
import {getStarsWidth} from '../../utils';


const OfferCard = (props) => {
  const {offer, type, onMouseEnter, onMouseLeave} = props;

  const classModifier = {
    [cardTypes.MAIN]: `cities__`,
    [cardTypes.FAVORITES]: `favorites__`,
    [cardTypes.NEARBY]: `near-places__`
  };

  const handleMouseEnter = () => {
    onMouseEnter(offer);
  };

  return (
    <article className={`place-card ${classModifier[type]}place-card`} onMouseEnter={handleMouseEnter} onMouseLeave={onMouseLeave}>
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`place-card__image-wrapper ${classModifier[type]}image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width={type === cardTypes.FAVORITES ? `150` : `260`} height={type === cardTypes.FAVORITES ? `110` : `200`} alt="Place image" />
        </Link>
      </div>
      <div className={type === cardTypes.FAVORITES ? `favorites__card-info place-card__info` : `place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&nbsp;&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${offer.isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getStarsWidth(offer.rating)}`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{OfferTypes[offer.type.toUpperCase()]}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: offerPropType,
  type: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
};

OfferCard.defaultProps = {
  onMouseEnter: () => {},
  onMouseLeave: () => {}
};

export default OfferCard;
