import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://69d0ebf090cd06523d5da5a9.mockapi.io/';

export const fetchAuthors = createAsyncThunk(
  'authors/fetchAuthors',
  async (_, { rejectWithValue }) => {
    try {
      const authors = await axios.get(`/authors`);
      return authors.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
