import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';

import {connect} from 'react-redux';
import {fetchOffers} from '../../store/api-actions';
import {getDataLoadedStatus} from '../../store/main/selectors';

import MainScreen from '../screens/main-screen/main-screen';
import SignInScreen from '../screens/sign-in-screen/sign-in-screen';
import FavoritesScreen from '../screens/favorites-screen/favorites-screen';
import OfferScreenContainer from '../screens/offer-screen/offer-screen-container';
import NotFoundScreen from '../screens/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import Spinner from '../spinner/spinner';

import {AppRoutes} from '../../const';
import browserHistory from '../../browser-history';


const App = (props) => {
  const {isDataLoaded, onLoadOffersData} = props;

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadOffersData();
    }
  }, [isDataLoaded]);

  return (
    !isDataLoaded ?
      <Spinner/>
      :
      <BrowserRouter history={browserHistory}>
        <Switch>
          <Route exact path={AppRoutes.MAIN}>
            <MainScreen/>
          </Route>
          <Route exact path={AppRoutes.LOGIN}>
            <SignInScreen/>
          </Route>
          <Route exact path={AppRoutes.OFFER}>
            <OfferScreenContainer/>
          </Route>
          <PrivateRoute exact path={AppRoutes.FAVORITES} render={() => <FavoritesScreen/>}/>
          <Route>
            <NotFoundScreen/>
          </Route>
        </Switch>
      </BrowserRouter>
  );
};

App.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadOffersData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: getDataLoadedStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOffersData() {
    dispatch(fetchOffers());
  }
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
