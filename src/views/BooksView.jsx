import { useEffect } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import slugify from 'slugify';
import { useSelector, useDispatch } from 'react-redux';
import { booksOperations, booksSelectors } from 'redux/books';
import PageHeading from 'components/PageHeading/PageHeading';
import { Filter } from 'components/Filter/Filter';
import { fetchAuthors } from 'redux/authors/authorsOperations';

const makeSlug = string => slugify(string, { lower: true });

export default function BooksView() {
  const location = useLocation();
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const books = useSelector(booksSelectors.selectFilteredBooks);

  useEffect(() => {
    dispatch(fetchAuthors());
    dispatch(booksOperations.fetchBooks());
  }, [dispatch]);

  return (
    <>
      <PageHeading text="Книги" />
      <Filter />
      {books.length > 0 && (
        <ul>
          {books.map(({ id, title }) => (
            <li key={id}>
              <Link
                to={{
                  pathname: `${url}/${makeSlug(`${title} ${id}`)}`,
                  state: {
                    from: {
                      location,
                      label: 'Назад до всіх книг',
                      id: id,
                    },
                  },
                }}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
