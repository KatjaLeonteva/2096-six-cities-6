import React from 'react';
import PropTypes from 'prop-types';
import {offerPropType} from '../../prop-types';

import OfferCard from '../offer-card/offer-card';

import {cardTypes} from '../../const';

import cn from 'classnames';


const OffersList = (props) => {
  const {offers, cardType = cardTypes.MAIN, onCardMouseEnter, onCardMouseLeave} = props;

  return (
    <div className={cn(
        {
          'places__list': true,
          'cities__places-list tabs__content': cardType === cardTypes.MAIN,
          'near-places__list': cardType === cardTypes.NEARBY,
          'favorites__places': cardType === cardTypes.FAVORITES
        }
    )}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          cardType={cardType}
          onCardMouseEnter={onCardMouseEnter}
          onCardMouseLeave={onCardMouseLeave}
        />
      ))}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropType),
  cardType: PropTypes.oneOf(Object.values(cardTypes)),
  onCardMouseEnter: PropTypes.func,
  onCardMouseLeave: PropTypes.func
};

export default OffersList;
