import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {offerPropType} from '../../prop-types';

import OfferCard from '../offer-card/offer-card';

import {cardTypes} from '../../const';

const OffersList = (props) => {
  const {offers} = props;
  const [activeCard, setActiveCard] = useState({});

  const handleMouseEnter = (selectedCard) => {
    setActiveCard(selectedCard);
  };

  const handleMouseLeave = () => {
    setActiveCard({});
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          type={cardTypes.MAIN}
          isActive={activeCard.id === offer.id}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} />
      ))}
    </div>
  );

};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropType)
};

export default OffersList;
