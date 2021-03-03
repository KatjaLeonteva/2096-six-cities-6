import React from 'react';
import PropTypes from 'prop-types';
import {offerPropType} from '../../prop-types';

import OfferCard from '../offer-card/offer-card';

import {CardTypes} from '../../const';

import cn from 'classnames';


const OffersList = (props) => {
  const {offers, cardType = CardTypes.MAIN, onCardMouseEnter, onCardMouseLeave} = props;

  return (
    <div className={cn(
        {
          'places__list': true,
          'cities__places-list tabs__content': cardType === CardTypes.MAIN,
          'near-places__list': cardType === CardTypes.NEARBY,
          'favorites__places': cardType === CardTypes.FAVORITES
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
  cardType: PropTypes.oneOf(Object.values(CardTypes)),
  onCardMouseEnter: PropTypes.func,
  onCardMouseLeave: PropTypes.func
};

export default React.memo(OffersList);
