import { selectFilter } from 'redux/filter/filterSelector';
import { createSelector } from 'reselect';
import { booksAdapter } from './booksSlice';

export const {
  selectAll: selectAllBooks,
  selectById: selectByIdBook,
} = booksAdapter.getSelectors(state => state.books);

export const selectFilteredBooks = createSelector(
  [selectAllBooks, selectFilter],
  (books, filter) => {
    console.log();
    return books.filter(({ title }) =>
      title.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
