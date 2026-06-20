/** @format */

import { Link } from "@tanstack/react-router";
import type { IMovie } from "../service/movie/types";

const ImageBaseUrl = import.meta.env.VITE_TMDB_IMAGE_URL;

type MovieCardProps = {
  movie: IMovie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Link to={"/movie/$id"} params={{ id: movie.id }}>
      <img
        src={`${ImageBaseUrl}${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-auto"
      />
      <div className="text-center">{movie.title}</div>
      <p>{movie.release_date}</p>
    </Link>
  );
};

export default MovieCard;
