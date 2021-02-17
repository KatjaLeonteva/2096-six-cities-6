import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {offerPropType} from '../../prop-types';

import Header from '../header/header';
import OffersSorting from '../offers-sorting/offers-sorting';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';

import {Cities} from '../../const';

import classnames from 'classnames';


const MainScreen = (props) => {
  const {offers} = props;
  const [activeCity, setActiveCity] = useState(Cities.PARIS);
  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity);
  const cityLocation = filteredOffers.length ? filteredOffers[0].city.location : {};

  const handleCityClick = (evt) => {
    evt.preventDefault();
    setActiveCity(evt.target.innerText);
  };


  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={classnames(`page__main page__main--index`, {'page__main--index-empty': !filteredOffers.length})}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {Object.values(Cities).map((city) => (
                <li className="locations__item" key={city} onClick={handleCityClick}>
                  <a className={classnames(`locations__item-link tabs__item`, {'tabs__item--active': city === activeCity})} href="#">
                    <span>{city}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          {filteredOffers.length ?
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{filteredOffers.length} places to stay in {activeCity}</b>
                <OffersSorting />
                <OffersList offers={filteredOffers}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map city={cityLocation} points={filteredOffers} />
                </section>
              </div>
            </div>
            :
            <div className="cities__places-container container cities__places-container--empty">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in {activeCity}</p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          }
        </div>
      </main>
    </div>
  );
};

MainScreen.propTypes = {
  offers: PropTypes.arrayOf(offerPropType)
};

export default MainScreen;
