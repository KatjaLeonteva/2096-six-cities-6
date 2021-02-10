import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {roomPropType} from '../../prop-types';

import RoomCard from '../room-card/room-card';

import {cardTypes} from '../../const';

const RoomsList = (props) => {
  const {places} = props;
  // eslint-disable-next-line no-unused-vars
  const [activeCard, setActiveCard] = useState(null);

  const handleMouseEnter = (selectedCard) => {
    setActiveCard(selectedCard);
  };

  const handleMouseOut = () => {
    setActiveCard(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => (
        <RoomCard
          key={place.id}
          place={place}
          type={cardTypes.MAIN}
          onMouseEnter={handleMouseEnter}
          onMouseOut={handleMouseOut} />
      ))}
    </div>
  );

};

RoomsList.propTypes = {
  places: PropTypes.arrayOf(roomPropType)
};

export default RoomsList;
