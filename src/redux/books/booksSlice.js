import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from './booksOperations';

export const booksAdapter = createEntityAdapter({
  selectId: book => book.id,
});

const initialState = booksAdapter.getInitialState({
  isLoading: false,
  error: null,
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        booksAdapter.setAll(state, action.payload);
        state.isLoading = false;
      })
      .addCase(fetchBooks.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const booksReducer = booksSlice.reducer;
