import React from "react";
import MovieViewModel from "./src/viewmodels/MovieViewModel";
import MovieListScreen from "./src/components/MovieListScreen";
import { MoviesStore } from "./src/Store";
import { ScrollView } from "react-native";


const App = () => {
const store = new MoviesStore()
  return (
      <ScrollView>
      <MovieListScreen store={store} movieList="popular" />
      <MovieListScreen store={store}  movieList="top_rated" />
      <MovieListScreen store={store}  movieList="now_playing" />
    </ScrollView>
  );
};

export default App;
