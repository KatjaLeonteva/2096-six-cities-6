import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const total = 312;

const places = [
  {
    id: `1`,
    imageLink: `img/apartment-01.jpg`,
    price: 120,
    rating: 4,
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    favorite: false,
    premium: true
  },
  {
    id: `2`,
    imageLink: `img/room.jpg`,
    price: 80,
    rating: 4,
    name: `Wood and stone place`,
    type: `Private room`,
    favorite: true,
    premium: false
  },
  {
    id: `3`,
    imageLink: `img/apartment-02.jpg`,
    price: 132,
    rating: 4,
    name: `Canal View Prinsengracht`,
    type: `Apartment`,
    favorite: false,
    premium: false
  },
  {
    id: `4`,
    imageLink: `img/apartment-03.jpg`,
    price: 180,
    rating: 5,
    name: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    favorite: false,
    premium: true
  }
];


ReactDOM.render(
    <App total={total} places={places} />,
    document.querySelector(`#root`)
);
