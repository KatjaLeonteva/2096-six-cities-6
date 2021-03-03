import React from 'react';
import PropTypes from 'prop-types';

import {useHistory} from 'react-router-dom';

import {connect} from 'react-redux';
import {ActionCreator} from '../../store/main/action';

import {Cities} from '../../const';

import cn from 'classnames';

const CitiesList = (props) => {
  const {activeCity, onChangeCity} = props;
  const history = useHistory();

  const handleCityClick = (evt) => {
    evt.preventDefault();
    onChangeCity(evt.target.innerText);
    history.push(`/`);
  };

  return (
    <ul className="locations__list tabs__list">
      {Object.values(Cities).map((city) => (
        <li className="locations__item" key={city}>
          <a className={cn(`locations__item-link tabs__item`, {'tabs__item--active': city === activeCity})} href="#" onClick={handleCityClick}>
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

CitiesList.propTypes = {
  activeCity: PropTypes.oneOf(Object.values(Cities)),
  onChangeCity: PropTypes.func.isRequired
};

const mapStateToProps = ({MAIN}) => ({
  activeCity: MAIN.activeCity
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
