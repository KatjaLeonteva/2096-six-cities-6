import React, {useEffect} from 'react';

import PropTypes from 'prop-types';
import {offerPropType} from '../../../prop-types';

import {connect} from 'react-redux';
import {getFavoriteOffers} from '../../../store/favorites/selectors';
import {fetchFavorites} from '../../../store/api-actions';

import Header from '../../header/header';
import Footer from '../../footer/footer';
import FavoritesEmpty from '../../favorites-empty/favorites-empty';
import FavoritesList from '../../favorites-list/favorites-list';

import cn from 'classnames';


const FavoritesScreen = (props) => {
  const {offers, onLoadData} = props;
  const isEmpty = !offers.length;

  useEffect(() => {
    onLoadData();
  }, []);

  return (
    <div className={cn(`page`, {'page--favorites-empty': isEmpty})}>
      <Header />

      <main className={cn(`page__main page__main--favorites`, {'page__main--favorites-empty': isEmpty})}>
        <div className="page__favorites-container container">
          {isEmpty ? <FavoritesEmpty /> : < FavoritesList offers={offers} />}
        </div>
      </main>

      <Footer />
    </div>
  );
};

FavoritesScreen.propTypes = {
  offers: PropTypes.arrayOf(offerPropType),
  onLoadData: PropTypes.func
};

const mapStateToProps = (state) => ({
  offers: getFavoriteOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFavorites());
  }
});

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
