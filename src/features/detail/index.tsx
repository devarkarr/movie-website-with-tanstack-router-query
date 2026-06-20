/** @format */

import { useParams } from "@tanstack/react-router";
import { useGetMovieById } from "../../service/movie/queries";

const ImageBaseUrl = import.meta.env.VITE_TMDB_IMAGE_URL;

const DetailPage = () => {
  const { id } = useParams({ from: "/movie/$id" });
  const { data: movie } = useGetMovieById(id);

  return (
    <div>
      <img
        src={`${ImageBaseUrl}${movie?.poster_path}`}
        alt={movie?.title}
        className="w-full h-[500px]"
      />
      <h1 className="text-2xl font-bold mb-4">{movie?.title}</h1>
      <p className="mb-2">Release Date: {movie?.release_date}</p>
      <p className="mb-2">Rating: {movie?.vote_average}</p>
      <p className="mb-2">Overview: {movie?.overview}</p>
    </div>
  );
};

export default DetailPage;
