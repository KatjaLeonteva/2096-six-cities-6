import React from 'react';
import PropTypes from 'prop-types';
import {roomPropType} from '../../prop-types';

import Header from '../header/header';
import Footer from '../footer/footer';
import RoomCard from '../room-card/room-card';

import {cardTypes} from '../../const';

const FavoritesScreen = (props) => {
  const {places} = props;
  const placesByCity = places.reduce((acc, cur) => {
    acc[cur.city.name] = acc[cur.city.name] ? [...(acc[cur.city.name]), cur] : [cur];
    return acc;
  }, {});

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(placesByCity).map(([city, savedPlaces]) => {
                return (
                  <li className="favorites__locations-items" key={city}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {savedPlaces.map((place) => <RoomCard key={place.id} place={place} type={cardTypes.FAVORITES} />)}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

FavoritesScreen.propTypes = {
  places: PropTypes.arrayOf(roomPropType)
};

export default FavoritesScreen;
