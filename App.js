import React from "react";
import { Provider } from "mobx-react";
import MovieViewModel from "./src/viewmodels/MovieViewModel";
import MovieListScreen from "./src/components/MovieListScreen";

const movieViewModel = new MovieViewModel();

const App = () => {


  return (
      <Provider moviesViewModel={movieViewModel}>
      <MovieListScreen movieList="popular" />
      <MovieListScreen movieList="top_rated" />
      <MovieListScreen movieList="now_playing" />
    </Provider>
  );
};

export default App;
