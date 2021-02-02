import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';

const App = (props) => {
  const {total, places} = props;

  return (
    <MainScreen total={total} places={places} />
  );
};

App.propTypes = {
  total: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(
      PropTypes.shape({
        imageLink: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        favorite: PropTypes.bool,
        premium: PropTypes.bool
      })
  )
};

export default App;
