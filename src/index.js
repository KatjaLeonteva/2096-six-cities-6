import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

import offers from './mocks/offers';
import reviews from './mocks/reviews';

const total = 312;
const city = `Amsterdam`;

ReactDOM.render(
    <App total={total} city={city} places={offers} reviews={reviews} />,
    document.querySelector(`#root`)
);
