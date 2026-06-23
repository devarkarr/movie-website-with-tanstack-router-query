/** @format */

import { useGetMovies } from "../service/movie/queries";
import MovieCard from "./movieCard";

const MovieList = () => {
  const { data, isPending, isError } = useGetMovies();

  return (
    <div className="grid grid-cols-5 gap-3">
      
      {(isPending || isError) &&
        new Array(10)
          .fill(0)
          .map((_, idx) => (
            <div key={idx} className="w-full h-[400px] bg-red-200"></div>
          ))}

      {data?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
