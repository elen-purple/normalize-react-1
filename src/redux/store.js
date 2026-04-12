import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksReducer';
import { filterReducer } from './filter/filterReducer';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReducer,
  },
});
