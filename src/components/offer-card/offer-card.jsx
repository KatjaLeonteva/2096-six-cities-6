import React from 'react';
import PropTypes from 'prop-types';
import {offerPropType} from '../../prop-types';

import {Link} from 'react-router-dom';

import BookmarkButton from '../bookmark-button/bookmark-button';

import {CardTypes, OfferTypes} from '../../const';
import {getStarsWidth} from '../../utils';

import cn from 'classnames';


const OfferCard = (props) => {
  const {offer, cardType, onCardMouseEnter = () => {}, onCardMouseLeave = () => {}} = props;

  const classModifier = {
    [CardTypes.MAIN]: `cities__`,
    [CardTypes.FAVORITES]: `favorites__`,
    [CardTypes.NEARBY]: `near-places__`
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
          <img className="place-card__image" src={offer.previewImage} width={cardType === CardTypes.FAVORITES ? `150` : `260`} height={cardType === CardTypes.FAVORITES ? `110` : `200`} alt="Place image" />
        </Link>
      </div>
      <div className={cn(`place-card__info`, {'favorites__card-info': cardType === CardTypes.FAVORITES})}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&nbsp;&#47;&nbsp;night</span>
          </div>
          <BookmarkButton classModifier={`place-card__`} offer={offer} />
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
  cardType: PropTypes.oneOf(Object.values(CardTypes)),
  onCardMouseEnter: PropTypes.func,
  onCardMouseLeave: PropTypes.func
};

export default OfferCard;
