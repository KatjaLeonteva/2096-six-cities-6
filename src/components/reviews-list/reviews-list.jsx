import React from 'react';
import PropTypes from 'prop-types';
import {reviewPropType} from '../../prop-types';

const ReviewsList = (props) => {
  const {reviews} = props;

  const getMonthYear = (str) => {
    const d = new Date(str);
    const months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
    return `${months[d.getMonth()]} ${d.getFullYear()}`;
  };

  const formatDate = (str) => {
    const d = new Date(str);
    let month = (d.getMonth() + 1).toString();
    let day = (d.getDate()).toString();
    const year = d.getFullYear();

    if (month.length < 2) {
      month = `0${month}`;
    }
    if (day.length < 2) {
      day = `0` + day;
    }

    return [year, month, day].join(`-`);
  };

  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <li className="reviews__item" key={review.id}>
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
            </div>
            <span className="reviews__user-name">{review.user.name}</span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{width: `${Math.round(review.rating) * 20}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">{review.comment}</p>
            <time className="reviews__time" dateTime={formatDate(review.date)}>{getMonthYear(review.date)}</time>
          </div>
        </li>
      ))}
    </ul>
  );

};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropType)
};

export default ReviewsList;
