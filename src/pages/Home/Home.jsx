import { MovieAPI } from "serviсes/moviesApi";
import { MoviesList } from "components/MuviesList/MuviesList";
import { useEffect, useState } from "react";
import css from "./Home.module.css"

const movieAPI = new MovieAPI();

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [err, setErr] = useState(null);

    useEffect(() => {
    
    async function fetchData () {
            try {
                const resp = await movieAPI.getTrending()
                setMovies(resp.results)
            } catch (err) {
                setErr(err)
            }
        
    }
        fetchData()
    }, [])
    
    return <>
        {movies.length > 0 && <>
            <h1 className={css.headertitle}>Trending today</h1>
            <MoviesList data={movies} />
        </>}
        {err && <h1>Oooops... Please reload page</h1>}
    </>
}