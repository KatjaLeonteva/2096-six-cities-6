import React, {useState, useEffect, createRef} from 'react';

import {SortingTypes} from '../../const';

import classnames from 'classnames';

const OffersSorting = () => {
  const [opened, setOpened] = useState(false);
  const [active, setActive] = useState(SortingTypes[0]);
  const formNode = createRef();

  const handleDropdownClick = () => {
    setOpened((prevState) => !prevState);
  };

  const handleItemClick = (evt) => {
    setActive(evt.target.innerText);
    setOpened(false);
  };

  const handleClickOutside = (evt) => {
    if (formNode.current.contains(evt.target)) {
      return;
    }
    setOpened(false);
  };

  useEffect(() => {
    if (opened) {
      document.addEventListener(`mousedown`, handleClickOutside);
    } else {
      document.removeEventListener(`mousedown`, handleClickOutside);
    }

    return () => {
      document.removeEventListener(`mousedown`, handleClickOutside);
    };
  }, [opened]);

  return (
    <form className="places__sorting" action="#" method="get" ref={formNode} style={{display: `inline-block`}}>
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex="0" onClick={handleDropdownClick}>
        {active}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classnames(`places__options places__options--custom`, {'places__options--opened': opened})}>
        {SortingTypes.map((item, i) => (
          <li className={classnames(`places__option`, {'places__option--active': active === item})} tabIndex="0" key={`sorting${i}`} onClick={handleItemClick}>{item}</li>
        ))}
      </ul>
    </form>
  );
};

export default OffersSorting;
