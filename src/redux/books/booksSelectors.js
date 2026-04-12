import { selectFilter } from 'redux/filter/filterSelector';
import { createSelector } from 'reselect';

export const selectBooks = state => state.books.entities;

export const selectFilteredBooks = createSelector(
  [selectBooks, selectFilter],
  (books, filter) => {
    console.log();
    return books.filter(({ title }) =>
      title.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
