import axios from 'axios';

axios.defaults.baseURL = 'https://69d0ebf090cd06523d5da5a9.mockapi.io';

export async function fetchBooks() {
  const { data } = await axios.get(`/books`);
  return data;
}

export async function fetchBookById(bookId) {
  const { data } = await axios.get(`/books/${bookId}`);
  return data;
}

export async function fetchAuthorById(authorId) {
  const { data } = await axios.get(`/books/${authorId}`);
  return data;
}
