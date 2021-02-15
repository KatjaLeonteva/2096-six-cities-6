import React, {useEffect} from 'react';

import PropTypes from 'prop-types';
import {offerPropType} from '../../prop-types';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = (props) => {
  const {offers} = props;
  const city = offers[0].city;

  const icon = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [27, 39]
  });

  const activeIcon = leaflet.icon({
    iconUrl: `img/pin-active.svg`,
    iconSize: [27, 39]
  });

  useEffect(() => {
    const center = [city.location.latitude, city.location.longitude];
    const zoom = city.location.zoom;
    const map = leaflet.map(`map`, {
      center,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(center, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offers.forEach((offer) => {
      leaflet
        .marker([offer.location.latitude, offer.location.longitude], {icon})
        .addTo(map);
    });

  }, []);

  return (
    <div id="map" style={{height: `100%`}}></div>
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(offerPropType)
};

export default Map;
