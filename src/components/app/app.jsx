import React from 'react';
import PropTypes from 'prop-types';
import {reviewPropType} from '../../prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainScreen from '../main-screen/main-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreenContainer from '../offer-screen/offer-screen-container';
import NotFoundScreen from '../not-found-screen/not-found-screen';

import {AppRoutes} from '../../const';


const App = (props) => {
  const {reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoutes.MAIN}>
          <MainScreen />
        </Route>
        <Route exact path={AppRoutes.LOGIN}>
          <SignInScreen />
        </Route>
        <Route exact path={AppRoutes.FAVORITES}>
          <FavoritesScreen />
        </Route>
        <Route exact path={AppRoutes.OFFER}>
          <OfferScreenContainer reviews={reviews} />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropType)
};

export default App;
