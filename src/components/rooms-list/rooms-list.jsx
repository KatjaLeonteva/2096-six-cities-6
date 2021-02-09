import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {roomPropType} from '../../prop-types';

import RoomCard from '../room-card/room-card';

import {cardTypes} from '../../const';

const RoomsList = (props) => {
  const {places} = props;
  const [currentCard, setCurrentCard] = useState(null);

  const handleMouseEnter = (evt) => {
    //
  };

  const handleMouseOut = () => {
    setCurrentCard(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => (
        <RoomCard
          key={place.id}
          place={place}
          type={cardTypes.MAIN}
          handleMouseEnter={handleMouseEnter}
          handleMouseOut={handleMouseOut} />
      ))}
    </div>
  );

};

RoomsList.propTypes = {
  places: PropTypes.arrayOf(roomPropType)
};

export default RoomsList;
