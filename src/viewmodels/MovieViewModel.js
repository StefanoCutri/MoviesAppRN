import Movie from "../models/Movie";
import { fetchApiMovies } from "../data/tmdbApi";
import { observable } from "mobx";

class MovieViewModel {
  @observable movies = [];
  @observable isLoading = false;

  async fetchMovies(movieList) {
    try {
      this.isLoading = true;
      const movieData = await fetchApiMovies(movieList);
      const moviesFetched = movieData.map(
        (data) =>
          new Movie(
            data.id,
            data.title,
            data.poster_path,
            data.vote_average,
            data.overview
          )
      );
      // console.log("moviesFetched", moviesFetched);
      movies = "123";
      isLoading = false;
    } catch (error) {
      console.error(`Error fetching ${movieList} movies:`, error);
      throw error;
    }
  }
}

export default MovieViewModel;
