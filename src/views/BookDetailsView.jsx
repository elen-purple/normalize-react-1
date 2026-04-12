import { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';
import * as bookShelfAPI from '../services/bookshelf-api';

export default function BookDetailsView() {
  const location = useLocation();
  const { slug } = useParams();
  const bookId = slug.match(/[a-z0-9]+$/)[0];
  const [book, setBook] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(async () => {
    if (location?.state?.from?.id) {
      await bookShelfAPI.fetchBookById(location?.state?.from?.id).then(setBook);
      if (book?.authorId) {
        await bookShelfAPI.fetchAuthorById().then(setAuthor);
      }
    }
  }, [bookId]);
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
