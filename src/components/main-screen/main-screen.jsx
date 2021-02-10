import React from 'react';
import PropTypes from 'prop-types';
import {offerPropType} from '../../prop-types';

import Header from '../header/header';
import OffersSorting from '../offers-sorting/offers-sorting';
import OffersList from '../offers-list/offers-list';

import {Cities} from '../../const';


const MainScreen = (props) => {
  const {total, city, offers} = props;

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={`page__main page__main--index ${!offers.length ? `page__main--index-empty` : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {Object.values(Cities).map((value) => (
                <li className="locations__item" key={value}>
                  <a className={`locations__item-link tabs__item ${city === value ? `tabs__item--active` : ``}`} href="#">
                    <span>{value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          {offers.length
            ? <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{total} places to stay in {city}</b>
                <OffersSorting />
                <OffersList offers={offers}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map"></section>
              </div>
            </div>
            : <div className="cities__places-container container cities__places-container--empty">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in {city}</p>
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
  total: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerPropType)
};

export default MainScreen;
