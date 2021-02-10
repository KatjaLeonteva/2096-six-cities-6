import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {roomPropType} from '../../prop-types';

import RoomCard from '../room-card/room-card';

import {cardTypes} from '../../const';

const RoomsList = (props) => {
  const {places} = props;
  const [activeCard, setActiveCard] = useState({});

  const handleMouseEnter = (selectedCard) => {
    setActiveCard(selectedCard);
  };

  const handleMouseLeave = () => {
    setActiveCard({});
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => (
        <RoomCard
          key={place.id}
          place={place}
          type={cardTypes.MAIN}
          isActive={activeCard.id === place.id}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} />
      ))}
    </div>
  );

};

RoomsList.propTypes = {
  places: PropTypes.arrayOf(roomPropType)
};

export default RoomsList;
