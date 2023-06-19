const TMDB_API_KEY = '913e10c847c55fbb2045a16908b5870b';

 class MovieRepository {
  async fetchPopularMovies(movieList) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieList}?api_key=${TMDB_API_KEY}`
      );
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching popular movies:', error);
      throw error;
    }
  }
}

export default MovieRepository;
