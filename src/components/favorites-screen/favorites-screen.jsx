import React from 'react';

import PropTypes from 'prop-types';
import {offerPropType} from '../../prop-types';

import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import Header from '../header/header';
import Footer from '../footer/footer';
import OffersList from '../offers-list/offers-list';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

import {CardTypes} from '../../const';
import {getFavoriteOffers} from '../../core';

import cn from 'classnames';


const FavoritesScreen = (props) => {
  const {offers} = props;
  const offersByCity = offers.reduce((acc, cur) => {
    acc[cur.city.name] = acc[cur.city.name] ? [...(acc[cur.city.name]), cur] : [cur];
    return acc;
  }, {});

  return (
    <div className={cn(`page`, {'page--favorites-empty': !offers.length})}>
      <Header />

      <main className={cn(`page__main page__main--favorites`, {'page__main--favorites-empty': !offers.length})}>
        <div className="page__favorites-container container">
          {offers.length ?
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.entries(offersByCity).map(([city, savedOffers]) => {
                  return (
                    <li className="favorites__locations-items" key={city}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <Link className="locations__item-link" to={`/?city=${city}`}>
                            <span>{city}</span>
                          </Link>
                        </div>
                      </div>
                      <OffersList offers={savedOffers} cardType={CardTypes.FAVORITES}/>
                    </li>
                  );
                })}
              </ul>
            </section>
            :
            <FavoritesEmpty />
          }
        </div>
      </main>

      <Footer />
    </div>
  );
};

FavoritesScreen.propTypes = {
  offers: PropTypes.arrayOf(offerPropType)
};

const mapStateToProps = (state) => ({
  offers: getFavoriteOffers(state.main.offers)
});

export {FavoritesScreen};
export default connect(mapStateToProps, null)(FavoritesScreen);
