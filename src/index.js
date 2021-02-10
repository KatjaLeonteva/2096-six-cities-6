import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

import offers from './mocks/offers';
import reviews from './mocks/reviews';

const total = 312;
const currentCity = `Amsterdam`;

ReactDOM.render(
    <App total={total} currentCity={currentCity} offers={offers} reviews={reviews} />,
    document.querySelector(`#root`)
);
