import Movie from "../models/Movie";
import { fetchApiMovies } from "../data/tmdbApi";

class MovieViewModel {
  constructor(){
    this.movies = [];
    this.isLoading = false;
  }

  async fetchMovies(movieList) {
    try {
      this.isLoading = true;
      const movieData = await fetchApiMovies(movieList);
      console.log(movieData);
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
      movies = moviesFetched
      isLoading = false;
    } catch (error) {
      console.error(`Error fetching ${movieList} movies:`, error);
      throw error;
    }
  }
}

export default MovieViewModel;
