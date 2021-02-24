import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import PropTypes from 'prop-types';
import {reviewPropType, offerPropType} from '../../prop-types';

import {connect} from 'react-redux';
import {fetchOfferById, fetchNearby, fetchReviews} from '../../store/offer/api-actions';
import {ActionCreator} from '../../store/offer/action';

import OfferScreen from './offer-screen';
import {AuthorizationStatus} from '../../const';
import Spinner from '../spinner/spinner';
import NotFoundScreen from '../not-found-screen/not-found-screen';


const OfferScreenContainer = (props) => {
  const {authStatus, onLoadOfferData, offer, reviews, nearby, offerNotFound, onUnmount} = props;
  const {id} = useParams();
  const isAuthorized = authStatus === AuthorizationStatus.AUTH;

  useEffect(() => {
    onLoadOfferData(id);

    return onUnmount;
  }, [id]);

  if (offerNotFound) {
    return <NotFoundScreen />;
  }

  return (!offer ? <Spinner /> : <OfferScreen offer={offer} reviews={reviews} offersNearby={nearby} isAuthorized={isAuthorized} />);
};

OfferScreenContainer.propTypes = {
  authStatus: PropTypes.oneOf(Object.values(AuthorizationStatus)),
  onLoadOfferData: PropTypes.func,
  offer: offerPropType,
  reviews: PropTypes.arrayOf(reviewPropType),
  nearby: PropTypes.arrayOf(offerPropType),
  offerNotFound: PropTypes.bool,
  onUnmount: PropTypes.func
};

const mapStateToProps = (state) => ({
  authStatus: state.user.authorizationStatus,
  offer: state.offer.offer,
  reviews: state.offer.reviews,
  nearby: state.offer.nearby,
  offerNotFound: state.offer.offerNotFound
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOfferData(id) {
    dispatch(fetchOfferById(id));
    dispatch(fetchReviews(id));
    dispatch(fetchNearby(id));
  },
  onUnmount() {
    dispatch(ActionCreator.cleanState());
  }
});

export {OfferScreenContainer};
export default connect(mapStateToProps, mapDispatchToProps)(OfferScreenContainer);
