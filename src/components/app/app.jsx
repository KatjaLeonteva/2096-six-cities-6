import React from 'react';
import PropTypes from 'prop-types';
import {roomPropType} from '../../prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainScreen from '../main-screen/main-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';


const App = (props) => {
  const {total, city, places, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen total={total} city={city} places={places.filter((place) => place.city.name === city)} />
        </Route>
        <Route exact path="/login">
          <SignInScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen places={places.filter((place) => place.isFavorite)}/>
        </Route>
        <Route exact path="/offer/:id">
          <RoomScreen place={places[0]} placesNearby={[places[1], places[2], places[3]]} reviews={reviews} />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  total: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  places: PropTypes.arrayOf(roomPropType)
};

export default App;
