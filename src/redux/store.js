import { configureStore } from '@reduxjs/toolkit';
import { booksReducer } from './books/booksSlice';
import { filterReducer } from './filter/filterReducer';
import { authorsReducer } from './authors/authorsSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReducer,
    authors: authorsReducer,
  },
});
