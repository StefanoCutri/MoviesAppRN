import React from "react";
import MovieViewModel from "./src/viewmodels/MovieViewModel";
import MovieListScreen from "./src/components/MovieListScreen";

const movieViewModel = new MovieViewModel();

const App = () => {


  return (
      <>
      <MovieListScreen movieList="popular" />
      <MovieListScreen movieList="top_rated" />
      <MovieListScreen movieList="now_playing" />
    </>
  );
};

export default App;
