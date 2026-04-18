import { useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';
import { useDispatch, useSelector } from 'react-redux';
import { selectByIdBook } from 'redux/books/booksSelectors';
import { booksOperations } from 'redux/books';
import { fetchAuthors } from 'redux/authors/authorsOperations';
import { selectByIdAuthor } from 'redux/authors/authorsSelectors';

export default function BookDetailsView() {
  const location = useLocation();
  const { slug } = useParams();
  let bookId = '';
  const dispatch = useDispatch();
  const book = useSelector(state =>
    selectByIdBook(state, location?.state?.from?.id),
  );

  if (book) {
    bookId = book.authorId;
  }

  const author = useSelector(state => selectByIdAuthor(state, bookId));

  useEffect(() => {
    dispatch(fetchAuthors());
    dispatch(booksOperations.fetchBooks());
  }, [dispatch]);

  return (
    <>
      <PageHeading text={`Книга ${slug}`} />
      {book && (
        <>
          <Link to={location?.state?.from?.location ?? '/books'}>
            {location?.state?.from?.label ?? 'Назад'}
          </Link>
          <hr />

          <img src={book.imgUrl} alt={book.title} />
          <h2>{book.title}</h2>
          <p>Автор: {author?.name}</p>
          <p>{book.descr}</p>
        </>
      )}
    </>
  );
}
