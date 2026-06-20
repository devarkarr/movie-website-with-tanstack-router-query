/** @format */

import { useGetMovies } from "../service/movie/queries";
import MovieCard from "./movieCard";

const MovieList = () => {
  const { data } = useGetMovies();

  return (
    <div className="grid grid-cols-5 gap-3">
      {data?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
