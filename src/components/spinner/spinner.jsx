import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({text = `Loading...`}) => {
  return (
    <div>{text}</div>
  );
};

Spinner.propTypes = {
  text: PropTypes.string
};

export default Spinner;
