import React from 'react';
import PropTypes from 'prop-types';
import {offerPropType} from '../../prop-types';

import {connect} from 'react-redux';

import Header from '../header/header';
import CitiesList from '../cities-list/cities-list';
import OffersSorting from '../offers-sorting/offers-sorting';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import MainEmpty from '../main-empty/main-empty';

import {Cities, cardTypes} from '../../const';
import {getCityOffers} from '../../core';

import cn from 'classnames';


const MainScreen = (props) => {
  const {activeCity, cityOffers} = props;
  const cityLocation = cityOffers.length ? cityOffers[0].city.location : {};

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={cn(`page__main page__main--index`, {'page__main--index-empty': !cityOffers.length})}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          {cityOffers.length ?
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{cityOffers.length} places to stay in {activeCity}</b>
                <OffersSorting />
                <OffersList offers={cityOffers} cardType={cardTypes.MAIN}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map city={cityLocation} points={cityOffers} />
                </section>
              </div>
            </div>
            :
            <MainEmpty activeCity={activeCity} />
          }
        </div>
      </main>
    </div>
  );
};

MainScreen.propTypes = {
  activeCity: PropTypes.oneOf(Object.values(Cities)),
  cityOffers: PropTypes.arrayOf(offerPropType)
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  cityOffers: getCityOffers(state.offers, state.activeCity)
});

export {MainScreen};
export default connect(mapStateToProps)(MainScreen);
