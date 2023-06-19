import MovieRepository from "./MovieRespository";

class MovieUseCase {
  constructor() {
    this.movieRepository = new MovieRepository();
  }

  async fetchPopularMovies() {
    try {
      const movies = await this.movieRepository.fetchPopularMovies();
      return movies;
    } catch (error) {
      console.error('Error fetching popular movies:', error);
      throw error;
    }
  }
}

export default MovieUseCase;
