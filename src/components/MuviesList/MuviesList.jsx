import { MoviesListItem } from "./MuviesListItem";

export function MoviesList({ data }) {
    return <>
            {data.map(item => <MoviesListItem key={`${item.id}${item.title}`} data={item} />)}
    </>
}