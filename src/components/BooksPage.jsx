import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import books from '../books';
import Book from './Book';
import BooksPageStyles from '../styles/BooksPageStyles';

function capitalize(str) {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}

const useStyles = createUseStyles(BooksPageStyles);

let abooks;
let fbooks;

try {
  abooks = JSON.parse(localStorage.getItem('allBooks'));
  fbooks = JSON.parse(localStorage.getItem('favoriteBooks'));
} catch {
  fbooks = [];
  abooks = books.map((el, i) => ({ ...el, id: i, rating: 0 }));
}

const sortTypes = ['title', 'rating', 'year'];
const countries = [...new Set(books.map((el) => el.country))].sort();

const BooksPage = () => {
  const [searchBook, setSearchBook] = useState('');
  const [allBooks, setAllBooks] = useState(
    abooks || books.map((el, i) => ({ ...el, id: i, rating: 0 })),
  );
  const [favoriteBooks, setFavoriteBooks] = useState(fbooks || []);
  const [isFavorite, toggleFavorite] = useState(false);
  const classes = useStyles(isFavorite);
  const [sort, setSort] = useState({ type: null, dir: true });
  const [selectedCountries, setSelectedCountries] = useState([]);

  const someSort = (type) => {
    const newSort = sort.type === type ? { type, dir: !sort.dir } : { type, dir: true };
    setSort(newSort);
    setAllBooks(
      allBooks.sort(
        !newSort.dir
          ? (a, b) => (b[newSort.type] >= a[newSort.type] ? 1 : -1)
          : (a, b) => (b[newSort.type] < a[newSort.type] ? 1 : -1),
      ),
    );
    setFavoriteBooks(
      favoriteBooks.sort(
        !newSort.dir
          ? (a, b) => (b[newSort.type] >= a[newSort.type] ? 1 : -1)
          : (a, b) => (b[newSort.type] < a[newSort.type] ? 1 : -1),
      ),
    );
  };
  const togFavorite = (el) => {
    const newFavoriteBooks = favoriteBooks.filter((q) => q.id === el.id).length > 0
      ? favoriteBooks.filter((q) => q.id !== el.id)
      : [...favoriteBooks, el];
    setFavoriteBooks(newFavoriteBooks);
    localStorage.removeItem('favoriteBooks');
    localStorage.setItem('favoriteBooks', JSON.stringify(newFavoriteBooks));
  };
  const changeRating = (el, newRating) => {
    const newAllBooks = allBooks.map((x) => (x.id === el.id ? { ...x, rating: newRating } : x));
    const newFavoriteBooks = favoriteBooks.map(
      (x) => (x.id === el.id ? { ...x, rating: newRating } : x),
    );
    setAllBooks(newAllBooks);
    setFavoriteBooks(newFavoriteBooks);
    localStorage.removeItem('allBooks');
    localStorage.removeItem('favoriteBooks');
    localStorage.setItem('allBooks', JSON.stringify(newAllBooks));
    localStorage.setItem('favoriteBooks', JSON.stringify(newFavoriteBooks));
  };
  return (
    <>
      <div className={classes.columnFixed}>
        <input
          value={searchBook}
          onChange={
          (e) => setSearchBook(e.target.value)
        }
          className={classes.search}
        />
        <ul className={classes.scrollable}>
          <label htmlFor="select all">
            <input
              type="checkbox"
              checked={!selectedCountries.length}
              onChange={
                    () => setSelectedCountries(selectedCountries.length > 0 ? [] : countries)
                  }
            />
            all
          </label>
          {
            countries.map((el) => (
              <label htmlFor={el}>
                <input
                  type="checkbox"
                  checked={selectedCountries.includes(el)}
                  onChange={
                    () => (setSelectedCountries(!selectedCountries.includes(el)
                      ? [...selectedCountries, el]
                      : [...selectedCountries.filter((ctr) => ctr !== el)]))
                  }
                />
                {el}
              </label>
            ))
          }
        </ul>
        <div className={classes.sorts}>
          {sortTypes.map((el) => (
            <div role="button" tabIndex={0} onClick={() => someSort(el)} onKeyDown={() => someSort(el)}>
              {capitalize(el)}
              {' '}
              {sort.type === el && (sort.dir ? '↑' : '↓')}
            </div>
          ))}
        </div>
        <button
          type="button"
          className={classes.button}
          onClick={() => toggleFavorite(!isFavorite)}
        >
          {' '}
          Favorite
          {' '}
        </button>

      </div>
      <div className={classes.books}>
        {
          (isFavorite ? favoriteBooks : allBooks).filter(
            (el) => el.title.toLowerCase().includes(searchBook.toLowerCase())
            && (!selectedCountries.length || selectedCountries.includes(el.country)),
          )
            .map(
              (el) => {
                const {
                  author, title, year, country, rating,
                } = el;
                return (
                  <Book
                    key={el.id}
                    author={author}
                    title={title}
                    year={year}
                    country={country}
                    rating={rating}
                    favorite={favoriteBooks.filter((q) => q.id === el.id).length > 0}
                    togFavorite={
                    () => togFavorite(el)
                  }
                    changeRating={(newRating) => changeRating(el, newRating)}
                  />
                );
              },
            )
        }
      </div>
    </>
  );
};

export default BooksPage;
