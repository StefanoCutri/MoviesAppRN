import Movie from './Movie';

const TMDB_API_KEY = '913e10c847c55fbb2045a16908b5870b';

class MovieService {
  async fetchMovies(movieList) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieList}?api_key=${TMDB_API_KEY}`
      );
      const data = await response.json();
      
      // Transform the API response into Movie objects
      const movies = data.results.map((result) => {
        return new Movie(result.id, result.title, result.poster_path, result.overview, result.vote_averages);
      });
      
      return movies;
    } catch (error) {
      console.error(`Error fetching ${movieList} movies:`, error);
      throw error;
    }
  }
}

export default MovieService;
