import React from 'react';
import PropTypes from 'prop-types';
import {offerPropType} from '../../prop-types';

import {Link} from 'react-router-dom';

import {cardTypes, OfferTypes} from '../../const';
import {getStarsWidth} from '../../utils';

import cn from 'classnames';


const OfferCard = (props) => {
  const {offer, cardType, onCardMouseEnter, onCardMouseLeave} = props;

  const classModifier = {
    [cardTypes.MAIN]: `cities__`,
    [cardTypes.FAVORITES]: `favorites__`,
    [cardTypes.NEARBY]: `near-places__`
  };

  const handleCardMouseEnter = () => {
    onCardMouseEnter(offer);
  };

  return (
    <article className={`place-card ${classModifier[cardType]}place-card`} onMouseEnter={handleCardMouseEnter} onMouseLeave={onCardMouseLeave}>
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`place-card__image-wrapper ${classModifier[cardType]}image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width={cardType === cardTypes.FAVORITES ? `150` : `260`} height={cardType === cardTypes.FAVORITES ? `110` : `200`} alt="Place image" />
        </Link>
      </div>
      <div className={cn(`place-card__info`, {'favorites__card-info': cardType === cardTypes.FAVORITES})}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&nbsp;&#47;&nbsp;night</span>
          </div>
          <button className={cn(`place-card__bookmark-button button`, {'place-card__bookmark-button--active': offer.isFavorite})} type="button">
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
  cardType: PropTypes.oneOf(Object.values(cardTypes)),
  onCardMouseEnter: PropTypes.func,
  onCardMouseLeave: PropTypes.func
};

OfferCard.defaultProps = {
  onCardMouseEnter: () => {},
  onCardMouseLeave: () => {}
};

export default OfferCard;
