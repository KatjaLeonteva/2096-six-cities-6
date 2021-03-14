import React from 'react';
import ReactDOM from 'react-dom';
import {Router as BrowserRouter} from 'react-router-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './store/root-reducer';
import {ActionCreator} from './store/action';
import {checkAuth} from './store/api-actions';
import {redirect} from './store/middlewares/redirect';

import App from './components/app/app';
import {AuthorizationStatus} from './const';

import browserHistory from './browser-history';

import {createAPI} from './services/api';

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect)
));

store.dispatch(checkAuth()).then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter history={browserHistory}>
          <App />
        </BrowserRouter>
      </Provider>,
      document.querySelector(`#root`)
  );
});
