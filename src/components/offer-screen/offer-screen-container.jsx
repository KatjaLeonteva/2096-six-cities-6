import React from 'react';
import {Redirect, useParams} from 'react-router-dom';

import PropTypes from 'prop-types';
import {reviewPropType, offerPropType} from '../../prop-types';

import OfferScreen from './offer-screen';


const OfferScreenContainer = (props) => {
  const {offers, reviews} = props;
  const {id} = useParams();

  const offer = offers.find((item) => item.id === +id);
  const offersNearby = [offers[1], offers[2], offers[3]];

  if (!offer) {
    return <Redirect to="/" />;
  }

  return <OfferScreen offer={offer} reviews={reviews} offersNearby={offersNearby} isAuthorized={true} />;
};

OfferScreenContainer.propTypes = {
  offers: PropTypes.arrayOf(offerPropType),
  reviews: PropTypes.arrayOf(reviewPropType)
};

export default OfferScreenContainer;
