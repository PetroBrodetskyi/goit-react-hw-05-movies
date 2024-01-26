import { MovieAPI } from 'serviсes/moviesApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from "./Reviews.module.css"

const movieAPI = new MovieAPI();

export default function Reviews() {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await movieAPI.getMovieReviews(movieId);
        setData(resp.results);
        console.log('resp:', resp);
      } catch (error) {
        setErr(error);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      {data.length > 0 ? (
        <ul className={css.reviewlist}>
          {data.map(({ id, author, content }) => (
            <li key={id}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available</p>
      )}
      {err && <h1>Oooops... Please reload page</h1>}
    </>
  );
}
