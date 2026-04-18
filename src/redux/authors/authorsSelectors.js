import { authorsAdapter } from './authorsSlice';

export const { selectById: selectByIdAuthor } = authorsAdapter.getSelectors(
  state => state.authors,
);
