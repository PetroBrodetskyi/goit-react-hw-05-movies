import { MovieAPI } from 'serviсes/moviesApi';
import { Button } from 'components/Button/Button';
import { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import css from "./MuvieDetails.module.css"

const movieAPI = new MovieAPI();

const BASE_URL = 'https://image.tmdb.org/t/p/w400';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [err, setErr] = useState(null);
  const { movieId } = useParams();
  const location = useRef(useLocation());
  const backLink = location.current.state?.from ?? '/';
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await movieAPI.getMovieDetails(movieId);
        setMovie(resp);
      } catch (err) {
        setErr(err);
      }
    }
    fetchData();
  }, [movieId]);

  const { title, poster_path, overview, vote_average, genres } = movie || {};

  return (
    <>
      <Button text={'<- Go back'} handleClick={() => navigate(backLink)} />
      {movie && (
        <>
          <div className={css.muviecontainer}>
            <img className={css.imgcontainer} src={BASE_URL + poster_path} alt="poster" />
            <div>
              <h1>{title}</h1>
              <p>User score: {(vote_average * 10).toFixed()}%</p>
              <h2>Overview</h2>
              <p>{overview ? overview : 'N/A'}</p>
              <h2>Genres</h2>
              <p>{genres.length > 0 ? genres.map(i => i.name) : 'N/A'}</p>
              
              </div>
          </div>
          <h3 className={css.infotitle}>Additional information</h3>
            <ul className={css.infoflex}>
              <li>
              <Link className={css.infolink} to={'cast'}>
                  Cast
                </Link>
              </li>
              <li>
                <Link className={css.infolink} to={'reviews'}>
                  Reviews
                </Link>
              </li>
            </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
      {err && <h1>Oooops... Please reload page</h1>}
    </>
  );
}