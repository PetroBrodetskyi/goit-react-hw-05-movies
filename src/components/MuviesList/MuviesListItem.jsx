import { Link, useLocation } from 'react-router-dom';
import css from "./MuviesListItem.module.css"
import img from 'img/img.png';

const BASE_URL = 'https://image.tmdb.org/t/p/w300';

export function MoviesListItem({ data: { id, poster_path, title } }) {
  const location = useLocation();
  
  return (
    <div className={css.postercard}>
      <Link to={`/movies/${id}`} state={{ from: location }} className={css.linkwithoutunderline}>
          <img
            src={poster_path ? BASE_URL + poster_path : img}
            alt="poster"
        />
        <h2 className={css.postertitle}>{title}</h2>
      </Link>
    </div>
  );
}
