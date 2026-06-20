/** @format */

import { useQuery } from "@tanstack/react-query";
import api, { authJsonHeader } from "../api";
import type { IMovie } from "./types";

// get movies
const getMovies = async () => {
  const response = await api.get("trending/movie/week", {
    headers: authJsonHeader(),
  });
  return response.data;
};

export const useGetMovies = () =>
  useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
    select: (data): IMovie[] => data.results,
  });

//   get movie by id
const getMovieById = async (id: number) => {
  const response = await api.get(`movie/${id}`, {
    headers: authJsonHeader(),
  });
  return response.data;
};

export const useGetMovieById = (id: number) =>
  useQuery({
    queryKey: ["movies", id],
    queryFn: () => getMovieById(id),
    //   select: (data): IMovie[] => data.results,
  });
