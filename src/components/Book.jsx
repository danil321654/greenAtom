import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import BookStyles from '../styles/BookStyles';

const useStyles = createUseStyles(BookStyles);

const Book = ({
  author, title, year, country, favorite, rating, changeRating, togFavorite,
}) => {
  const classes = useStyles(favorite);
  return (

    <div className={classes.book}>
      <div>{author}</div>
      <div className={classes.title}>
        {title}
      </div>
      {' '}
      <div>
        {`${country} ${year}`}
      </div>
      {' '}
      <div>
        <button
          type="button"
          className={classes.smallButton}
          disabled={rating === 0}
          onClick={() => changeRating(rating - 1)}
        >
          -
        </button>
        {`Rating: ${rating}`}
        <button
          type="button"
          className={classes.smallButton}
          disabled={rating === 10}
          onClick={() => changeRating(rating + 1)}
        >
          +
        </button>
      </div>
      <button className={classes.button} type="button" onClick={() => togFavorite()}> like </button>
    </div>
  );
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  changeRating: PropTypes.func.isRequired,
  togFavorite: PropTypes.func.isRequired,
};

export default Book;
