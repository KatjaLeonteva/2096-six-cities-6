import React from 'react';
import {Link} from 'react-router-dom';

import {Paths} from '../../const';

const Header = () => {
  const isAuthorized = false; // TODO: implement authorisation later

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={Paths.MAIN}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={isAuthorized ? Paths.FAVORITES : Paths.LOGIN}>
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  {isAuthorized ?
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    :
                    <span className="header__login">Sign in</span>
                  }
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
