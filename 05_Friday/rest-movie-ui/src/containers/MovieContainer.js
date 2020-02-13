import React from "react";
import useFetchEndpoint from "../hooks/useFetchEndpoint";
import MovieList from "../components/movie/MovieList";

const MovieContainer = () => {
  const { isLoading, data } = useFetchEndpoint({
    url: "http://localhost:8080/week03-movie/api/movies/all"
  });

  return <MovieList isLoading={isLoading} data={data} />;
};

export default MovieContainer;
