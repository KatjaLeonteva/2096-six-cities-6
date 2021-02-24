import React from 'react';
import PropTypes from 'prop-types';
import {authInfoPropType} from '../../../prop-types';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../../store/user/api-actions';

import Header from '../../header/header';
import SignInForm from '../../sign-in-form/sign-in-form';

import {AuthorizationStatus} from '../../../const';

const SignInScreen = (props) => {
  const {authStatus, authInfo, onLogoutClick} = props;
  const isAuthorized = authStatus === AuthorizationStatus.AUTH;

  const handleLogoutClick = (evt) => {
    evt.preventDefault();
    onLogoutClick();
  };

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <SignInForm />
            {isAuthorized && <p>Not {authInfo.name}? <a href="#" onClick={handleLogoutClick}>Logout</a></p>}
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/?city=Amsterdam">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

SignInScreen.propTypes = {
  authStatus: PropTypes.oneOf(Object.values(AuthorizationStatus)),
  authInfo: authInfoPropType,
  onLogoutClick: PropTypes.func
};

const mapStateToProps = (state) => ({
  authStatus: state.user.authorizationStatus,
  authInfo: state.user.authInfo
});

const mapDispatchToProps = (dispatch) => ({
  onLogoutClick() {
    dispatch(logout());
  }
});

export {SignInScreen};
export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
