import React from 'react';
import MainScreen from '../main-screen/main-screen';

const places = [
  {
    imageLink: `img/apartment-01.jpg`,
    price: 120,
    rating: 4,
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    favorite: false,
    premium: true
  },
  {
    imageLink: `img/room.jpg`,
    price: 80,
    rating: 4,
    name: `Wood and stone place`,
    type: `Private room`,
    favorite: true,
    premium: false
  },
  {
    imageLink: `img/apartment-02.jpg`,
    price: 132,
    rating: 4,
    name: `Canal View Prinsengracht`,
    type: `Apartment`,
    favorite: false,
    premium: false
  },
  {
    imageLink: `img/apartment-03.jpg`,
    price: 180,
    rating: 5,
    name: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    favorite: false,
    premium: true
  }
];

const App = () => {
  return (
    <MainScreen places={places} />
  );
};

export default App;
