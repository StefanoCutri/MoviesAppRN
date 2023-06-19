// src/api/tmdbApi.js

const TMDB_API_KEY = '913e10c847c55fbb2045a16908b5870b';

export const fetchPopularMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};
