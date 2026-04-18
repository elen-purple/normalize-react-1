import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchAuthors } from './authorsOperations';

export const authorsAdapter = createEntityAdapter({
  selectId: author => author.id,
});

const initialState = authorsAdapter.getInitialState({
  error: null,
});

const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchAuthors.fulfilled, (state, action) => {
        authorsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchAuthors.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export const authorsReducer = authorsSlice.reducer;
