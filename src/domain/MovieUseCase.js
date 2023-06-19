import { fetchMovies } from "../data/tmdbApi";

class MovieUseCase {
  async fetchMovies(movieList) {
    try {
      const movies = await fetchMovies(movieList);
      return movies;
    } catch (error) {
      console.error(`Error fetching ${movieList} movies:`, error);
      throw error;
    }
  }
}

export default MovieUseCase;
