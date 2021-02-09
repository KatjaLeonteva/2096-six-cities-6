import React from 'react';
import PropTypes from 'prop-types';
import {reviewPropType, roomPropType} from '../../prop-types';

import Header from '../header/header';
import RoomCard from '../room-card/room-card';
import ReviewsList from '../reviews-list/reviews-list';

import {cardTypes} from '../../const';
import ReviewForm from "../review-form/review-form";


const RoomScreen = (props) => {
  const {place, reviews, placesNearby} = props;

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {place.images.slice(0, 6).map((image, i) => (
                <div className="property__image-wrapper" key={`image${i}`}>
                  <img className="property__image" src={image} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>

          <div className="property__container container">
            <div className="property__wrapper">
              {place.isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">{place.title}</h1>
                <button className={`property__bookmark-button button ${place.isFavorite ? `property__bookmark-button--active` : ``}`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${Math.round(place.rating) * 20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{place.value}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">{place.type}</li>
                <li className="property__feature property__feature--bedrooms">{place.bedrooms} Bedrooms</li>
                <li className="property__feature property__feature--adults">Max {place.maxAdults} adults</li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{place.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {place.goods.map((item, i) => (
                    <li className="property__inside-item" key={`item${i}`}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper user__avatar-wrapper ${place.host.isPro ? `property__avatar-wrapper--pro` : ``}`}>
                    <img className="property__avatar user__avatar" src={place.host.avatarUrl} width="74" height="74"
                      alt="Host avatar" />
                  </div>
                  <span className="property__user-name">{place.host.name}</span>
                </div>
                <div className="property__description">
                  <p className="property__text">{place.description}</p>
                </div>
              </div>

              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList reviews={reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {placesNearby.map((item) => <RoomCard key={item.id} place={item} type={cardTypes.NEARBY}/>)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );

};

RoomScreen.propTypes = {
  place: roomPropType,
  reviews: PropTypes.arrayOf(reviewPropType),
  placesNearby: PropTypes.arrayOf(roomPropType)
};

export default RoomScreen;
